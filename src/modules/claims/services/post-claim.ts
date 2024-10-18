import { apiBase } from '@/configs/constants/api-base'
import { ClaimFormDto } from '../dto/claim-form.dto'
import { handler } from '@/http/handler'

export const postClaimHttp = (payload: ClaimFormDto, token: string): Promise<unknown> => {
  return handler(
    fetch(`${apiBase}/CEMAV/Incidentes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AreaServicioId: Number(payload.areaServicio),
        TipoIncidenteId: Number(payload.tipoIncidente),
        PrioridadId: Number(payload.prioridad),
        OrigenId: Number(payload.origen),
        OtrosDatos: undefined,
        CiudadanoId: payload.ciudadano,
        Observaciones: payload.observaciones,
        Latitud: payload.coordinates.latitude,
        Longitud: payload.coordinates.longitude,
        BarrioId: Number(payload.barrio),
        Direccion: payload.direccion,
      }),
    }),
  )
}
