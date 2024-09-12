import { blueIcon } from '@/modules/claims/components/form/marks'
import { LatLngTuple, Marker as MarkerLeaflet } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type MapSelectorProps = {
  value: LatLngTuple
}

const MapOnlyView = ({ value }: MapSelectorProps) => {
  const markerRef = useRef<MarkerLeaflet | null>(null)
  return (
    <div style={{ height: '400px', width: '100%' }} className='my-2'>
      <MapContainer
        center={value}
        zoom={15}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker icon={blueIcon} position={value} ref={markerRef} />
      </MapContainer>
    </div>
  )
}

export default MapOnlyView
