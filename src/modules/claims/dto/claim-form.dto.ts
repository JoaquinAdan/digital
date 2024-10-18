import { Claim } from '../models/claim'

// export type ClaimFormDto = Pick<Claim, 'ciudadanoId' | 'observaciones' | 'tipoIncidente' | 'origen' | 'areaServicio' | 'coordinates'>

export interface ClaimFormDto extends Pick<Claim, 'observaciones' | 'coordinates'> {
  tipoIncidente: string
  ciudadano: string
  areaServicio: string
  origen: string
  prioridad: string
  barrio: string
  direccion: string
}
