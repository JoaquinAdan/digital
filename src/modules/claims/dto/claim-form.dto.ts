import { Claim } from '../models/claim'

// export type ClaimFormDto = Pick<Claim, 'ciudadanoId' | 'observaciones' | 'tipoIncidente' | 'origen' | 'areaServicio' | 'coordinates'>

export interface ClaimFormDto extends Pick<Claim, 'ciudadanoId' | 'observaciones' | 'coordinates'> {
  tipoIncidente: string
  areaServicio: string
  origen: string
  prioridad: string
  barrio: string
  direccion: string
}
