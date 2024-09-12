import { Pagination } from '@/modules/shared/models/pagination'
import { Claim } from '../models/claim'

export interface ClaimsList {
  data: Claim[]
  pagination: Pagination
}
