import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  name: Path<T>
  label?: string
  form: UseFormReturn<T>
  children: React.ReactNode
  styles?: string
}
const InputLayout = <T extends FieldValues>({ name, label, styles, form, children }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={styles}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{children}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputLayout
