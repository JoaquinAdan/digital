import useAuth from '@/modules/auth/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'
import { ClaimDetail } from '../dto/claim-detail-response.dto'
import { getClaimByIdHttp } from '../services/get-claim-by-id'

export const GET_CLAIM_DETAIL = 'GET_CLAIM_DETAIL'

export const useClaim = (id: string) => {
  const { token } = useAuth()
  const claim = useQuery<ClaimDetail>({
    queryKey: [GET_CLAIM_DETAIL, id],
    queryFn: () => getClaimByIdHttp(token as string, id),
  })

  return claim
}
