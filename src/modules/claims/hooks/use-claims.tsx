import { useQuery } from '@tanstack/react-query'
import { getClaimsHttp } from '../services/get-claims'
import { FilterDto } from '@/modules/shared/models/filter'

export const GET_CLAIMS = 'GET_CLAIMS'

export const useClaims = (filters: FilterDto) => {
  const token = ''
  const claims = useQuery<any>({
    queryKey: [GET_CLAIMS, filters],
    queryFn: () => getClaimsHttp(token, filters),
  })

  return claims
}
