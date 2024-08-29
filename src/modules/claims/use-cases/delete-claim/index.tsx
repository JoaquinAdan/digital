import { DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/modules/shared/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription } from '@/modules/shared/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { Button } from '@/modules/shared/components/ui/button'
import { useClaimsStore } from '../../stores/mock-store'
import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteClaim = ({ id }: { id?: number }) => {
  const [open, setOpen] = React.useState(false)
  const { removeClaimsData } = useClaimsStore()
  const removeClaim = () => {
    removeClaimsData(id)
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size='icon' variant='outline' onClick={() => setOpen(true)}>
              <Trash2 className='h-4 w-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Eliminar</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
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
