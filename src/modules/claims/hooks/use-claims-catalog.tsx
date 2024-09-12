import { useQuery } from '@tanstack/react-query'
import ClaimsCatalogResponse from '../dto/claims-catalog-response.dto'
import { getClaimsCatalogHttp } from '../services/get-claims-catalog'

export const GET_CLAIMS_CATALOG = 'GET_CLAIMS_CATALOG'

export const useClaimsCatalog = () => {
  const claimsCatalog = useQuery<ClaimsCatalogResponse>({
    queryKey: [GET_CLAIMS_CATALOG],
    queryFn: getClaimsCatalogHttp,
  })

  return claimsCatalog
}
