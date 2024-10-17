import { apiBase } from '@/configs/constants/api-base'
import { handler } from '@/http/handler'
import Catalog from '../models/catalog'

export const getNeighborhoodCatalogHttp = (): Promise<Catalog[]> => {
  return handler(fetch(`${apiBase}/commons/barrios`))
}
