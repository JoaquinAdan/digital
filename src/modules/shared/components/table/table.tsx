'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/modules/shared/components/ui/table'
import { ColumnDef, Table as TableProps, flexRender } from '@tanstack/react-table'
import type { DateRange } from 'react-day-picker'
import Filter from './filter'
import Pagination from './pagination'

type TableSharedProps<T> = {
  columns: ColumnDef<T>[]
  filterType: 'incidents' | 'events'
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
  totalPages: number
  table: TableProps<T>
}

export default function TableShared<T>({
  columns,
  filterType,
  filterValue,
  setFilterValue,
  totalPages,
  table,
  date,
  setDate,
}: TableSharedProps<T>) {
  return (
    <div className='w-full pb-4'>
      <div className='flex items-center pb-4'>
        <Filter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          table={table}
          type={filterType}
          totalPages={totalPages}
          date={date}
          setDate={setDate}
        />
        {/* <Columns />*/}
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader className='bg-gray-100'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='py-2'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns?.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  )
}
