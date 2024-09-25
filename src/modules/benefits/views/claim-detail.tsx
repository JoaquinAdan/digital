import PATHS from '@/configs/constants/paths'
import AppLayout from '@/modules/shared/components/layout/app-layout'
import DetailClaim from '../use-cases/detail-claim'
import { Button } from '@/modules/shared/components/ui/button'
import useAuth from '@/modules/auth/hooks/use-auth'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/shared/components/ui/popover'
import { useParams } from 'react-router'
import { useClaim } from '../hooks/use-claim'
import { Check, X } from 'lucide-react'

const ClaimDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useClaim(id as string)
  const { user } = useAuth()
  const canAuthorize = user?.roles.some((role) =>
    role.permissions.some(
      (permission) => (permission.action === 'authorize' || permission.action === '*') && permission.scope === 'reclamos'
    )
  )

  return (
    <AppLayout
      title='Reclamos'
      returnPath={PATHS.ADMIN_CLAIMS}
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
        <Button variant='outline' disabled={state === 2 || state === 3}>
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
