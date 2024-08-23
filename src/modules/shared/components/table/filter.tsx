import { Table } from '@tanstack/react-table'
import type { DateRange } from 'react-day-picker'
import { DateRangeInput } from './date-range'
import ToggleColumns from './toggle-columns'
import Searcher from './searcher'

type Props<T> = {
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  table: Table<T>
  filterType: string
  totalPages: number
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
  filterBy: string
}

export default function Filter<T>({
  filterValue,
  setFilterValue,
  filterType,
  table,
  totalPages,
  date,
  setDate,
  filterBy,
}: Props<T>) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between gap-2 w-full mt-4'>
      <div className='flex gap-2'>
        <DateRangeInput date={date} setDate={setDate} />
        <ToggleColumns table={table} filterType={filterType} />
      </div>
      <Searcher
        table={table}
        filterBy={filterBy}
        totalPages={totalPages}
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />
    </div>
  )
}
