import { handler } from '@/http/handler'
import { apiBase } from '@/configs/constants/api-base'
import ClaimsCatalogResponse from '../dto/claims-catalog-response.dto'

export const getOriginCatalogHttp = (): Promise<ClaimsCatalogResponse> => {
  return handler(fetch(`${apiBase}/CEMAV/Origenes`))
}
