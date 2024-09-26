import PATHS from '@/configs/constants/paths'
import AppLayout from '@/modules/shared/components/layout/app-layout'
import { Button } from '@/modules/shared/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/shared/components/ui/popover'
import useCanAction from '@/modules/shared/hooks/use-can-action'
import { Check, X } from 'lucide-react'
import { useParams } from 'react-router'
import { useClaim } from '../hooks/use-claim'
import DetailClaim from '../use-cases/detail-claim'

const ClaimDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useClaim(id as string)

  const can = useCanAction()
  const canAuthorize = can('authorize', 'reclamos', 'detail')

  return (
    <AppLayout
      title='Reclamos'
      returnPath={PATHS.ADMIN.CLAIMS}
      actionButton={canAuthorize && <ClaimAuthorize state={data?.data.estadoId} />}
    >
      <DetailClaim data={data?.data} isLoading={isLoading} />
    </AppLayout>
  )
}

export default ClaimDetail

export function ClaimAuthorize({ state }: { state: number | undefined }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='default' disabled={state === 2 || state === 3}>
          {state === 2 ? 'Autorizado' : state === 3 ? 'Rechazado' : 'Pendiente'}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='p-2'>
        <div className='grid gap-2'>
          <Button variant='outline'>
            <Check />
            Autorizar
          </Button>
          <Button variant='outline'>
            <X />
            Rechazar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
