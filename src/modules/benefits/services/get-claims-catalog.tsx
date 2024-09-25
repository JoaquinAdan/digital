import { handler } from '@/http/handler'
import { apiBase } from '@/configs/constants/api-base'
import CatalogResponse from '../../shared/dto/catalog-response.dto'

export const getClaimsCatalogHttp = (): Promise<CatalogResponse> => {
  return handler(fetch(`${apiBase}/CEMAV/TipoIncidentes/2`))
}
