import Catalog from '../../shared/models/catalog'

export interface Claim {
  uuid: string
  areaServicio: Catalog
  tipoIncidente: Catalog
  prioridad: Catalog
  origen: Catalog
  otrosDatos: string
  ciudadanoId: string
  ciudadano: string
  latitud: number | null
  longitud: number | null
  adminId: number
  estadoId: number
  observaciones: string
  fechaAlta: string
  numero: number
  coordinates: {
    latitude: number
    longitude: number
  }
}
