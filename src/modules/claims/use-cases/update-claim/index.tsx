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
import { toast } from '@/modules/shared/components/ui/use-toast'
import { Button } from '@/modules/shared/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ClaimForm from '../../components/form'
import { useClaimsStore } from '../../stores/mock-store'

const formSchema = z.object({
  title: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  observation: z.string().min(1, 'Debes escribir una observación para el reclamo'),
  neighborhood: z.string().min(1, 'Debes escribir un barrio'),
})

const UpdateClaim = ({ id }: { id?: number }) => {
  // hardcode
  const { updateClaimsData, getClaimById } = useClaimsStore()
  const [open, setOpen] = React.useState(false)
  // const onError = () => {
  //   toast({
  //     title: 'Error al registrar evento',
  //     description: 'Ha ocurrido un error al registrar el evento',
  //     variant: 'destructive',
  //   })
  // }

  const onSuccess = () => {
    toast({
      title: 'Reclamo actualizado',
      description: 'El reclamo ha sido actualizado con exito',
      variant: 'success',
    })
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      observation: '',
      neighborhood: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    updateClaimsData({ ...values, id })
    form.reset()
    setOpen(false)
    onSuccess()
  }
  console.log(getClaimById(id))

  useEffect(() => {
    form.reset(getClaimById(id))
  }, [id, getClaimById, form])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size='icon' variant='outline' onClick={() => setOpen(true)}>
              <Pencil className='h-4 w-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Editar</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
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
