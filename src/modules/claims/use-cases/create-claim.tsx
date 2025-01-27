import { DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/modules/shared/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription } from '@/modules/shared/components/ui/dialog'
import { Button } from '@/modules/shared/components/ui/button'
import { Form } from '@/modules/shared/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import ClaimForm from '../components/form'
import { useForm } from 'react-hook-form'
import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { z } from 'zod'
import { defaultLocation } from '@/configs/constants/default-location'
import { claimDefaultValue } from '../models/claim-default-value'
import { ClaimFormDto } from '../dto/claim-form.dto'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { GET_CLAIMS } from '../hooks/use-claims'
import { useCreateClaim } from '../hooks/use-create-claim'

const formSchema = z.object({
  ciudadano: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  observaciones: z.string().min(1, 'Debes escribir una observación para el reclamo'),
  tipoIncidente: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  areaServicio: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  origen: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  coordinates: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .refine(coords => !(coords.latitude === defaultLocation[0] && coords.longitude === defaultLocation[1]), {
      message: 'Las coordenadas específicas no están permitidas.',
    }),
  barrio: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  direccion: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  prioridad: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
})

const CreateClaim = () => {
  const [open, setOpen] = React.useState(false)

  const queryClient = useQueryClient()

  const onError = () => toast.error('Ha ocurrido un error al registrar el reclamo')
  const onSuccess = () => {
    toast.success('El reclamo ha sido registrado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_CLAIMS] })
  }

  const mutation = useCreateClaim(onSuccess, onError)

  const form = useForm<ClaimFormDto>({
    resolver: zodResolver(formSchema),
    defaultValues: claimDefaultValue,
  })

  const onSubmit = (values: ClaimFormDto) => {
    mutation.mutate(values)
    form.reset()
    setOpen(false)
  }

  useEffect(() => {
    form.reset()
  }, [open, form])
  console.log(form.watch())
  console.log(form.formState.errors)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>
          <Plus className='h-4 w-4 mr-1 mb-[2px]' />
          Crear
        </Button>
      </DialogTrigger>
      <DialogContent className='overflow-auto max-h-[90svh] p-2 sm:p-6 rounded-md'>
        <DialogHeader>
          <DialogTitle>Crear reclamo</DialogTitle>
          <DialogDescription>Genere reclamo para visualizar y administrar.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ClaimForm form={form} />
            <DialogFooter>
              <Button type='submit' size='sm' className='mt-4'>
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
