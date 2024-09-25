import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableAdminForms from '../use-cases/list-users'

const SocialServices = () => {
  return (
    <AppLayout title='Administradores' description='Lista de Formularios.'>
      <div className='bg-white rounded-md justify-center items-center w-full cursor-pointer h-full flex px-3'>
        <TableAdminForms />
      </div>
    </AppLayout>
  )
}

export default SocialServices
