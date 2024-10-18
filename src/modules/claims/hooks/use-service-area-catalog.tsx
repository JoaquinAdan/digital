import { useQuery } from '@tanstack/react-query'
import CatalogResponse from '../../shared/dto/catalog-response.dto'
import { getServiceAreaCatalogHttp } from '../services/get-service-area-catalog'
import useAuth from '@/modules/auth/hooks/use-auth'

export const GET_SERVICE_AREA_CATALOG = 'GET_SERVICE_AREA_CATALOG'

export const useServiceAreaCatalog = () => {
  const { token } = useAuth()
  const serviceAreaCatalog = useQuery<CatalogResponse>({
    queryKey: [GET_SERVICE_AREA_CATALOG],
    queryFn: () => getServiceAreaCatalogHttp(token as string),
  })

  return serviceAreaCatalog
}
