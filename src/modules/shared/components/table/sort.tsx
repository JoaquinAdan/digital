import { Column } from '@tanstack/react-table'
import { ArrowDownUp, ArrowUp, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

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
        {(isSorted === 'asc' || isSorted === 'desc') && (
          <ArrowUp className={`ml-2 h-4 w-4 transition-all ${isSorted === 'asc' ? 'rotate-0' : 'rotate-180'}`} />
        )}
      </Button>
      {isSorted ? (
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
      ) : (
        <div className='w-10' />
      )}
    </div>
  )
}
