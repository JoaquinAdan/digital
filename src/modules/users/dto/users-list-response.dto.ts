import { Pagination } from '@/modules/shared/models/pagination'
import { User } from '../models/user'

export interface UsersList {
  data: User[]
  pagination: Pagination
}
