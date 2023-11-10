import {
  AuthProviderType,
  CreateUserWithProviderDocument,
  GetAuthProviderDocument,
  GetCredentialsDocument,
} from '@ultimate/network/src/generated'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextAuthOptions, getServerSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { fetchGraphQL } from './fetch'

const MAX_AGE = 1 * 24 * 60 * 60

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const { email, password } = credentials

        const auth = await fetchGraphQL({
          document: GetCredentialsDocument,
          variables: { email: email },
        })
        if (!auth.data?.getCredentials || auth.error) {
          return null
        }

        const passwordValid = bcrypt.compareSync(
          password,
          auth.data?.getCredentials.credential.passwordHash,
        )

        if (auth.data && passwordValid) {
          const {
            uid,
            name,
            image,
            credential: { email },
          } = auth.data.getCredentials

          return { id: uid, name, image, email }
        } else {
          return null
        }
      },
    }),
  ],
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: MAX_AGE,
  },
  jwt: {
    maxAge: MAX_AGE,
    async encode({ token, secret }): Promise<string> {
      // Create a JWT using the jsonwebtoken library
      if (!token) {
        throw new Error('Token is undefined')
      }

      console.log()

      const { sub, ...tokenProps } = token
      // Get the current date in seconds since the epoch
      const nowInSeconds = Math.floor(Date.now() / 1000)

      // Calculate the expiration timestamp
      const expirationTimestamp = nowInSeconds + MAX_AGE
      const jwtToken = jwt.sign(
        { uid: sub, ...tokenProps, exp: expirationTimestamp },
        secret,
        {
          algorithm: 'HS256',
        },
      )
      return jwtToken
    },
    async decode({ token, secret }): Promise<JWT | null> {
      if (!token) {
        throw new Error('Token is undefined')
      }
      try {
        const decodedToken = jwt.verify(token, secret, {
          algorithms: ['HS256'],
        })
        return decodedToken as JWT
      } catch (error) {
        console.error('JWT decode error', error)
        return null
      }
    },
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        //   Create user
        const { id, name, image } = user

        const existingUser = await fetchGraphQL({
          document: GetAuthProviderDocument,
          variables: {
            uid: id,
          },
        })
        if (!existingUser.data?.getAuthProvider?.uid) {
          const newUser = await fetchGraphQL({
            document: CreateUserWithProviderDocument,
            variables: {
              createUserWithProviderInput: {
                uid: id,
                type: AuthProviderType.Google,
                image,
                name: name || '',
              },
            },

            apiSecret: process.env.INTERNAL_API_SECRET,
          })
          console.log('!!! newUser ', newUser)
        }
      }

      return true
    },
    async session({ token, session }) {
      if (token) {
        session.user = {
          image: token.picture,
          uid: (token.uid as string) || '',
          email: token.email,
          name: token.name,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signin',
  },
}

export const getAuth = () => getServerSession(authOptions)
