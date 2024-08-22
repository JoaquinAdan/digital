import logo from '@/assets/logo.png'
import useBreakpoint from '@/modules/shared/hooks/use-breakpoints'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/modules/shared/components/ui/accordion'
import { Button } from '@/modules/shared/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/modules/shared/components/ui/navigation-menu'
import { ChevronDown, Menu } from 'lucide-react'
import NavMenu from './nav-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Link } from 'react-router-dom'
import navHome from '@/modules/home/routes/nav-item'
import useAuth from '@/modules/auth/hooks/use-auth'
import LoadingButton from '../../ui/loading-button'

export default function NavMegaMenu() {
  const breakpoint = useBreakpoint('xl')
  return (
    <div className='bg-white rounded-xl mt-2 container flex justify-between py-1 xl:py-3 px-3 shadow-md'>
      {!breakpoint ? (
        <>
          <img src={logo} alt='logo' className='w-32' />
          <NavigationMenu className='w-full max-w-none mx-16'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href={navHome.href}>
                  {navHome.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Aplicaciones</NavigationMenuTrigger>
                <NavigationMenuContent className='bg-white'>
                  <NavMenu />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contactos</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <LoginButton width='w-32' />
        </>
      ) : (
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger icon={<Menu className='h-8 w-8 shrink-0 transition-transform duration-200' />}>
              <img src={logo} alt='logo' className='w-32' />
            </AccordionTrigger>
            <AccordionContent className='gap-2 pb-1 flex flex-col'>
              <Link to={navHome.href}>
                <Button variant='ghost' className='w-full border-b-2'>
                  {navHome.title}
                </Button>
              </Link>
              <Accordion type='single' collapsible className='w-full border-b-2 rounded-md'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger hover='background'>
                    <ChevronDown className='h-4 w-4 shrink-0 opacity-0' />
                    <p className='uppercase font-bold'>Aplicaciones</p>
                  </AccordionTrigger>
                  <AccordionContent className='gap-2 flex flex-col'>
                    <NavMenu />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* <Link to={}> */}
              <Button variant='ghost' className='w-full '>
                Contacto
              </Button>
              {/* </Link> */}
              <LoginButton width='w-full' />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

const LoginButton = ({ width }: { width: string }) => {
  const { user, login, logout, isLoadingLogin } = useAuth()
  return (
    <>
      {user ? (
        <div className={`flex justify-center space-x-2 max-${width}`}>
          <Avatar>
            <AvatarImage src='https://github.com/vercel.png' />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div>
            <h4 className='text-sm font-semibold'>@nextjs</h4>
            <div className='flex items-center'>
              <button className='text-xs text-muted-foreground' onClick={logout}>
                logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoadingButton isLoading={isLoadingLogin} className={width} size='sm' onClick={login}>
          Iniciar sesión
        </LoadingButton>
      )}
    </>
  )
}
