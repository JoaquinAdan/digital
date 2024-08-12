import { HttpError } from './http-error'

export async function handler<K>(r: Promise<Response>): Promise<K> {
  try {
    const response = await r
    const json = await response.json()
    if (response?.statusText === 'Unauthorized') throw new Error('unauthorized')
    if (response.status === 500) throw new Error('internalServerError')
    if (response.ok) return json as K
    throw new HttpError(response.status, json.data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
