import { Brand } from '../atoms/brand'
import { ModeToggle } from '../molecules/modeToggle'
import { Sidebar } from './Sidebar'

export interface INavbarProps {}

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-12 border-2 border-white border-y bg-white/40 backdrop-blur backdrop-filter">
      <div className="flex items-center justify-between">
        <Brand />{' '}
        <div>
          <ModeToggle />

          <Sidebar />
        </div>
      </div>
    </nav>
  )
}
