export interface Claim {
  id?: number
  title: string
  observation: string
  neighborhood: string
  coordinates: {
    latitude: number
    longitude: number
  }
}
