import { DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/modules/shared/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription } from '@/modules/shared/components/ui/dialog'
import { Button } from '@/modules/shared/components/ui/button'
import { Form } from '@/modules/shared/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { z } from 'zod'
import { userDefaultValue } from '../models/user-default-value'
import toast from 'react-hot-toast'
import { UserFormDto } from '../dto/user-form.dto'
import UserForm from '../components/form'

const formSchema = z.object({
  name: z.string().min(1, 'Debes escribir un titulo para el reclamo'),
  email: z.string().min(1, 'Debes escribir una observación para el reclamo').email('Debes escribir un email valido'),
  password: z.string().min(1, 'Debes seleccionar al menos un lenguaje'),
  roles: z.array(z.string()).min(1, 'Debes seleccionar al menos un lenguaje'),
})

const CreateUser = () => {
  const [open, setOpen] = React.useState(false)
  // const onError = () => {
  //   toast({
  //     title: 'Error al registrar evento',
  //     description: 'Ha ocurrido un error al registrar el evento',
  //     variant: 'destructive',
  //   })
  // }

  const onSuccess = () => {
    toast.success('El usuario ha sido registrado con exito')
  }

  const form = useForm<UserFormDto>({
    resolver: zodResolver(formSchema),
    defaultValues: userDefaultValue,
  })
  console.log(form.watch())
  const onSubmit = (values: UserFormDto) => {
    console.log(values)
    form.reset()
    setOpen(false)
    onSuccess()
  }

  useEffect(() => {
    form.reset()
  }, [open, form])

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
          <DialogTitle>Crear usuario</DialogTitle>
          <DialogDescription>Genere un usuario y asignele roles</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <UserForm form={form} />
            <DialogFooter>
              <Button type='submit' size='sm' onClick={() => form.handleSubmit(onSubmit)} className='mt-4'>
                Guardar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateUser
