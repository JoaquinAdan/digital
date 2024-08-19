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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inicio</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Aplicaciones</NavigationMenuTrigger>
                <NavigationMenuContent className='bg-white'>
                  <NavMenu />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacto</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className='w-32' size='sm'>
            Iniciar sesión
          </Button>
        </>
      ) : (
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger icon={<Menu className='h-8 w-8 shrink-0 transition-transform duration-200' />}>
              <img src={logo} alt='logo' className='w-32' />
            </AccordionTrigger>
            <AccordionContent className='gap-2 flex flex-col'>
              <Button variant='ghost' className='w-full shadow-md'>
                Inicio
              </Button>
              <Accordion type='single' collapsible className='w-full shadow-md rounded-md'>
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
              <Button variant='ghost' className='w-full  shadow-md'>
                Contacto
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}
