import { Roles } from '../models/roles'
import { User } from '../models/user'

export interface UserFormDto extends Omit<User, 'id' | 'roles'> {
  roles: Roles[]
  password: string
}
