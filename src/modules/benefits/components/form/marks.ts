import blueMark from '@/assets/blue-mark.png'
import shadowMark from '@/assets/shadow-mark.png'
import L from 'leaflet'

export const blueIcon = new L.Icon({
  iconUrl: blueMark,
  shadowUrl: shadowMark,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})
