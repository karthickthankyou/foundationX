import { CreateUserWithProviderInput } from './create-user.input'
import { InputType, OmitType, PartialType } from '@nestjs/graphql'
import { User } from '@prisma/client'

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserWithProviderInput, ['type']),
) {
  uid: User['uid']
}
