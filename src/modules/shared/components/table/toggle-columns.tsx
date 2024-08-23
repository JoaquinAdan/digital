import { useEffect } from 'react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Table } from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'

export default function ToggleColumns<T>({ table, filterType }: { table: Table<T>; filterType: string }) {
  const columns = table.getAllColumns().filter((column) => column.getCanHide())

  const saveColumnsVisiblePerTable = (value: boolean, index: number) => {
    const columnsVisible = columns.map((column) => column.getIsVisible())
    columnsVisible[index] = value
    const columnsVisiblePerTable = { table: filterType, columnsVisible }
    localStorage.setItem(`${filterType}-table`, JSON.stringify(columnsVisiblePerTable))
  }

  const getColumnsVisiblePerTable = () => {
    const columnsVisiblePerTable = localStorage.getItem(`${filterType}-table`)
    const columnsVisible = JSON.parse(columnsVisiblePerTable as string)
    if (columnsVisiblePerTable) return columnsVisible
    return null
  }

  useEffect(() => {
    const columnsVisiblePerTable = getColumnsVisiblePerTable()
    if (columnsVisiblePerTable) {
      columnsVisiblePerTable.columnsVisible.forEach((visible: boolean, i: number) => {
        columns[i].toggleVisibility(visible)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='ml-auto text-gray-700 capitalize'>
          Columnas activas <ChevronDown className='ml-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        {columns.map((column, index) => {
          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              className='capitalize text-gray-700'
              checked={getColumnsVisiblePerTable()?.columnsVisible?.[index] ?? column.getIsVisible()}
              onCheckedChange={(value: boolean) => {
                column.toggleVisibility(!!value)
                saveColumnsVisiblePerTable(value, index)
              }}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
