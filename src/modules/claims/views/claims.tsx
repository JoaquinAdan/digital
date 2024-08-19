import AppLayout from '@/modules/shared/components/layout/app-layout'
import TableIncidents from '../use-cases/list-claims'

const Claims = () => {
  const divStyle = 'w-full h-10 rounded-md flex justify-center items-center  w-full '
  return (
    <AppLayout
      title='Reclamos'
      description='Genere un reclamo para que el municipio lo atienda si es de su competencia.'
      adminPath='reclamos'
    >
      <div className='flex w-full gap-4 mt-4 h-full'>
        <div className={`bg-white ${divStyle} cursor-pointer h-full flex w-full px-3`}>
          <TableIncidents />
        </div>
      </div>
    </AppLayout>
  )
}

export default Claims
