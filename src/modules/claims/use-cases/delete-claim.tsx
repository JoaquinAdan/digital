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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { useDeleteClaim } from '../hooks/use-delete-claim'
import toast from 'react-hot-toast'
import { GET_CLAIMS } from '../hooks/use-claims'
import LoadingButton from '@/modules/shared/components/ui/loading-button'

const DeleteClaim = ({ id }: { id?: string }) => {
  const [open, setOpen] = React.useState(false)

  const queryClient = useQueryClient()

  const onError = () => toast.error('Ha ocurrido un error al registrar el reclamo')
  const onSuccess = () => {
    toast.success('El reclamo ha sido registrado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_CLAIMS] })
  }

  const mutation = useDeleteClaim(onSuccess, onError)

  const removeClaim = () => {
    setOpen(false)
    mutation.mutate(id)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size='icon' variant='outline' onClick={() => setOpen(true)}>
              <Trash2 className='h-4 w-4' />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Eliminar</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar reclamo</DialogTitle>
          <DialogDescription>
            La informacion relacionada a este reclamo sera eliminada de forma permanente. ¿Estas seguro de querer eliminarlo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LoadingButton isLoading={mutation.isPending} type='submit' variant='destructive' size='sm' onClick={removeClaim}>
            Eliminar
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteClaim
