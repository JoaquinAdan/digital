import { useMutation } from '@tanstack/react-query'
import { NominatimResponse } from '../dto/nominatim-response.dto'
import { getCoordsHttp } from '../services/get-coords'
import { NominatimForm } from '../models/nominatim-form'

export const GET_COORDS = 'GET_COORDS'

export const useCoords = (onSuccess: (data: NominatimResponse[]) => void) => {
  const coords = useMutation<NominatimResponse[], unknown, NominatimForm>({
    mutationFn: async (payload: NominatimForm) => getCoordsHttp(payload),
    onSuccess: (data) => {
      onSuccess(data)
    },
  })

  return coords
}
