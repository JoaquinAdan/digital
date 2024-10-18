import Sort from '@/modules/shared/components/table/sort'
import { ColumnDef } from '@tanstack/react-table'
import Actions from './actions'
import { Badge } from '@/modules/shared/components/ui/badge'
import { ClaimViewModel } from '../models/claims-view-model'

const estadoMap: { [key: number]: string } = {
  1: 'CREADO',
  2: 'RECHAZADO',
  3: 'EN INSPECCION',
  4: 'ACEPTADO',
  5: 'FINALIZADO',
  6: 'ANULADO',
}
const estadoVariantMap: { [key: number]: 'outline' | 'destructive' | 'default' | 'secondary' } = {
  1: 'outline',
  2: 'destructive',
  3: 'secondary',
  4: 'default',
  5: 'default',
  6: 'destructive',
}

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
      <Badge variant={estadoVariantMap[row.getValue('estado') as number] || 'default'}>
        {estadoMap[row.getValue('estado') as number] || 'Desconocido'}
      </Badge>
    ),
  },

  {
    accessorKey: 'vecino',
    header: ({ column }) => <Sort column={column} name='Vecino' />,
    cell: ({ row }) => <>{row.getValue('vecino') ?? '-'}</>,
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
    header: ({ column }) => <Sort column={column} name='Area de servicio' />,
    cell: ({ row }) => <>{row.getValue('area de servicio')}</>,
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
