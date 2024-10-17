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
import { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  name: Path<T>
  label: string
  form: UseFormReturn<T>
  options: { label: string; value: string }[] | undefined
  styles?: string
  placeholder: string
}

const DigitalAutocomplete = <T extends FieldValues>({ name, label, styles, form, options, placeholder }: Props<T>) => {
  const [open, setOpen] = React.useState(false)
  return (
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
                  <p className={`max-w-[${styles === 'col-span-2' ? '462px' : '219px'}] truncate`}>
                    {field.value ? options?.find(option => option.value === field.value)?.label : `Selecciona ${placeholder}`}
                  </p>
                  <ChevronRight
                    className={`ml-2 h-4 w-4 shrink-0 opacity-50 transition-all ${open ? 'rotate-90' : 'rotate-0'}`}
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
                    {options?.map((option, i) => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={() => {
                          form.setValue(name, option.value as PathValue<T, Path<T>>)
                          form.clearErrors(name)
                        }}
                        className={`gap-2 ${options.length - 1 !== i && 'border-b-[1px]'}`}
                      >
                        <p className={`max-w-[${styles === 'col-span-2' ? '462px' : '219px'}] whitespace-break-spaces`}>
                          {option.label}
                        </p>
                        <Check className={cn('ml-auto h-4 w-4', option.value === field.value ? 'opacity-100' : 'opacity-0')} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DigitalAutocomplete
