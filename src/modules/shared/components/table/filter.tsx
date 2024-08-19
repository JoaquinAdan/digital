import type { DateRange } from 'react-day-picker'
import FilterEvents from '@/modules/events/use-cases/list-events/components/filters-events'
import FilterIncidents from '@/modules/incidents/use-cases/list-incidents/components/filters-incidents'
import { DateRangeInput } from '@/modules/incidents/components/date-range'
import { Table } from '@tanstack/react-table'

type Props<T> = {
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  table: Table<T>
  type?: string | null
  totalPages: number
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}

export default function Filter<T>({ filterValue, setFilterValue, table, type, totalPages, date, setDate }: Props<T>) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between gap-2 w-full mt-4'>
      {type === 'incidents' && <FilterIncidents filterValue={filterValue} setFilterValue={setFilterValue} />}
      {type === 'events' && (
        <FilterEvents table={table} totalPages={totalPages} setFilterValue={setFilterValue} filterValue={filterValue} />
      )}
      <DateRangeInput date={date} setDate={setDate} />
    </div>
  )
}
