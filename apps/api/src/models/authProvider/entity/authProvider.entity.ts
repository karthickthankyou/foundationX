import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, AuthProvider as AuthProviderType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.AuthProviderType, {
  name: 'AuthProviderType',
})

@ObjectType()
export class AuthProvider
  implements RestrictProperties<AuthProvider, AuthProviderType>
{
  uid: string
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType
}
