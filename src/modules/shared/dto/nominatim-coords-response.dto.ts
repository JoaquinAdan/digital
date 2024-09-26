export interface NominatimCoordsResponse {
  type: string
  licence: string
  features: Feature[]
}

interface Feature {
  type: string
  properties: Properties
  bbox: number[]
  geometry: Geometry
}

interface Geometry {
  type: string
  coordinates: number[]
}

interface Properties {
  place_id: number
  osm_type: string
  osm_id: number
  place_rank: number
  category: string
  type: string
  importance: number
  addresstype: string
  name: string
  display_name: string
  address: Address
}

interface Address {
  shop: string
  road: string
  suburb: string
  city: string
  neighbourhood: string
  county: string
  'ISO3166-2-lvl6': string
  state: string
  'ISO3166-2-lvl4': string
  postcode: string
  country: string
  country_code: string
}
