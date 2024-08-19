import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

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
          <h1 color='blue-gray' className='flex text-lg items-center font-bold'>
            {title}
          </h1>
          <p className='text-md font-medium text-blue-gray-500'>{description}</p>
        </div>
        <Link to={adminPath}>
          <Button color='purple' size='sm'>
            Admin
          </Button>
        </Link>
      </div>
      <div className='mt-6 w-full'>{children}</div>
    </div>
  )
}

export default AppLayout
