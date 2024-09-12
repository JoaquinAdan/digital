export interface Claim {
  id?: number
  title: string
  observation: string
  neighborhood: string
  claimType: string
  serviceArea: string
  origin: string
  coordinates: {
    latitude: number
    longitude: number
  }
}
