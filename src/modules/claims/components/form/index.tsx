import DigitalAutocomplete from '@/modules/shared/components/inputs/digital-autocomplete'
import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import DigitalTextarea from '@/modules/shared/components/inputs/digital-textarea'
import { useNeighborhoodCatalog } from '@/modules/shared/hooks/use-neighborhood-catalog'
import { UseFormReturn } from 'react-hook-form'
import MapSearcher from '../../../shared/components/maps/searcher'
import { ClaimFormDto } from '../../dto/claim-form.dto'
import { useClaimsCatalog } from '../../hooks/use-claims-catalog'
import { useOriginCatalog } from '../../hooks/use-origin-catalog'
import { usePrioritiesCatalog } from '../../hooks/use-priorities-catalog'
import { useServiceAreaCatalog } from '../../hooks/use-service-area-catalog'

const ClaimForm = ({ form }: { form: UseFormReturn<ClaimFormDto> }) => {
  const neighborhoodCatalog = useNeighborhoodCatalog()
  const serviceAreaCatalog = useServiceAreaCatalog()
  const prioritiesCatalog = usePrioritiesCatalog()
  const claimsCatalog = useClaimsCatalog()
  const originCatalog = useOriginCatalog()

  if (
    claimsCatalog.isLoading ||
    serviceAreaCatalog.isLoading ||
    originCatalog.isLoading ||
    neighborhoodCatalog.isLoading ||
    prioritiesCatalog.isLoading
  ) {
    return <p>Cargando...</p>
  }

  const claimsOptions = claimsCatalog.data?.data.map(c => {
    return { label: c.descripcion, value: c.id.toString() }
  })

  const serviceAreaOptions = serviceAreaCatalog.data?.data?.map(s => {
    return { label: s.descripcion, value: s.id.toString() }
  })

  const originOptions = originCatalog.data?.data?.map(o => {
    return { label: o.descripcion, value: o.id.toString() }
  })

  const prioritiesOptions = prioritiesCatalog.data?.data?.map(o => {
    return { label: o.descripcion, value: o.id.toString() }
  })

  const neighborhoodOptions = neighborhoodCatalog.data?.map(n => {
    return { label: n.descripcion, value: n.id.toString() }
  })

  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-2 py-0 md:gap-4 md:py-4'>
      <DigitalInput name='direccion' placeholder='Direccion' label='Dirección' form={form} />
      <DigitalAutocomplete name='barrio' options={neighborhoodOptions} form={form} label='Barrio' placeholder='barrio' />
      <DigitalAutocomplete name='prioridad' options={prioritiesOptions} form={form} label='Prioridad' placeholder='prioridad' />
      <DigitalAutocomplete
        name='tipoIncidente'
        options={claimsOptions}
        form={form}
        label='Tipo de reclamo'
        placeholder='tipo de reclamo'
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
