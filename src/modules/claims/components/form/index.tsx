import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { Textarea } from '@/modules/shared/components/ui/textarea'
import { Input } from '@/modules/shared/components/ui/input'
import { Claim } from '../../dto/claim.dto'
import { UseFormReturn } from 'react-hook-form'

const ClaimForm = ({ form }: { form: UseFormReturn<Claim> }) => {
  return (
    <div className='grid grid-cols-2 gap-4 py-4'>
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
    </div>
  )
}

export default ClaimForm
