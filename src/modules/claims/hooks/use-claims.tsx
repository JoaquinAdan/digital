import useAuth from '@/modules/auth/hooks/use-auth'
import { FilterDto } from '@/modules/shared/models/filter'
import { useQuery } from '@tanstack/react-query'
import { ClaimsList } from '../dto/claims-list-response.dto'
import { getClaimsHttp } from '../services/get-claims'

export const GET_CLAIMS = 'GET_CLAIMS'

export const useClaims = (filters: FilterDto) => {
  const { token } = useAuth()
  const claims = useQuery<ClaimsList>({
    queryKey: [GET_CLAIMS, filters],
    queryFn: () => getClaimsHttp(token as string, filters),
  })

  return claims
}
