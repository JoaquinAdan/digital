import { useQuery } from '@tanstack/react-query'
import { getNeighborhoodHttp } from '../services/get-neighborhood'
import { NominatimCoordsResponse } from '../dto/nominatim-coords-response.dto'

export const GET_NOMINATIM_NEIGHBORHOOD = 'GET_NOMINATIM_NEIGHBORHOOD'

export const useNeighborhood = (lat: string, lon: string, enabled: boolean) => {
  const neighborhood = useQuery<NominatimCoordsResponse>({
    queryKey: [GET_NOMINATIM_NEIGHBORHOOD],
    queryFn: () => getNeighborhoodHttp(lat, lon),
    enabled,
  })

  return neighborhood
}
