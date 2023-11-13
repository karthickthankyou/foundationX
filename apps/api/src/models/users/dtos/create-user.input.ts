import { Field, InputType, PickType } from '@nestjs/graphql'
import { User } from '../entity/user.entity'
import { AuthProviderType } from '@prisma/client'

@InputType()
export class CreateUserWithProviderInput extends PickType(
  User,
  ['image', 'name', 'uid'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType
}

@InputType()
export class CreateUserWithCredentialsInput {
  name: string
  email: string
  password: string
  image?: string
}
