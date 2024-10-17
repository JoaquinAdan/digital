import { apiBase } from '@/configs/constants/api-base'
import { handler } from '@/http/handler'

export const deleteClaimHttp = (token: string, id?: string): Promise<unknown> => {
  return handler(
    fetch(`${apiBase}/CEMAV/Incidentes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }),
  )
}
