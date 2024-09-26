import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableAdminForms from '../use-cases/list-forms'

const SocialServices = () => {
  return (
    // título y descripció por props para traer datos de formularios
    <AppLayout title='Administradores' description='Lista de Formularios.'>
      <div className='bg-white rounded-md justify-center items-center w-full cursor-pointer h-full flex px-3'>
        {/* visualizar tabla o encuestas */}
        <TableAdminForms />
      </div>
    </AppLayout>
  )
}

export default SocialServices
