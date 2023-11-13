import { Injectable } from '@nestjs/common'
import { FindManyItemArgs, FindUniqueItemArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateItemInput } from './dtos/create-item.input'
import { UpdateItemInput } from './dtos/update-item.input'

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemInput: CreateItemInput) {
    return this.prisma.item.create({
      data: createItemInput,
    })
  }

  findAll(args: FindManyItemArgs) {
    return this.prisma.item.findMany(args)
  }

  findOne(args: FindUniqueItemArgs) {
    return this.prisma.item.findUnique(args)
  }

  update(updateItemInput: UpdateItemInput) {
    const { id, ...data } = updateItemInput
    return this.prisma.item.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueItemArgs) {
    return this.prisma.item.delete(args)
  }
}
