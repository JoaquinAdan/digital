import { List, ListItem, Typography } from '@material-tailwind/react'
import NavMenu from './nav-menu'

const NavList = () => {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
        <ListItem className='flex items-center gap-2 py-2 pr-4'>Home</ListItem>
      </Typography>
      <NavMenu />
      <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
        <ListItem className='flex items-center gap-2 py-2 pr-4'>Contact Us</ListItem>
      </Typography>
    </List>
  )
}

export default NavList
