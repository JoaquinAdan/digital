import TableShared from '@/modules/shared/components/table/table'
import { FilterDto } from '@/modules/shared/models/filter'
import { useQueryClient } from '@tanstack/react-query'
import { SortingState, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useEffect } from 'react'
import type { DateRange } from 'react-day-picker'
import toClaimViewModel from '../../adapters/claim-view-model'
import { columns } from '../../components/columns'
import { useClaims } from '../../hooks/use-claims'
import { ClaimViewModel } from '../../models/claims-view-model'
import CreateClaim from '../create-claim'

export default function TableClaims() {
  const [filters, setFilters] = React.useState<FilterDto>({ page: 1, limit: 10 })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: 10 })

  const { data } = useClaims(filters)

  const [date, setDate] = React.useState<DateRange | undefined>()
  const [filterValue, setFilterValue] = React.useState<{ type: string; value: string; label: string }>({
    type: '',
    value: '',
    label: '',
  })

  const queryClient = useQueryClient()
  const table = useReactTable({
    data: toClaimViewModel(data?.data),
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    rowCount: data?.pagination.count,
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
    if (sorting.length === 0) return
    setFilters((prev) => ({
      ...prev,
      sortField: sorting[0]?.id,
      sortDirection: sorting[0]?.desc && sorting ? 'DESC' : 'ASC',
    }))
  }, [sorting])

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['hola'] })
  }, [filters, queryClient])

  return (
    <TableShared<ClaimViewModel>
      totalPages={data ? data?.pagination.totalPages : 1}
      setFilterValue={setFilterValue}
      createButton={<CreateClaim />}
      filterValue={filterValue}
      filterType='claims'
      haveActions={true}
      columns={columns}
      setDate={setDate}
      filterBy='title'
      table={table}
      date={date}
    />
  )
}
