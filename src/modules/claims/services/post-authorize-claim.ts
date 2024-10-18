import { apiBase } from '@/configs/constants/api-base'
import { handler } from '@/http/handler'
import { AuthorizeForm } from '../models/authorize-form'

export const postAuthorizeClaimHttp = (payload: AuthorizeForm, token: string, id?: string,): Promise<unknown> => {
  return handler(
    fetch(`${apiBase}/CEMAV/Incidentes/authorize/${id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Autorizado: payload.autorizado,
        Observaciones: payload.observaciones,
      }),
    }),
  )
}
