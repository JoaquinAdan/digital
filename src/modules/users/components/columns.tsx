import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { User } from '../dto/user.dto'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    enableHiding: false,
    header: ({ column }) => <Sort column={column} name='ID' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
  {
    accessorKey: 'nombre',
    header: ({ column }) => <Sort column={column} name='Nombre' />,
    cell: ({ row }) => <>#{row.getValue('name')}</>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <Sort column={column} name='Email' />,
    cell: ({ row }) => <>#{row.getValue('email')}</>,
  },
]
