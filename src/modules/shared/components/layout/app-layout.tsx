import { ArrowBigLeft } from 'lucide-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

interface Props {
  returnPath?: string
  description?: string
  children: ReactNode
  adminPath?: string
  title?: string
}

const AppLayout = ({ children, title, description, adminPath, returnPath }: Props) => {
  return (
    <div className='w-full'>
      <div className=' w-full justify-between items-center'>
        <div className='px-3'>
          <div className='flex'>
            <h1 color='blue-gray' className='flex text-lg items-center font-bold'>
              {title}
            </h1>
          </div>
          {returnPath && (
            <Link to={returnPath}>
              <Button variant='ghost' className='p-0'>
                <ArrowBigLeft />
                <p>Volver</p>
              </Button>
            </Link>
          )}
          {!returnPath && <p className='text-md font-medium text-blue-gray-500'>{description}</p>}
        </div>

        {adminPath && (
          <Link to={adminPath}>
            <Button color='purple' size='sm'>
              Admin
            </Button>
          </Link>
        )}
      </div>
      <div className='mt-3 w-full'>{children}</div>
    </div>
  )
}

export default AppLayout
