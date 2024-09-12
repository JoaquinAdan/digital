import { defaultLocation } from '@/configs/constants/default-location'

export const claimDefaultValue = {
  ciudadanoId: '',
  observaciones: '',
  tipoIncidente: '',
  origen: '',
  areaServicio: '',
  coordinates: {
    latitude: defaultLocation[0],
    longitude: defaultLocation[1],
  },
}
