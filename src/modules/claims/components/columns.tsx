import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { Incident } from '../dto/incident.dto'

export const columns: ColumnDef<Incident>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <Sort column={column} name='ID' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
  {
    accessorKey: 'wasResolved',
    header: ({ column }) => <Sort column={column} name='Estado' />,
    cell: ({ row }) => {
      return (
        <div
          className={`${
            row.getValue('wasResolved') ? 'bg-gray-300' : 'bg-gray-600'
          } px-2 py-1 text-white rounded-sm text-center`}
        >
          {row.getValue('wasResolved') ? 'Resuelto' : 'Sin resolver'}
        </div>
        // <Button size='sm' disabled={state}>{state ? 'Resuelto' : 'Sin resolver'}</Button>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <Sort column={column} name='Fecha de creación' />,
    cell: ({ row }) => new Date(row.getValue('createdAt')).toLocaleString(),
  },
  {
    accessorKey: 'event',
    header: ({ column }) => <Sort column={column} name='Evento' />,
    cell: ({ row }) => (
      <div className='flex gap-2 items-center'>
        <div className='capitalize h-6 w-6 rounded-sm shadow-md' style={{ background: row.original.event.color }} />
        {row.original.event.name}
      </div>
    ),
  },
]
