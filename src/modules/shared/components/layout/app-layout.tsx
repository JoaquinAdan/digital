import { Button, Typography } from '@material-tailwind/react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
  title: string
  description: string
  adminPath: string
}

const AppLayout = ({ children, title, description, adminPath }: Props) => {
  return (
    <div className='w-full'>
      <div className='flex w-full justify-between items-center'>
        <div>
          <Typography variant='h1' color='blue-gray' className='flex text-lg items-center font-bold'>
            {title}
          </Typography>
          <Typography variant='paragraph' className='text-md font-medium text-blue-gray-500'>
            {description}
          </Typography>
        </div>
        <Link to={adminPath}>
          <Button variant='gradient' color='purple' size='sm'>
            Admin
          </Button>
        </Link>
      </div>
      <div className='mt-10 w-full'>{children}</div>
    </div>
  )
}

export default AppLayout
