import { Button } from '@/modules/shared/components/ui/button'
// import { toast } from '@/modules/shared/components/ui/use-toast'
import { Plus } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/modules/shared/components/ui/dialog'
import { Input } from '@/modules/shared/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Textarea } from '@/modules/shared/components/ui/textarea'
import { Claim } from '../../dto/claim.dto'
import React from 'react'

const formSchema = z.object({
  title: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  observation: z.string().min(1, 'Debes escribir una observación para el reclamo'),
  neighborhood: z.string().min(1, 'Debes escribir un barrio'),
})

const CreateClaim = ({ setClaimsData }: { setClaimsData: React.Dispatch<React.SetStateAction<Claim[]>> }) => {
  const [open, setOpen] = React.useState(false)
  // const onError = () => {
  //   toast({
  //     title: 'Error al registrar evento',
  //     description: 'Ha ocurrido un error al registrar el evento',
  //     variant: 'destructive',
  //   })
  // }

  // const onSuccess = () => {
  //   toast({
  //     title: 'Evento registrado',
  //     description: 'El evento ha sido registrado con exito',
  //     variant: 'default',
  //   })
  // }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      observation: '',
      neighborhood: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setClaimsData((prevData) => [...prevData, { ...values, id: prevData.length + 1 }])
    form.reset()
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus className='h-4 w-4 mr-1 mb-[2px]' />
          Crear
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear reclamo</DialogTitle>
          <DialogDescription>Genere reclamo para visualizar y administrar.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <DialogFooter>
              <Button type='submit' size='sm' onClick={() => form.handleSubmit(onSubmit)}>
                Guardar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateClaim
