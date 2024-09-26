import DigitalAutocomplete from '@/modules/shared/components/inputs/digital-autocomplete'
import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import DigitalTextarea from '@/modules/shared/components/inputs/digital-textarea'
import { UseFormReturn } from 'react-hook-form'
import { ClaimFormDto } from '../../dto/claim-form'
import { useClaimsCatalog } from '../../hooks/use-claims-catalog'
import { useOriginCatalog } from '../../hooks/use-origin-catalog'
import { useServiceAreaCatalog } from '../../hooks/use-service-area-catalog'
import MapSearcher from '../../../shared/components/inputs/map-searcher'

const ClaimForm = ({ form }: { form: UseFormReturn<ClaimFormDto> }) => {
  const claimsCatalog = useClaimsCatalog()
  const serviceAreaCatalog = useServiceAreaCatalog()
  const originCatalog = useOriginCatalog()

  if (claimsCatalog.isLoading || serviceAreaCatalog.isLoading) return <p>Cargando...</p>

  const claimsOptions = claimsCatalog.data?.data.map((c) => {
    return { label: c.descripcion, value: c.id.toString() }
  })

  const serviceAreaOptions = serviceAreaCatalog.data?.data?.map((s) => {
    return { label: s.descripcion, value: s.id.toString() }
  })

  const originOptions = originCatalog.data?.data?.map((s) => {
    return { label: s.descripcion, value: s.id.toString() }
  })

  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-2 py-0 md:gap-4 md:py-4'>
      <DigitalInput
        name='ciudadanoId'
        placeholder='Escriba el nombre del ciudadano'
        label='Titulo del reclamo'
        form={form}
      />
      <DigitalAutocomplete
        name='tipoIncidente'
        options={claimsOptions}
        form={form}
        label='Tipo de reclamo'
        placeholder='reclamo'
      />
      <DigitalAutocomplete
        name='areaServicio'
        options={serviceAreaOptions}
        form={form}
        label='Area de servicio'
        placeholder='area de servicio'
      />
      <DigitalAutocomplete name='origen' options={originOptions} form={form} label='Origen' placeholder='origen' />
      <DigitalTextarea
        name='observaciones'
        placeholder='Escriba una observación para el reclamo'
        label='Observación'
        form={form}
        styles='col-span-2'
      />
      <div className='col-span-2'>
        <MapSearcher form={form} title='reclamo' />
      </div>
    </div>
  )
}

export default ClaimForm
