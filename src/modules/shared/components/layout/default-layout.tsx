import { ReactNode } from 'react'
import NavMegaMenu from './navbar/nav-mega-menu'
import { Outlet } from 'react-router'
import Footer from './footer'

interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center h-full gradient-background w-full'>
      <NavMegaMenu />
      <div className='flex-1 flex mt-3 p-0 container'>{children ?? <Outlet />}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
