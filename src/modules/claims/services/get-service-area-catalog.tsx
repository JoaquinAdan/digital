import { handler } from '@/http/handler'
import { apiBase } from '@/configs/constants/api-base'
import CatalogResponse from '../../shared/dto/catalog-response.dto'

export const getServiceAreaCatalogHttp = (token: string): Promise<CatalogResponse> => {
  return handler(
    fetch(`${apiBase}/CEMAV/AreaServicios`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  )
}
