'use client'
import {} from 'lucide-react'

import { useFormRegister } from '@foundation/forms/src/register'
import { Button } from '../atoms/button'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { CreateUserWithCredentialsDocument } from '@foundation/network/src/generated'
import { fetchGraphQL } from '@foundation/common/src/fetch'
import { toast } from '../molecules/Toaster/use-toast'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import { AuthLayout } from './AuthLayout'

export interface IRegisterProps {}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()

  return (
    <AuthLayout title={'Register'}>
      <form
        onSubmit={handleSubmit(async ({ email, password, image, name }) => {
          const user = await fetchGraphQL({
            document: CreateUserWithCredentialsDocument,
            variables: {
              createUserWithCredentialsInput: { email, password, image, name },
            },
          })
          if (user.error) {
            toast({ title: user.error })
          }

          if (user.data) {
            toast({
              title: `User ${user.data.createUserWithCredentials.uid} created. 🎉`,
            })
            signIn('credentials', { email, password, callbackUrl: '/' })
          }

          console.log('usr ', user)
        })}
        className="flex flex-col"
      >
        <Label title="Email" error={errors.email?.message}>
          <Input {...register('email')} placeholder="Email" />
        </Label>
        <Label title="Password" error={errors.password?.message}>
          <Input
            {...register('password')}
            type="password"
            placeholder="••••••"
          />
        </Label>
        <Label title="Name" error={errors.name?.message}>
          <Input {...register('name')} placeholder="Name" />
        </Label>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <div className="flex flex-col items-center gap-2 my-6">
        <div>
          Already have an account?{' '}
          <Link href="/signIn" className="font-semibold">
            Signin?
          </Link>
        </div>
        <div className="h-[1px] bg-black/20 w-36 my-2" />
        <button
          onClick={() => {
            signIn('google')
          }}
          className="text-lg hover:shadow-lg transition-shadow flex items-center justify-center w-8 h-8 border border-[#ea4335] rounded-full"
        >
          G
        </button>
      </div>
    </AuthLayout>
  )
}
