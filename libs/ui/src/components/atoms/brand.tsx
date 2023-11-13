import Link from 'next/link'

import { cn } from '../../utils'
import { DeveloperInfo } from './developerInfo'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link href="/" className={cn('hover:underline underline-offset-4')}>
        Ultimate monorepo.
      </Link>
      <DeveloperInfo />
    </div>
  )
}
