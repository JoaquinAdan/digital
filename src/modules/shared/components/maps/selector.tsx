import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { LatLngTuple, Marker as MarkerLeaflet } from 'leaflet'
import { useMemo, useRef, useState } from 'react'
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form'
import { blueIcon } from '../../../claims/components/form/marks'
import 'leaflet/dist/leaflet.css'

type Props<T extends FieldValues> = {
  setPosition: (position: { lat: number; lng: number }) => void
  setValue: UseFormSetValue<T>
}

const LocationOnClick = <T extends FieldValues>({ setPosition, setValue }: Props<T>) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng)
      setValue('coordinates.latitude' as Path<T>, e.latlng.lat as PathValue<T, Path<T>>)
      setValue('coordinates.longitude' as Path<T>, e.latlng.lng as PathValue<T, Path<T>>)
    },
  })
  return null
}
function ChangeView({ center, zoom }: { center: LatLngTuple; zoom?: number }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

type MapSelectorProps<T extends FieldValues> = {
  value: LatLngTuple
  setValue: UseFormSetValue<T>
}

const MapSelector = <T extends FieldValues>({ value, setValue }: MapSelectorProps<T>) => {
  const [position, setPosition] = useState({
    lat: value[0],
    lng: value[1],
  })
  const markerRef = useRef<MarkerLeaflet | null>(null)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setValue('coordinates.latitude' as Path<T>, marker.getLatLng().lat as PathValue<T, Path<T>>)
          setValue('coordinates.longitude' as Path<T>, marker.getLatLng().lng as PathValue<T, Path<T>>)
          setPosition(marker.getLatLng())
        }
      },
    }),
    [setValue, setPosition, markerRef]
  )

  return (
    <div style={{ height: '400px', width: '100%', margin: 0 }}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ChangeView center={[position.lat, position.lng]} />
        <Marker
          icon={blueIcon}
          eventHandlers={eventHandlers}
          draggable={Boolean(setValue)}
          position={position}
          ref={markerRef}
        />
        {setValue && <LocationOnClick setPosition={setPosition} setValue={setValue} />}
      </MapContainer>
    </div>
  )
}

export default MapSelector
