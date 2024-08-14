// import { ChevronDownIcon } from '@heroicons/react/24/outline'

// import { Collapse, ListItem, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
// import React from 'react'

// const navListMenuItems = [
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: SquaresPlusIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: UserGroupIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: Bars4Icon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: SunIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: GlobeAmericasIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: PhoneIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: NewspaperIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: 'Reclamos',
//     description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
//     icon: TagIcon,
//   },
// ]

// const NavMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
//   const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
//     <a href='#' key={key}>
//       <MenuItem className='flex items-center gap-3 rounded-lg'>
//         <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
//           {' '}
//           {React.createElement(icon, {
//             strokeWidth: 2,
//             className: 'h-6 text-gray-900 w-6',
//           })}
//         </div>
//         <div>
//           <Typography variant='h6' color='blue-gray' className='flex items-center text-sm font-bold'>
//             {title}
//           </Typography>
//           <Typography variant='paragraph' className='text-xs !font-medium text-blue-gray-500'>
//             {description}
//           </Typography>
//         </div>
//       </MenuItem>
//     </a>
//   ))

//   return (
//     <React.Fragment>
//       <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement='bottom' allowHover={true}>
//         <MenuHandler>
//           <Typography as='div' variant='small' className='font-medium'>
//             <ListItem
//               className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Aplicaciones
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
//           <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>{renderItems}</ul>
//         </MenuList>
//       </Menu>
//       <div className='block lg:hidden'>
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   )
// }
// export default NavMenu

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/modules/shared/components/ui/navigation-menu'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import ListItem from './nav-list-item'

const components: {
  title: string
  href: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    icon: Bars4Icon,
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    icon: NewspaperIcon,
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
    icon: PhoneIcon,
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'Menu',
    href: '/docs/primitives/menu',
    description: 'A popup that displays a list of choices.',
    icon: TagIcon,
  },
  {
    title: 'Popover',
    href: '/docs/primitives/popover',
    description: 'A popup that displays a list of choices.',
    icon: UserGroupIcon,
  },
]

const NavMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Aplicaciones</NavigationMenuTrigger>
      <NavigationMenuContent className='bg-white'>
        <ul className='grid w-[1000px] gap-3 p-4 md:grid-cols-3'>
          {components.map((component) => (
            <ListItem key={component.title} title={component.title} href={component.href} icon={component.icon}>
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default NavMenu
