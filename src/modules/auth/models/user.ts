import { Roles } from './roles'

export interface User {
  id: number
  username: string
  email: string
  roles: Roles[]
}
