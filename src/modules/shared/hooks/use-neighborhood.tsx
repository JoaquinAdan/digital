import { useQuery } from '@tanstack/react-query'
import { getNeighborhoodHttp } from '../services/get-neighborhood'
import { NominatimCoordsResponse } from '../dto/nominatim-coords-response.dto'

export const GET_CLAIM_DETAIL = 'GET_CLAIM_DETAIL'

export const useNeighborhood = (lat: string, lon: string, enabled: boolean) => {
  const neighborhood = useQuery<NominatimCoordsResponse>({
    queryKey: [GET_CLAIM_DETAIL],
    queryFn: () => getNeighborhoodHttp(lat, lon),
    enabled,
  })

  return neighborhood
}
