'use client'

import { useFormSignin } from '@foundation/forms/src/signin'
import { Button } from '../atoms/button'
import { signIn } from 'next-auth/react'

import Link from 'next/link'
import { Input } from '../atoms/input'
import { Label } from '../atoms/label'
import { AuthLayout } from './AuthLayout'

export interface IRegisterProps {}

export const SignIn = () => {
  const { register, handleSubmit } = useFormSignin()
  return (
    <AuthLayout title={'Login'}>
      <form
        onSubmit={handleSubmit(({ email, password }) => {
          signIn('credentials', { email, password })
        })}
      >
        <Label title="Email">
          <Input {...register('email')} placeholder="Email" />
        </Label>
        <Label title="Password">
          <Input
            {...register('password')}
            type="password"
            placeholder="Password"
          />
        </Label>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <div className="flex flex-col items-center gap-2 my-6">
        <div>
          New to application?{' '}
          <Link href="/register" className="font-semibold">
            Register.
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
