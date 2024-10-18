import { defaultLocation } from '@/configs/constants/default-location'

export const claimDefaultValue = {
  ciudadano: '507be90a-e7ed-485c-ad1e-04052ec27c74',
  observaciones: '',
  tipoIncidente: '',
  origen: '',
  areaServicio: '',
  prioridad: '',
  barrio: '',
  direccion: '',
  coordinates: {
    latitude: defaultLocation[0],
    longitude: defaultLocation[1],
  },
}
