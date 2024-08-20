import { Table } from '@tanstack/react-table'
import type { DateRange } from 'react-day-picker'
import { DateRangeInput } from './date-range'

type Props<T> = {
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  table: Table<T>
  type?: string | null
  totalPages: number
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}

export default function Filter<T>({ date, setDate }: Props<T>) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between gap-2 w-full mt-4'>
      <DateRangeInput date={date} setDate={setDate} />
    </div>
  )
}
