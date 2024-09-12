import { UseFormReturn } from 'react-hook-form'
import { Claim } from '../../models/claim'
import MapSelector from './map-selector'
import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import DigitalTextarea from '@/modules/shared/components/inputs/digital-textarea'
import InputLayout from '@/modules/shared/components/inputs/input-layout'
import DigitalAutocomplete from '@/modules/shared/components/inputs/digital-autocomplete'
import { useClaimsCatalog } from '../../hooks/use-claims-catalog'
import { useServiceAreaCatalog } from '../../hooks/use-service-area-catalog'
import { useOriginCatalog } from '../../hooks/use-origin-catalog'

const ClaimForm = ({ form }: { form: UseFormReturn<Claim> }) => {
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
      <DigitalInput name='title' placeholder='Escriba un titulo para el reclamo' label='Titulo del reclamo' form={form} />
      <DigitalInput name='neighborhood' placeholder='Escriba un barrio' label='Barrio' form={form} />
      <DigitalAutocomplete
        name='claimType'
        options={claimsOptions}
        form={form}
        label='Tipo de reclamo'
        placeholder='reclamo'
      />
      <DigitalAutocomplete
        name='serviceArea'
        options={serviceAreaOptions}
        form={form}
        label='Area de servicio'
        placeholder='area de servicio'
      />
      <DigitalAutocomplete
        name='origin'
        options={originOptions}
        form={form}
        label='Origen'
        placeholder='origen'
      />
      <DigitalTextarea
        name='observation'
        placeholder='Escriba una observación para el reclamo'
        label='Observación'
        form={form}
        styles='col-span-2'
      />
      <InputLayout name='coordinates' label='Ubicación del reclamo' form={form} styles='col-span-2'>
        <>
          <div className='w-full border-l-[1px] border-t-[1px] border-r-[1px] rounded-t-md p-1 md:p-2 text-center mb-[-8px]'>
            <p>
              latitud: <span className='font-medium'>{form.watch('coordinates.latitude')?.toFixed(5)}</span>, longitud:
              <span className='font-medium'> {form.watch('coordinates.longitude')?.toFixed(5)}</span>
            </p>
          </div>
          <MapSelector
            value={[form.watch('coordinates.latitude'), form.watch('coordinates.longitude')]}
            setValue={form.setValue}
          />
        </>
      </InputLayout>
    </div>
  )
}

export default ClaimForm
