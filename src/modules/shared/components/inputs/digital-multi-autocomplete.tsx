import { cn } from '@/lib/utils'
import { Button } from '@/modules/shared/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/modules/shared/components/ui/command'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/shared/components/ui/popover'
import { Check, ChevronRight } from 'lucide-react'
import React from 'react'
import { ArrayPath, FieldValues, Path, PathValue, useFieldArray, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  name: Path<T>
  label: string
  form: UseFormReturn<T>
  options: { label: string; value: string }[] | undefined
  styles?: string
  placeholder: string
}

const DigitalMutilAutocomplete = <T extends FieldValues>({ name, label, styles, form, options, placeholder }: Props<T>) => {
  const [open, setOpen] = React.useState(false)

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: name as ArrayPath<T>,
  })
  console.log(fields)
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={styles}>
            <FormLabel>{label}</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button variant='outline' role='combobox' className='w-full normal-case justify-between'>
                    {field.value && !Array.isArray(field.value)
                      ? options?.find(option => option.value === field.value)?.label
                      : `Selecciona ${placeholder}`}
                    <ChevronRight
                      className={`ml-2 h-4 w-4 shrink-0 opacity-50 transition-all ${open ? 'rotate-90' : 'rotate-0  '}`}
                    />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              {/* <PopoverContent className='w-[219px] max-w-[219px] p-0'>
              <Command className='max-w-[219px]'> */}
              <PopoverContent
                className={`w-[${styles === 'col-span-2' ? '462px' : '219px'}] max-w-[${
                  styles === 'col-span-2' ? '462px' : '219px'
                }] p-0`}
              >
                <Command className={`max-w-[${styles === 'col-span-2' ? '462px' : '219px'}]`}>
                  <CommandInput placeholder={`Buscar ${placeholder}...`} className='h-9' />
                  <CommandList>
                    <CommandEmpty>Ningun resultado encontrado.</CommandEmpty>
                    <CommandGroup>
                      {options?.map(option => {
                        const isSelected = fields.find(f => f.value === option.value)
                        const onSelect = () => {
                          if (isSelected) {
                            remove(fields.findIndex(f => f.value === option.value))
                            return
                          }
                          append(option as PathValue<T, Path<T>>)
                        }
                        return (
                          <CommandItem value={option.label} key={option.value} onSelect={onSelect}>
                            {option.label}
                            <Check className={cn('ml-auto h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')} />
                          </CommandItem>
                        )
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className={`flex flex-col gap-1 max-h-52 overflow-y-auto w-full ${styles}`}>
        {fields.map((field, index) => (
          <div key={field.id} className='flex items-center gap-2'>
            <Button disabled={field.value === 'ciudadano'} variant='outline' onClick={() => remove(index)} size='sm'>
              X
            </Button>
            <span className='text-xs text-gray-500'>{field.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default DigitalMutilAutocomplete
