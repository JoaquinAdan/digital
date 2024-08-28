import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { Button } from '@/modules/shared/components/ui/button'
import { BookOpenText, Pencil, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router'
// import { useCreateIncident } from '../../hooks/use-create-incident'

export default function Actions({ id }: { id: number }) {
  const navigate = useNavigate()

  return (
    <div className='flex gap-2 w-auto'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='outline' onClick={() => navigate(`/admin/reclamos/${id}`)}>
            <BookOpenText className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ir al reclamo</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='outline'>
            <Pencil className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Editar</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='outline'>
            <Trash2 className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Eliminar</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
