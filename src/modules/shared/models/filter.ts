export interface FilterDto {
  page: number
  limit: number
  filterField?: string
  filterValue?: string
  timeField?: string
  from?: number
  to?: number
  sortField?: string
  sortDirection?: 'ASC' | 'DESC'
}
