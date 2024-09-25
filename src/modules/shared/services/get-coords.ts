import { handler } from '@/http/handler'
import { NominatimResponse } from '../dto/nominatim-response.dto'
import { NominatimForm } from '../models/nominatim-form'

export const getCoordsHttp = (payload: NominatimForm): Promise<NominatimResponse[]> => {
  return handler(fetch(`https://nominatim.openstreetmap.org/search?q=${payload.street},${payload.city}&format=json`))
}
