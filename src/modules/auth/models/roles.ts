import { Permissions } from './permissions'

export interface Roles {
  id: number
  name: string
  permissions: Permissions[]
  descripcion: string
  displayName: string
}
