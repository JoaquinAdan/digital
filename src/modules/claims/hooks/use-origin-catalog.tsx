import { useQuery } from '@tanstack/react-query'
import ClaimsCatalogResponse from '../dto/claims-catalog-response.dto'
import { getOriginCatalogHttp } from '../services/get-origin-catalog'

export const GET_ORIGIN_CATALOG = 'GET_ORIGIN_CATALOG'

export const useOriginCatalog = () => {
  const originCatalog = useQuery<ClaimsCatalogResponse>({
    queryKey: [GET_ORIGIN_CATALOG],
    queryFn: getOriginCatalogHttp,
  })

  return originCatalog
}
