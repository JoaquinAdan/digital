import { apiBase } from '@/configs/constants/api-base'
import { ClaimFormDto } from '../dto/claim-form.dto'
import { handler } from '@/http/handler'

export const postClaimHttp = (payload: ClaimFormDto, token: string): Promise<unknown> => {
  return handler(
    fetch(`${apiBase}/Incidentes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AreaServicioId: payload.areaServicio,
        TipoIncidenteId: payload.tipoIncidente,
        PrioridadId: payload.prioridad,
        OrigenId: payload.origen,
        OtrosDatos: undefined,
        CiudadanoId: '507be90a-e7ed-485c-ad1e-04052ec27c74',
        Observaciones: payload.observaciones,
        Latitud: payload.coordinates.latitude,
        Longitud: payload.coordinates.longitude,
        BarrioId: payload.barrio,
        Direccion: payload.direccion,
      }),
    }),
  )
}
