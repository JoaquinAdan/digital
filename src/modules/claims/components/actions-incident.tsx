import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { BookOpenText } from 'lucide-react'
import { useNavigate } from 'react-router'
import DeleteIncident from '../../delete-incident/delete-incident'
// import { useCreateIncident } from '../../hooks/use-create-incident'

export default function ActionsIncident({ id }: { id: number }) {
  const navigate = useNavigate()

  return (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='outline' onClick={() => navigate(`/incidents/${id}`)}>
            <BookOpenText className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ir a incidente</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <DeleteIncident id={id} />
        <TooltipContent>
          <p>Eliminar</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
