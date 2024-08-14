// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Button, Collapse, IconButton, Navbar } from '@material-tailwind/react'
import logo from '@/assets/logo.png'
// import React from 'react'
// import NavList from './nav-list'
// import useBreakpoint from '@/modules/shared/hooks/use-breakpoints'

// const NavMegaMenu = () => {
//   const [openNav, setOpenNav] = React.useState(false)

//   const breakpoint = useBreakpoint('md')

//   React.useEffect(() => {
//     if (!breakpoint) setOpenNav(false)
//   }, [breakpoint])

//   return (
//     <Navbar className='mx-auto px-4 py-2 mt-2'>
//       <div className='flex items-center justify-between gap-20 text-blue-gray-900'>
//         <img src={logo} alt='logo' className='w-32' />
//         <div className='hidden lg:block'>
//           <NavList />
//         </div>
//         <div className='hidden gap-2 lg:flex'>
//           <Button variant='gradient' color='purple' size='sm' className='w-32'>
//             Iniciar sesión
//           </Button>
//         </div>
//         <IconButton variant='text' color='blue-gray' className='lg:hidden' onClick={() => setOpenNav(!openNav)}>
//           {openNav ? <XMarkIcon className='h-6 w-6' strokeWidth={2} /> : <Bars3Icon className='h-6 w-6' strokeWidth={2} />}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//         <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
//           <Button variant='gradient' color='purple' size='sm' fullWidth>
//             Iniciar sesión
//           </Button>
//         </div>
//       </Collapse>
//     </Navbar>
//   )
// }

// export default NavMegaMenu

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/modules/shared/components/ui/navigation-menu'
import { Button } from '@/modules/shared/components/ui/button'
import NavMenu from './nav-menu'

export default function NavMegaMenu() {
  return (
    <div className='bg-white rounded-xl mt-2 container flex justify-between py-3 px-3 shadow-md'>
      <img src={logo} alt='logo' className='w-32' />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inicio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavMenu />
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacto</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className='w-32'>Iniciar sesión</Button>
    </div>
  )
}
