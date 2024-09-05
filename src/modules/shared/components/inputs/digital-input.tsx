import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { Input } from '@/modules/shared/components/ui/input'

type Props<T extends FieldValues> = {
  name: Path<T>
  label: string
  form: UseFormReturn<T>
  placeholder: string
  styles?: string
}
const DigitalInput = <T extends FieldValues>({ name, label, styles, form, placeholder }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={styles}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} className='w-full' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DigitalInput
