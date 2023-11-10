import { authOptions } from '@ultimate/common/src/authOptions'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
