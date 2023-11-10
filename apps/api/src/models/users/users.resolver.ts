import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { CreateUserInput } from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AuthProvider } from '../authProvider/entity/authProvider.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserInput) {
    return this.usersService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs, @GetUser() user: GetUserType) {
    console.log('user ', user)
    return this.usersService.findAll(args)
  }

  @Query(() => User, { name: 'getCredentials', nullable: true })
  getCredentials(@Args('email') email: string) {
    return this.prisma.user.findFirst({ where: { credentials: { email } } })
  }

  @Query(() => AuthProvider, { name: 'getAuthProvider', nullable: true })
  getAuthProvider(@Args('uid') uid: string) {
    return this.prisma.authProvider.findUnique({ where: { uid } })
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    return this.usersService.update(args)
  }

  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs) {
    return this.usersService.remove(args)
  }
}
