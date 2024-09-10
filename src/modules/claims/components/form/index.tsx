import { UseFormReturn } from 'react-hook-form'
import { Claim } from '../../dto/claim.dto'
import MapSelector from './map-selector'
import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import DigitalTextarea from '@/modules/shared/components/inputs/digital-textarea'
import InputLayout from '@/modules/shared/components/inputs/input-layout'

const ClaimForm = ({ form }: { form: UseFormReturn<Claim> }) => {
  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-2 py-0 md:gap-4 md:py-4'>
      <DigitalInput name='title' placeholder='Escriba un titulo para el reclamo' label='Titulo del reclamo' form={form} />
      <DigitalInput name='neighborhood' placeholder='Escriba un barrio' label='Barrio' form={form} />
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
