import { useQueryClient } from '@tanstack/react-query'
import { SortingState, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useEffect } from 'react'
import type { DateRange } from 'react-day-picker'
import { User } from '../../dto/user.dto'
import { columns } from '../../components/columns'
import { FilterDto } from '@/modules/shared/models/filter'
import TableShared from '@/modules/shared/components/table/table'

export default function TableUsers() {
  const [filters, setFilters] = React.useState<FilterDto>({ page: 1, limit: 10 } as FilterDto)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [date, setDate] = React.useState<DateRange | undefined>()
  const [filterValue, setFilterValue] = React.useState<{ type: string; value: string; label: string }>({
    type: '',
    value: '',
    label: '',
  })

  const queryClient = useQueryClient()
  const data = {
    data: [],
    count: 5,
    totalPages: 1,
  }

  const table = useReactTable({
    data: (data as { data: User[] })?.data || [],
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    rowCount: (data as { count: number })?.count,
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    state: { sorting, pagination },
  })

  useEffect(() => {
    setFilters((prev) => ({ ...prev, limit: table.getState().pagination.pageSize }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().pagination.pageSize])

  useEffect(() => {
    setFilters((prev) => ({ ...prev, page: table.getState().pagination.pageIndex + 1 }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().pagination.pageIndex])

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      filterField: filterValue?.type,
      filterValue: filterValue?.value?.toString(),
    }))
  }, [filterValue])

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      timeField: (date?.from || date?.to) && 'createdAt',
      from: date?.from?.getTime(),
      to: date?.to?.getTime(),
    }))
  }, [date])

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      sortField:
        sorting[0]?.id === 'area'
          ? 'areaId'
          : sorting[0]?.id === 'event'
          ? 'eventId'
          : sorting[0]?.id === 'wasResolved'
          ? 'resolved'
          : sorting[0]?.id,
      sortDirection: sorting[0]?.desc && sorting ? 'DESC' : 'ASC',
    }))
  }, [sorting])

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['hola'] })
  }, [filters, queryClient])

  return (
    <TableShared<User>
      filterBy='nombre'
      columns={columns}
      filterType='users'
      totalPages={data ? data.totalPages : 1}
      setFilterValue={setFilterValue}
      filterValue={filterValue}
      table={table}
      date={date}
      setDate={setDate}
    />
  )
}
