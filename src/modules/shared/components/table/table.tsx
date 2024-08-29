'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/modules/shared/components/ui/table'
import { ColumnDef, Table as TableProps, flexRender } from '@tanstack/react-table'
import type { DateRange } from 'react-day-picker'
import Filter from './filter'
import Pagination from './pagination'

type TableSharedProps<T> = {
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  filterValue: { type: string; value: string; label: string }
  setDate: (date: DateRange | undefined) => void
  createButton?: React.ReactElement
  date: DateRange | undefined
  columns: ColumnDef<T>[]
  table: TableProps<T>
  haveActions: boolean
  filterType: string
  totalPages: number
  filterBy: string
}

export default function TableShared<T>({
  setFilterValue,
  setDate,
  createButton,
  haveActions,
  filterValue,
  totalPages,
  filterType,
  filterBy,
  columns,
  table,
  date,
}: TableSharedProps<T>) {
  return (
    <div className='w-full pb-4'>
      <div className='flex items-center pb-4'>
        <Filter
          setFilterValue={setFilterValue}
          setDate={setDate}
          createButton={createButton}
          filterValue={filterValue}
          filterType={filterType}
          totalPages={totalPages}
          filterBy={filterBy}
          table={table}
          date={date}
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader className='bg-gray-50 cursor-auto'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`border-l-[1px] border-gray-100 ${haveActions && 0 === i ? 'w-40' : 'w-auto'}`}
                    >
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
                    <TableCell key={cell.id} className='py-2 border-l-[1px] border-gray-100'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns?.length} className='text-center'>
                  Sin resultados.
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
