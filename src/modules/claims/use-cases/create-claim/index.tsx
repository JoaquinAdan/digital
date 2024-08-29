import { DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/modules/shared/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription } from '@/modules/shared/components/ui/dialog'
import { toast } from '@/modules/shared/components/ui/use-toast'
import { Button } from '@/modules/shared/components/ui/button'
import { Form } from '@/modules/shared/components/ui/form'
import { useClaimsStore } from '../../stores/mock-store'
import { zodResolver } from '@hookform/resolvers/zod'
import ClaimForm from '../../components/form'
import { useForm } from 'react-hook-form'
import { Plus } from 'lucide-react'
import React from 'react'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  observation: z.string().min(1, 'Debes escribir una observación para el reclamo'),
  neighborhood: z.string().min(1, 'Debes escribir un barrio'),
})

const CreateClaim = () => {
  // hardcode
  const { setClaimsData, claimsData } = useClaimsStore()
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
      title: 'Reclamo registrado',
      description: 'El reclamo ha sido registrado con exito',
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
  const lastClaimId = claimsData[claimsData.length - 1].id
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setClaimsData({ ...values, id: lastClaimId ? lastClaimId + 1 : 0 })
    form.reset()
    setOpen(false)
    onSuccess()
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

export default CreateClaim