import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableClaims from '../use-cases/list-claims'

const Claims = () => {
  return (
    <AppLayout
      title='Reclamos'
      description='Genere un reclamo para que el municipio lo atienda si es de su competencia.'
      adminPath='reclamos'
    >
      <div className='bg-white rounded-md justify-center items-center w-full cursor-pointer h-full flex px-3'>
        <TableClaims />
      </div>
    </AppLayout>
  )
}

export default Claims
