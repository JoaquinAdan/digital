import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { Input } from '@/modules/shared/components/ui/input'
import { Textarea } from '@/modules/shared/components/ui/textarea'
import { UseFormReturn } from 'react-hook-form'
import { Claim } from '../../dto/claim.dto'
import MapSelector from './map-selector'

const ClaimForm = ({ form }: { form: UseFormReturn<Claim> }) => {
  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-2 py-0 md:gap-4 md:py-4'>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titulo del reclamo</FormLabel>
            <FormControl>
              <Input placeholder='Escriba un titulo para el reclamo' {...field} className='w-full' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='neighborhood'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Barrio</FormLabel>
            <FormControl>
              <Input placeholder='Escriba un barrio' {...field} className='w-full' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='observation'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>Observación</FormLabel>
            <FormControl>
              <Textarea className='' placeholder='Escriba una observación para el reclamo' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='coordinates'
        render={() => (
          <FormItem className='col-span-2'>
            <FormLabel>Observación</FormLabel>
            <div className='w-full border-l-[1px] border-t-[1px] border-r-[1px] rounded-t-md p-1 md:p-2 text-center mb-[-8px]'>
              <p>
                latitud: <span className='font-medium'>{form.watch('coordinates.latitude')?.toFixed(5)}</span>, longitud:
                <span className='font-medium'> {form.watch('coordinates.longitude')?.toFixed(5)}</span>
              </p>
            </div>
            <FormControl>
              <MapSelector
                value={[form.watch('coordinates.latitude'), form.watch('coordinates.longitude')]}
                setValue={form.setValue}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ClaimForm
