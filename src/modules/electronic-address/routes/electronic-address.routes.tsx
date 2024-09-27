import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ElectronicAddressView } from './imports'
import PublicRoute from '@/modules/shared/components/routes/public-route'
import PATHS from '@/configs/constants/paths'

export const electronicAddressRoutes: RouteObject = {
  path: PATHS.PUBLIC.ELECTRONIC_ADDRESS,
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
