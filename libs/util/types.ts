import { ReactNode } from 'react'

export type Role = 'admin' | 'manager'
export type MenuItem = { label: string; href: string; loggedIn: boolean }

export type BaseComponent = {
  children?: ReactNode
  className?: string
}
