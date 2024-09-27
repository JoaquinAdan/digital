import { defaultLocation } from '@/configs/constants/default-location'
import { Button } from '@/modules/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/modules/shared/components/ui/dialog'
import { Form } from '@/modules/shared/components/ui/form'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ClaimForm from '../components/form'
import { claimDefaultValue } from '../models/claim-default-value'
import { ClaimFormDto } from '../dto/claim-form.dto'
import toast from 'react-hot-toast'

const formSchema = z.object({
  ciudadanoId: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  observaciones: z.string().min(1, 'Debes escribir una observación para el reclamo'),
  tipoIncidente: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  areaServicio: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  origen: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  coordinates: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .refine((coords) => !(coords.latitude === defaultLocation[0] && coords.longitude === defaultLocation[1]), {
      message: 'Las coordenadas específicas no están permitidas.',
    }),
})

const UpdateClaim = ({ id }: { id?: string }) => {
  // hardcode
  const [open, setOpen] = React.useState(false)
  // const onError = () => {
  //   toast({
  //     title: 'Error al registrar evento',
  //     description: 'Ha ocurrido un error al registrar el evento',
  //     variant: 'destructive',
  //   })
  // }

  const onSuccess = () => {
    toast.success('El reclamo ha sido actualizado con exito')
  }

  const form = useForm<ClaimFormDto>({
    resolver: zodResolver(formSchema),
    defaultValues: claimDefaultValue,
  })
  async function onSubmit(values: ClaimFormDto) {
    console.log(values)
    form.reset()
    setOpen(false)
    onSuccess()
  }
  // useEffect(() => {
  //   form.reset(getClaimById(id))
  // }, [id, getClaimById, form])

  useEffect(() => {
    form.reset()
  }, [open, form])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size='icon' variant='outline' onClick={() => setOpen(true)}>
              <Pencil className='h-4 w-4' />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Editar</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className='overflow-auto max-h-[90svh] p-2 sm:p-6'>
        <DialogHeader>
          <DialogTitle>Editar reclamo #{id}</DialogTitle>
          <DialogDescription>Edite reclamo para visualizar y administrar.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ClaimForm form={form} />
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

export default UpdateClaim
