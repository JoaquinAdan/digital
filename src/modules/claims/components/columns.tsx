import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { Claim } from '../dto/claim.dto'
import Actions from './actions'

export const columns: ColumnDef<Claim>[] = [
  {
    id: 'actions',
    header: 'Acciones',
    enableHiding: false,
    cell: ({ row }) => {
      console.log(row)
      return <Actions id={row.original.id} />
    },
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <Sort column={column} name='ID' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <Sort column={column} name='Título' />,
    cell: ({ row }) => <>{row.getValue('title')}</>,
  },
  {
    accessorKey: 'neighborhood',
    header: ({ column }) => <Sort column={column} name='Barrio' />,
    cell: ({ row }) => <>{row.getValue('neighborhood')}</>,
  },
  {
    accessorKey: 'observation',
    header: ({ column }) => <Sort column={column} name='Observación' />,
    cell: ({ row }) => <>{row.getValue('observation')}</>,
  },
]
