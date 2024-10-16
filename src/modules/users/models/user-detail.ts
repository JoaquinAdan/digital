import { Roles } from '@/modules/auth/models/roles'

export interface UserDetail {
  usuario: {
    id: number
    username: string
    email: string
    roles: Roles[]
  }
}
