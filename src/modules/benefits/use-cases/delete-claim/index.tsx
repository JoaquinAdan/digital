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
import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteClaim = ({ id }: { id?: string }) => {
  const [open, setOpen] = React.useState(false)
  const removeClaim = () => {
    setOpen(false)
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
          <Button type='submit' variant='destructive' size='sm' onClick={removeClaim}>
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteClaim