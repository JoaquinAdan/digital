import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableVisitorsForms from '../use-cases/list-users'

const SocialServices = () => {
  return (
    <AppLayout title='Visitadores Sociales' description='Lista de Formularios.'>
      <div className='bg-white rounded-md justify-center items-center w-full cursor-pointer h-full flex px-3'>
        <TableVisitorsForms />
      </div>
    </AppLayout>
  )
}

export default SocialServices
