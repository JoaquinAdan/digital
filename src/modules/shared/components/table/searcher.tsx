import { Input } from '@/modules/shared/components/ui/input'
import { Table } from '@tanstack/react-table'

type Props<T> = {
  table: Table<T>
  totalPages: number
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  filterBy: string
}

export default function Searcher<T>({ table, totalPages, setFilterValue: setFilter, filterValue, filterBy }: Props<T>) {
  return (
    <Input
      key={totalPages}
      placeholder={`Filtrar por ${filterBy}`}
      value={totalPages < 2 ? (table.getColumn(filterBy)?.getFilterValue() as string) : filterValue.value}
      onChange={event => {
        event.preventDefault()
        return totalPages < 2
          ? table.getColumn(filterBy)?.setFilterValue(event.target.value)
          : setFilter({ type: filterBy, value: event.target.value, label: '' })
      }}
      className='max-w-sm w-full sm:w-[300px]'
    />
  )
}
