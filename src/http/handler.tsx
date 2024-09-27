import PATHS from '@/configs/constants/paths'
import { HttpError } from './http-error'

export async function handler<K>(r: Promise<Response>): Promise<K> {
  const response = await r
  if (response.status === 401) window.location.href = PATHS.PUBLIC.LOGIN 
  try {
    const json = await response.json()
    console.log(response)
    if (response.status === 500) throw new Error('internalServerError')
    if (response.ok) return json as K
    throw new HttpError(response.status, json.data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
