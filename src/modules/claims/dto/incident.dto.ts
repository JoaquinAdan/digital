export const PRIORITY = {
  HIGH: 'HIGH' as const,
  MEDIUM: 'MEDIUM' as const,
  LOW: 'LOW' as const,
}

export interface Area {
  id: number
  name: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Event {
  id: number
  color: string
  name: string
}
export interface Incident {
  id: number
  priority: keyof typeof PRIORITY
  isResolving: boolean
  imagePreview: string | null
  description: string | null
  coordinates: Coordinates
  area: Area
  event: Event
  wasResolved: boolean
}
