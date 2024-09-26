import { Button } from '@/modules/shared/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/modules/shared/components/ui/tooltip'
import { BookOpenText } from 'lucide-react'
import { useNavigate } from 'react-router'
import DeleteClaim from '../use-cases/delete-claim'
import PATHS from '@/configs/constants/paths'
import UpdateClaim from '../use-cases/update-claim'

export default function Actions({ id }: { id?: string }) {
  const navigate = useNavigate()

  return (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            onClick={() => navigate(`${PATHS.ADMIN.CLAIMS + PATHS.GENERICS.DETAIL}/${id}`)}
          >
            <BookOpenText className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ir al reclamo</p>
        </TooltipContent>
      </Tooltip>
      <UpdateClaim id={id} />
      <DeleteClaim id={id} />
    </div>
  )
}
