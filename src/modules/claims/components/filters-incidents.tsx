import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useAreaCatalog } from '@/modules/area/hooks/use-area-catalog'
import { useEventCatalog } from '@/modules/events/hooks/use-event-catalog'
import { PRIORITY, priorityText } from '@/modules/shared/types/priority'
import { Check, ChevronDown, CircleX, Clock9, HeartPulse, Siren } from 'lucide-react'
import React from 'react'

type Props = {
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
}

type Options = {
  type: string
  value: string
  label: string
  icon?: React.ReactNode
}

type MenuItems = {
  options: Options[]
  filterValue: { type: string; value: string; label: string }
  setFilterValue: (value: { type: string; value: string; label: string }) => void
}

const defaultFilter = 'Filtrar Por...'

function renderMenuItems({ options, filterValue, setFilterValue }: MenuItems) {
  return options.map((column, i) => (
    <DropdownMenuItem key={i} className='capitalize cursor-pointer' onClick={() => setFilterValue(column)}>
      {column.icon}
      {column.label === defaultFilter ? 'Sin filtro' : column.label}
      {filterValue.value === column.value && <Check className='h-4 w-4 ml-auto' />}
    </DropdownMenuItem>
  ))
}

const urgencyOptions = [
  { type: 'priority', label: defaultFilter, value: '' },
  { type: 'priority', label: priorityText[PRIORITY.LOW], value: PRIORITY.LOW, icon: <Clock9 className='mr-1 h-4 w-4' /> },
  {
    type: 'priority',
    label: priorityText[PRIORITY.MEDIUM],
    value: PRIORITY.MEDIUM,
    icon: <Siren className='mr-1 h-4 w-4' />,
  },
  {
    type: 'priority',
    label: priorityText[PRIORITY.HIGH],
    value: PRIORITY.HIGH,
    icon: <HeartPulse className='mr-1 h-4 w-4' />,
  },
]

const resolvedOptions = [
  { type: 'resolved', label: defaultFilter, value: '' },
  { type: 'resolved', label: 'Resuelto', value: 'true' },
  { type: 'resolved', label: 'Sin resolver', value: 'false' },
]

export default function FilterIncidents({ filterValue, setFilterValue }: Props) {
  const [filterBy, setFilterBy] = React.useState<{ id: number; label: string }>({ id: 0, label: '' })
  const area = useAreaCatalog()
  const event = useEventCatalog()
  const areaOptions = [
    { type: 'areaId', label: defaultFilter, value: '' },
    ...(area?.data?.map((a) => ({ type: 'areaId', label: a.label, value: a.value.toString() })) || []),
  ]

  const eventOptions = [
    { type: 'eventId', label: defaultFilter, value: '' },
    ...(event?.data?.map((e) => ({ type: 'eventId', label: e.label, value: e.value.toString() })) || []),
  ]
  return (
    <div className='flex gap-2  items-center'>
      <div className='flex items-center gap-2 '>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='sm:ml-auto capitalize'>
              {filterBy.label !== '' && filterBy.id !== 0 ? filterBy.label : defaultFilter}{' '}
              <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {[
              { id: 0, label: 'Sin filtro' },
              { id: 1, label: 'prioridad' },
              { id: 2, label: 'estado' },
              { id: 3, label: 'area' },
              { id: 4, label: 'evento' },
            ].map((column) => {
              return (
                <DropdownMenuItem
                  key={column.id}
                  className='capitalize cursor-pointer'
                  onClick={() => {
                    setFilterBy(column)
                    setFilterValue({ type: '', value: '', label: '' })
                  }}
                >
                  {column.label} {filterBy.id === column.id && <Check className='h-4 w-4 ml-auto' />}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        {filterBy.id > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='h-5 w-5'>
                <CircleX
                  onClick={() => {
                    setFilterBy({ id: 0, label: '' })
                    setFilterValue({ type: '', value: '', label: '' })
                  }}
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
      <div className='flex items-center gap-2 '>
        {filterBy.id === 0 && <Input placeholder='Seleccione un filtro' disabled className='max-w-sm' />}
        {(filterBy.id === 1 || filterBy.id === 2 || filterBy.id === 3 || filterBy.id === 4) && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='ml-auto capitalize'>
                {filterBy.id === 1 && urgencyOptions.find((u) => u.value === filterValue.value)?.icon}
                {filterValue.value !== '' ? `${filterValue.label}` : 'Filtrar por...'}{' '}
                <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {filterBy.id === 1 && renderMenuItems({ options: urgencyOptions, filterValue, setFilterValue })}
              {filterBy.id === 2 && renderMenuItems({ options: resolvedOptions, filterValue, setFilterValue })}
              {filterBy.id === 3 && renderMenuItems({ options: areaOptions, filterValue, setFilterValue })}
              {filterBy.id === 4 && renderMenuItems({ options: eventOptions, filterValue, setFilterValue })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {/* {filterBy.id === 4 && (
          <Input
            placeholder={filterBy.label !== '' ? `Filtrar ${filterBy.label}...` : 'Seleccione un filtro'}
            disabled={!filterBy.label}
            value={totalPages < 2 ? (table.getColumn('event')?.getFilterValue() as string) : filterValue.value}
            onChange={(event) =>
              totalPages < 2
                ? table.getColumn('event')?.setFilterValue(event.target.value)
                : setFilterValue({ type: 'event', value: event.target.value, label: '' })
            }
            className='max-w-sm'
          />
        )} */}
        {filterValue.value !== '' && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='h-5 w-5'>
                <CircleX
                  onClick={() => setFilterValue({ type: '', value: '', label: '' })}
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
    </div>
  )
}
