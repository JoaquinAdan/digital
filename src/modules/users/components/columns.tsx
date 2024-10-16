import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { UserViewModel } from '../models/user-view-model'
import Actions from './actions'

export const columns: ColumnDef<UserViewModel>[] = [
  {
    id: 'actions',
    header: 'Acciones',
    enableHiding: false,
    cell: ({ row }) => {
      return <Actions id={row.original.id} />
    },
  },
  {
    accessorKey: 'id',
    enableHiding: false,
    header: ({ column }) => <Sort column={column} name='ID' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
  {
    accessorKey: 'nombre',
    header: ({ column }) => <Sort column={column} name='Nombre' />,
    cell: ({ row }) => <>{row.getValue('nombre')}</>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <Sort column={column} name='Email' />,
    cell: ({ row }) => <>{row.getValue('email')}</>,
  },
]
