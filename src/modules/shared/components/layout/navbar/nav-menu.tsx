import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import { Collapse, ListItem, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import React from 'react'

const navListMenuItems = [
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: UserGroupIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: Bars4Icon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: SunIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: PhoneIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: NewspaperIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Reclamos',
    description: 'Genere un reclamo para que el municipio lo atienda si es de su competencia.',
    icon: TagIcon,
  },
]

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
    <a href='#' key={key}>
      <MenuItem className='flex items-center gap-3 rounded-lg'>
        <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
          {' '}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: 'h-6 text-gray-900 w-6',
          })}
        </div>
        <div>
          <Typography variant='h6' color='blue-gray' className='flex items-center text-sm font-bold'>
            {title}
          </Typography>
          <Typography variant='paragraph' className='text-xs !font-medium text-blue-gray-500'>
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ))

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement='bottom' allowHover={true}>
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Aplicaciones
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}
export default NavMenu
