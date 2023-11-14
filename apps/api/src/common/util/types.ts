import { Role } from '@foundation/util/types'

// Todo: Fix this type based on next auth user type.
export type GetUserType = {
  uid: string
  displayName: string
  email: string
  emailVerified: boolean
  roles?: Role[]
}
