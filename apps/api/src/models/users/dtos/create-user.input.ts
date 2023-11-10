import { InputType, PickType } from '@nestjs/graphql'
import { User } from '../entity/user.entity'

@InputType()
export class CreateUserInput extends PickType(
  User,
  ['uid', 'name'],
  InputType,
) {}

@InputType()
export class CreateUserWithCredentialsInput {
  name: string
  email: string
  password: string
  image?: string
}
