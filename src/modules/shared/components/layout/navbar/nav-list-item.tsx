// import { List, ListItem, Typography } from '@material-tailwind/react'
// import NavMenu from './nav-menu'

import { cn } from '@/lib/utils'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import React from 'react'

// const NavList = () => {
//   return (
//     <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
//       <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
//         <ListItem className='flex items-center gap-2 py-2 pr-4'>Inicio</ListItem>
//       </Typography>
//       <NavMenu />
//       <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
//         <ListItem className='flex items-center gap-2 py-2 pr-4'>Contactos</ListItem>
//       </Typography>
//     </List>
//   )
// }

// export default NavList

type ListItemProps = {
  className?: string
  title?: string
  children?: React.ReactNode
  href?: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
              {' '}
              {React.createElement(icon, {
                strokeWidth: 2,
                className: 'h-6 text-gray-900 w-6',
              })}
            </div>
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

export default ListItem
