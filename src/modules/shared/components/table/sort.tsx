
import { Column } from '@tanstack/react-table'
import { ArrowDownUp, ArrowDown, ArrowUp, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'


type Props<T> = {
  column: Column<T>
  name: string
}

export default function Sort<T>({ column, name }: Props<T>) {
  const isSorted = column.getIsSorted()
  return (
    <div className='flex items-center'>
      <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        {name}
        {!isSorted && <ArrowDownUp className='ml-2 h-4 w-4' />}
        {isSorted === 'asc' && <ArrowDown className='ml-2 h-4 w-4' />}
        {isSorted === 'desc' && <ArrowUp className='ml-2 h-4 w-4' />}
      </Button>
      {isSorted && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='ghost' size='icon' type='button' onClick={() => column.clearSorting()}>
              <X width={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Borrar filtro</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
