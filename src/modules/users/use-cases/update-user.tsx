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
import { useQueryClient } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import UserForm from '../components/form'
import { UserFormDto } from '../dto/user-form.dto'
import { useUserById } from '../hooks/use-user'
import { GET_USERS } from '../hooks/use-users'
import { userDefaultValue } from '../models/user-default-value'
import { useUpdateUser } from '../hooks/use-update-user'
import LoadingButton from '@/modules/shared/components/ui/loading-button'

const formSchema = z.object({
  username: z.string().min(1, 'Debes escribir nombre'),
  email: z.string().min(1, 'Debes escribir un email').email('Debes escribir un email valido'),
  password: z.string().min(0).optional(),
  roles: z.array(
    z.object({
      value: z.number(),
      description: z.string(),
      label: z.string(),
    }),
  ),
})

const UpdateUser = React.memo(({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false)
  const queryClient = useQueryClient()

  const data = useUserById(id, open)

  const onError = () => toast.error('Ha ocurrido un error al actualizar el usuario')
  const onSuccess = () => {
    toast.success('El usuario ha sido actualizado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_USERS] })
  }

  const mutation = useUpdateUser(onSuccess, onError)

  const form = useForm<UserFormDto>({
    resolver: zodResolver(formSchema),
    defaultValues: userDefaultValue,
  })

  const onSubmit = (values: UserFormDto) => {
    mutation.mutate({ payload: values, id })
    setOpen(false)
    form.reset()
  }

  useEffect(() => {
    form.reset({
      username: data?.data?.usuario?.username || '',
      email: data?.data?.usuario?.email || '',
      password: '',
      roles: data?.data?.usuario?.roles.map(r => ({ value: r.id, description: r.descripcion, label: r.displayName })) || [],
    })
  }, [form, data?.data])

  if (!id && !open) return null
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
          <p>Actualizar</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className='overflow-auto max-h-[90svh] p-2 sm:p-6 rounded-md'>
        <DialogHeader>
          <DialogTitle>Actualizar usuario</DialogTitle>
          <DialogDescription>Actualice un usuario o sus roles</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <UserForm form={form} id={id} />
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
})

export default UpdateUser
