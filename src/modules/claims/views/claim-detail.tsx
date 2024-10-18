import PATHS from '@/configs/constants/paths'
import AppLayout from '@/modules/shared/components/layout/app-layout'
import { Button } from '@/modules/shared/components/ui/button'
import LoadingButton from '@/modules/shared/components/ui/loading-button'
import { Popover, PopoverContent } from '@/modules/shared/components/ui/popover'
import useCanAction from '@/modules/shared/hooks/use-can-action'
import { useQueryClient } from '@tanstack/react-query'
import { Check, X } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router'
import { useAuthorizeClaim } from '../hooks/use-authorize-claim'
import { GET_CLAIM_DETAIL, useClaim } from '../hooks/use-claim'
import DetailClaim from '../use-cases/detail-claim'
import { PopoverTrigger } from '@radix-ui/react-popover'

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
  const [open, setOpen] = React.useState(false)

  const { id } = useParams()
  const queryClient = useQueryClient()

  const onError = () => toast.error('Ha ocurrido un error al registrar el reclamo')
  const onSuccess = () => {
    toast.success('El reclamo ha sido registrado con exito')
    queryClient.invalidateQueries({ queryKey: [GET_CLAIM_DETAIL] })
  }

  const mutation = useAuthorizeClaim(onSuccess, onError)

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button variant='default' disabled={state !== 3} onClick={() => setOpen(!open)}>
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
            onClick={() => {
              mutation.mutate({ payload: { autorizado: true, observaciones: undefined }, id })
              setOpen(false)
            }}
          >
            <Check />
            Autorizar
          </LoadingButton>
          <LoadingButton
            isLoading={mutation.isPending}
            variant='outline'
            onClick={() => {
              mutation.mutate({ payload: { autorizado: false, observaciones: undefined }, id })
              setOpen(false)
            }}
          >
            <X />
            Rechazar
          </LoadingButton>
        </div>
      </PopoverContent>
    </Popover>
  )
}
