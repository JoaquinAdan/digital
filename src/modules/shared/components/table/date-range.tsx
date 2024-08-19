import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { DateRange } from 'react-day-picker'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/lib/utils'
import { CalendarDays, CircleX } from 'lucide-react'

type Props = {
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}

export function DateRangeInput({ date, setDate }: Props) {
  // React.useEffect(() => {
  //   setFilterValue({
  //     type: 'date',
  //     value: date?.from ? `${date.from.toISOString()} / ${date.to?.toISOString()}` : '',
  //     label: '',
  //   })
  // }, [date, setFilterValue])

  return (
    <div className='flex items-center gap-2'>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn('w-full sm:w-[300px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
          >
            <CalendarDays className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y', { locale: es })} - {format(date.to, 'LLL dd, y', { locale: es })}
                </>
              ) : (
                format(date.from, 'LLL dd, y', { locale: es })
              )
            ) : (
              <span>Fecha desde - hasta</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={es}
          />
        </PopoverContent>
      </Popover>
      {(date?.from !== undefined || date?.to !== undefined) && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='h-5 w-5'>
              <CircleX
                onClick={() =>
                  setDate({
                    from: undefined,
                    to: undefined,
                  })
                }
                className='h-4 w-4 mr-2 cursor-pointer transition duration-100 ease-in-out hover:scale-125'
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Borrar filtro</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
