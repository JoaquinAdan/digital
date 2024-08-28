import type { DateRange } from 'react-day-picker'
import { DateRangeInput } from './date-range'
import { Table } from '@tanstack/react-table'
import ToggleColumns from './toggle-columns'
import Searcher from './searcher'
import React from 'react'

type Props<T> = {
  setFilterValue: (value: { type: string; value: string; label: string }) => void
  filterValue: { type: string; value: string; label: string }
  setDate: (date: DateRange | undefined) => void
  createButton?: React.ReactElement
  date: DateRange | undefined
  filterType: string
  totalPages: number
  filterBy: string
  table: Table<T>
}

export default function Filter<T>({
  setFilterValue,
  setDate,
  createButton,
  filterValue,
  filterType,
  totalPages,
  filterBy,
  table,
  date,
}: Props<T>) {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-2 w-full mt-4'>
      <div className='flex gap-2 w-full justify-between  lg:justify-start'>
        <DateRangeInput date={date} setDate={setDate} />
        <ToggleColumns table={table} filterType={filterType} />
      </div>
      <div className='flex gap-2 w-full justify-between lg:justify-end'>
        <Searcher
          setFilterValue={setFilterValue}
          filterValue={filterValue}
          totalPages={totalPages}
          filterBy={filterBy}
          table={table}
        />
        {createButton && React.cloneElement(createButton)}
      </div>
    </div>
  )
}
