import CatalogResponse from '@/modules/shared/dto/catalog-response.dto'
import { useQuery } from '@tanstack/react-query'
import { getPrioritiesCatalogHttp } from '../services/get-priorities-catalog'

export const GET_PRIORITIES_CATALOG = 'GET_PRIORITIES_CATALOG'

export const usePrioritiesCatalog = () => {
  const prioritiesCatalog = useQuery<CatalogResponse>({
    queryKey: [GET_PRIORITIES_CATALOG],
    queryFn: getPrioritiesCatalogHttp,
  })

  return prioritiesCatalog
}
