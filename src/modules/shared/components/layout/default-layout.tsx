import { ReactNode } from 'react'
import NavMegaMenu from './navbar/nav-mega-menu'
import { Outlet } from 'react-router'

interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='min-h-screen flex flex-col'>
        <NavMegaMenu />
        <div className='flex-1 flex items-center justify-center '>{children ?? <Outlet />}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
