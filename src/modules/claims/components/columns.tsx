import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import { Claim } from '../dto/claim.dto'

export const columns: ColumnDef<Claim>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <Sort column={column} name='ID' />,
    cell: ({ row }) => <>#{row.getValue('id')}</>,
  },
]
