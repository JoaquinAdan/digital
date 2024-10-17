import { defaultLocation } from '@/configs/constants/default-location'

export const claimDefaultValue = {
  ciudadano: '',
  observaciones: '',
  tipoIncidente: '',
  origen: '',
  areaServicio: '',
  prioridad: '1',
  barrio: '',
  direccion: '',
  coordinates: {
    latitude: defaultLocation[0],
    longitude: defaultLocation[1],
  },
}
