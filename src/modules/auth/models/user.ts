import { Roles } from './roles'

export interface User {
  id: number
  name: string
  email: string
  roles: Roles[]
}
