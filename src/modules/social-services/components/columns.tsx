import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { Social } from '../dto/social.dto'

export const columns: ColumnDef<Social>[] = [
  {
    accessorKey: 'id',
    enableHiding: false,
    header: ({ column }) => <Sort column={column} name='Nombre del Formulario' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
  {
    accessorKey: 'area',
    header: ({ column }) => <Sort column={column} name='Área Municipal' />,
    cell: ({ row }) => <>#{row.getValue('area')}</>,
  },
  {
    accessorKey: 'scope',
    header: ({ column }) => <Sort column={column} name='Alcance' />,
    cell: ({ row }) => <>#{row.getValue('scope')}</>,
  },
  {
    accessorKey: 'actions',
    header: ({ column }) => <Sort column={column} name='Acciones' />,
    cell: ({ row }) => <>#{row.getValue('actions')}</>,
  },
]
