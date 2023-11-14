'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { SignIn } from '@foundation/ui/src/components/templates/Signin'

export default function SignInPage() {
  const session = useSession()

  if (session?.data?.user) {
    redirect('/')
  }

  return <SignIn />
}
