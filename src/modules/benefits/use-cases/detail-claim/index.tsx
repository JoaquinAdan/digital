import { defaultLocation } from '@/configs/constants/default-location'
import Datum from '@/modules/shared/components/Datum'
import MapOnlyView from '@/modules/shared/components/maps/only-view'
import { Claim } from '../../models/claim'

const DetailClaim = ({ data, isLoading }: { data: Claim | undefined; isLoading: boolean }) => {
  return (
    <div className='px-3 h-full md:grid md:grid-cols-2 w-full gap-2'>
      <Datum isLoading={isLoading} title='Vecino' datum={data?.ciudadanoId} />
      <Datum isLoading={isLoading} title='Fecha de creacion' datum={new Date(data?.fechaAlta ?? '').toLocaleDateString()} />
      <Datum
        isLoading={isLoading}
        title='Tipo de incidente'
        datum={typeof data?.tipoIncidente === 'object' && data?.tipoIncidente.descripcion}
      />
      <Datum isLoading={isLoading} title='Origen' datum={typeof data?.origen === 'object' && data?.origen.descripcion} />
      <Datum isLoading={isLoading} title='Prioridad' datum={data?.prioridad.descripcion} />
      <Datum
        isLoading={isLoading}
        title='Area de servicio'
        datum={typeof data?.areaServicio === 'object' && data?.areaServicio.descripcion}
      />
      <Datum isLoading={isLoading} title='Observaciones' datum={data?.observaciones} />
      <Datum
        isLoading={isLoading}
        title='Ubicación del reclamo'
        datum={<MapOnlyView value={defaultLocation} />}
        styles='col-span-2'
      />
    </div>
  )
}

export default DetailClaim
