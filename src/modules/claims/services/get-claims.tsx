import { handler } from '@/http/handler'
import { FilterDto } from '@/modules/shared/models/filter'
import { apiBase } from '@/configs/constants/api-base'

export const getClaimsHttp = (token: string, filters: FilterDto) => {
  const filterField = '&f_field=name'
  const filterValue = filters.filterValue ? `&f_value={${filters.filterValue}}` : ''
  const timeField = filters.timeField ? `&t_field=${filters.timeField}` : ''
  const from = filters.from ? `&from=${filters.from}` : ''
  const to = filters.to ? `&to=${filters.to}` : ''
  const sortField = filters.sortField ? `&s_field=${filters.sortField}` : ''
  const sortDirection = filters.sortDirection ? `&s_dir=${filters.sortDirection}` : ''
  // CEMAV/Incidentes?pageNumber=1&rowsPerPage=10&sortColumn=FechaAlta&sortDirection=DESC
  return handler(
    fetch(
      `${apiBase}/CEMAV/Incidentes?page=${filters.page}&limit=${filters.limit}${filterField}${filterValue}${timeField}${from}${to}${sortField}${sortDirection}`,
      // `${apiBase}/event?page=${filters.page}&limit=${filters.limit}${filterField}${filterValue}${timeField}${from}${to}${sortField}${sortDirection}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  )
}
