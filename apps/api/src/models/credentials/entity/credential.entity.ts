import { ObjectType } from '@nestjs/graphql'
import { Credentials as CredentialType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Credential
  implements RestrictProperties<Credential, CredentialType>
{
  uid: string
  email: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
