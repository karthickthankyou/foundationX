import { Injectable } from '@nestjs/common'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  CreateUserWithCredentialsInput,
  CreateUserWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { AuthProviderType } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

import { v4 as uuid } from 'uuid'
import { User } from './entity/user.entity'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  createWithProvider({ image, name, uid, type }: CreateUserWithProviderInput) {
    return this.prisma.user.create({
      data: {
        name,
        uid,
        image,
        authProvider: {
          create: {
            type,
          },
        },
      },
    })
  }

  async createWithCredentials({
    email,
    name,
    password,
    image,
  }: CreateUserWithCredentialsInput): Promise<User> {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error('User already exists with this email.')
    }

    // Hash the password
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    const uid = this.generateUuid()

    // Create the user and credentials
    const user = await this.prisma.user.create({
      data: {
        name,
        uid,
        image,
        credentials: {
          create: {
            email,
            passwordHash,
          },
        },
        authProvider: {
          create: {
            type: AuthProviderType.CREDENTIALS,
          },
        },
      },
      include: {
        credentials: true,
      },
    })

    // TODO: Handle the case of adding AI user, based on how your AIService works

    return user
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args)
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args)
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput
    return this.prisma.user.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args)
  }

  private generateUuid() {
    return uuid()
  }
}
