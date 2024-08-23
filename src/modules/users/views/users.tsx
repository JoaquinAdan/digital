import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableUsers from '../use-cases/list-users'

const Users = () => {
  return (
    <AppLayout title='Usuarios' description='Administracion de usuarios del sistema.'>
      <div className='bg-white rounded-md justify-center items-center w-full cursor-pointer h-full flex px-3'>
        <TableUsers />
      </div>
    </AppLayout>
  )
}

export default Users
