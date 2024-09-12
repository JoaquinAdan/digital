import { useQuery } from '@tanstack/react-query'
import ClaimsCatalogResponse from '../dto/claims-catalog-response.dto'
import { getServiceAreaCatalogHttp } from '../services/get-service-area-catalog'

export const GET_SERVICE_AREA_CATALOG = 'GET_SERVICE_AREA_CATALOG'

export const useServiceAreaCatalog = () => {
  const serviceAreaCatalog = useQuery<ClaimsCatalogResponse>({
    queryKey: [GET_SERVICE_AREA_CATALOG],
    queryFn: getServiceAreaCatalogHttp,
  })

  return serviceAreaCatalog
}
