import { useQuery } from '@tanstack/react-query'
import { getNeighborhoodCatalogHttp } from '../services/get-neighborhood-catalog'
import Catalog from '../models/catalog'

export const GET_NEIGHBORHOOD_CATALOG = 'GET_NEIGHBORHOOD_CATALOG'

export const useNeighborhoodCatalog = () => {
  const neighborhoodCatalog = useQuery<Catalog[]>({
    queryKey: [GET_NEIGHBORHOOD_CATALOG],
    queryFn: getNeighborhoodCatalogHttp,
  })

  return neighborhoodCatalog
}
