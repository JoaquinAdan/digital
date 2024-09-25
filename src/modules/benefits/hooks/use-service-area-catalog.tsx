import { useQuery } from '@tanstack/react-query'
import CatalogResponse from '../../shared/dto/catalog-response.dto'
import { getServiceAreaCatalogHttp } from '../services/get-service-area-catalog'

export const GET_SERVICE_AREA_CATALOG = 'GET_SERVICE_AREA_CATALOG'

export const useServiceAreaCatalog = () => {
  const serviceAreaCatalog = useQuery<CatalogResponse>({
    queryKey: [GET_SERVICE_AREA_CATALOG],
    queryFn: getServiceAreaCatalogHttp,
  })

  return serviceAreaCatalog
}
