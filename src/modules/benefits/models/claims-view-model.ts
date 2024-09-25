export interface ClaimViewModel {
  uuid: string
  'area de servicio': string
  'tipo de incidente': string
  prioridad: string
  origen: string
  'otros datos': string
  vecino: string
  adminId: number
  estado: number
  observaciones: string
  'fecha de creación': string
  numero: number
  coordinates: {
    latitude: number
    longitude: number
  }
}
