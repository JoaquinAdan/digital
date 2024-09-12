import { Claim } from '../models/claim'

export type ClaimFormDto = Pick<Claim, 'ciudadanoId' | 'observaciones' | 'tipoIncidente' | 'origen' | 'areaServicio' | 'coordinates'>
