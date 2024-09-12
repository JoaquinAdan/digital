import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import Actions from './actions'
import { Badge } from '@/modules/shared/components/ui/badge'
import { ClaimViewModel } from '../models/claims-view-model'

export const columns: ColumnDef<ClaimViewModel>[] = [
  {
    id: 'actions',
    header: 'Acciones',
    enableHiding: false,
    cell: ({ row }) => {
      return <Actions id={row.original.uuid} />
    },
  },
  {
    accessorKey: 'numero',
    header: ({ column }) => <Sort column={column} name='N°' />,
    cell: ({ row }) => <>{String(row.getValue('numero'))}</>,
  },
  {
    accessorKey: 'estado',
    header: ({ column }) => <Sort column={column} name='Estado' />,
    cell: ({ row }) => (
      <Badge variant={row.getValue('estado') === 1 ? 'outline' : row.getValue('estado') === 2 ? 'default' : 'destructive'}>
        {row.getValue('estado') === 1 ? 'Pendiente' : row.getValue('estado') === 2 ? 'Autorizado' : 'Rechazado'}
      </Badge>
    ),
  },
  {
    accessorKey: 'vecino',
    header: ({ column }) => <Sort column={column} name='Vecino' />,
    cell: ({ row }) => <>{row.getValue('vecino')}</>,
  },
  {
    accessorKey: 'fecha de creación',
    header: ({ column }) => <Sort column={column} name='Fecha de creación' />,
    cell: ({ row }) => <>{new Date(row.getValue('fecha de creación')).toLocaleDateString()}</>,
  },
  {
    accessorKey: 'prioridad',
    header: ({ column }) => <Sort column={column} name='Prioridad' />,
    cell: ({ row }) => <>{row.getValue('prioridad')}</>,
  },
  {
    accessorKey: 'area de servicio',
    header: ({ column }) => <Sort column={column} name='areaServicio' />,
    cell: ({ row }) => <>{row.getValue('areaServicio')}</>,
  },
  {
    accessorKey: 'origen',
    header: ({ column }) => <Sort column={column} name='Origen' />,
    cell: ({ row }) => <>{row.getValue('origen')}</>,
  },
  {
    accessorKey: 'tipo de incidente',
    header: ({ column }) => <Sort column={column} name='Tipo de incidente' />,
    cell: ({ row }) => <>{row.getValue('tipo de incidente')}</>,
  },

  {
    accessorKey: 'observaciones',
    header: ({ column }) => <Sort column={column} name='Observación' />,
    cell: ({ row }) => <>{row.getValue('observaciones')}</>,
  },
]
