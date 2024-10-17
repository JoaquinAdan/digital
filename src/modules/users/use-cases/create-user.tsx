import { Button } from '@/modules/shared/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/modules/shared/components/ui/dialog'
import { Form } from '@/modules/shared/components/ui/form'
import LoadingButton from '@/modules/shared/components/ui/loading-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import UserForm from '../components/form'
import { UserFormDto } from '../dto/user-form.dto'
import { useCreateUser } from '../hooks/use-create-user'
import { GET_USERS } from '../hooks/use-users'
import { userDefaultValue } from '../models/user-default-value'

const formSchema = z.object({
  username: z.string().min(1, 'Debes escribir nombre'),
  email: z.string().min(1, 'Debes escribir un email').email('Debes escribir un email valido'),
  password: z.string().min(1, 'Debes escribir una contraseña'),
  roles: z.array(
    z.object({
      value: z.number(),
      description: z.string(),
      label: z.string(),
    }),
  ),
})

const CreateUser = () => {
  const [open, setOpen] = React.useState(false)

  const queryClient = useQueryClient()

  const onError = () => toast.error('Ha ocurrido un error al registrar el evento')
  const onSuccess = () => {
    toast.success('El usuario ha sido registrado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_USERS] })
  }

  const mutation = useCreateUser(onSuccess, onError)

  const form = useForm<UserFormDto>({
    resolver: zodResolver(formSchema),
    defaultValues: userDefaultValue,
  })

  const onSubmit = (values: UserFormDto) => {
    mutation.mutate(values)
    form.reset()
    setOpen(false)
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
              <LoadingButton isLoading={mutation.isPending} type='submit' size='sm' className='mt-4'>
                Guardar
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateUser
