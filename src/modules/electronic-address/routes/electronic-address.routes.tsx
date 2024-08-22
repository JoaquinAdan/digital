import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ElectronicAddressView } from './imports'
import PublicRoute from '@/modules/shared/components/routes/public-route'

export const electronicAddressRoutes: RouteObject = {
  path: '/domicilio-electronico',
  element: (
    <PublicRoute>
      <DefaultLayout />
    </PublicRoute>
  ),
  children: [
    {
      path: '',
      element: <ElectronicAddressView />,
    },
  ],
}
