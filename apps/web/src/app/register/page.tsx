'use client'
import { Register } from '@foundation/ui/src/components/templates/Register'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function RegisterPage() {
  const session = useSession()

  if (session?.data?.user) {
    redirect('/')
  }

  return <Register />
}
