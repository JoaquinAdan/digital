import { handler } from '@/http/handler'
import { NominatimCoordsResponse } from '../dto/nominatim-coords-response.dto'

export const getNeighborhoodHttp = (lat: string, lon: string): Promise<NominatimCoordsResponse> => {
  return handler(fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`))
}
