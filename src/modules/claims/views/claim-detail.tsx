import PATHS from '@/configs/constants/paths'
import AppLayout from '@/modules/shared/components/layout/app-layout'
import { Button } from '@/modules/shared/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/shared/components/ui/popover'
import useCanAction from '@/modules/shared/hooks/use-can-action'
import { Check, X } from 'lucide-react'
import { useParams } from 'react-router'
import { GET_CLAIM_DETAIL, useClaim } from '../hooks/use-claim'
import DetailClaim from '../use-cases/detail-claim'
import { useAuthorizeClaim } from '../hooks/use-authorize-claim'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import LoadingButton from '@/modules/shared/components/ui/loading-button'

const ClaimDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useClaim(id as string)
  const can = useCanAction()

  const canAuthorize = can('reclamos', 'detalle', 'authorize')
  console.log(data)
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
  const queryClient = useQueryClient()

  const onError = () => toast.error('Ha ocurrido un error al registrar el reclamo')
  const onSuccess = () => {
    toast.success('El reclamo ha sido registrado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_CLAIM_DETAIL] })
  }

  const mutation = useAuthorizeClaim(onSuccess, onError)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='default' disabled={state !== 3}>
          {state === 4
            ? 'Autorizado'
            : state === 2
            ? 'Rechazado'
            : state === 5
            ? 'Finalizado'
            : state === 6
            ? 'Anulado'
            : 'Pendiente'}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='p-2'>
        <div className='grid gap-2'>
          <LoadingButton
            isLoading={mutation.isPending}
            variant='outline'
            onClick={() => mutation.mutate({ autorizado: true, observaciones: undefined })}
          >
            <Check />
            Autorizar
          </LoadingButton>
          <LoadingButton
            isLoading={mutation.isPending}
            variant='outline'
            onClick={() => mutation.mutate({ autorizado: false, observaciones: undefined })}
          >
            <X />
            Rechazar
          </LoadingButton>
        </div>
      </PopoverContent>
    </Popover>
  )
}
