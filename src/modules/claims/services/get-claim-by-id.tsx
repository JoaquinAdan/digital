import { handler } from '@/http/handler'
import { apiBase } from '@/configs/constants/api-base'
import { ClaimDetail } from '../dto/claim-detail-response.dto'

export const getClaimByIdHttp = (token: string, id: string): Promise<ClaimDetail> => {
  return handler(
    fetch(`${apiBase}/CEMAV/Incidentes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  )
}
