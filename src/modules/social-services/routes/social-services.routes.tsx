import ProtectedRoute from '@/modules/shared/components/routes/protected-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { SocialServicesView } from './imports'

export const socialServicesRoutes: RouteObject = {
  path: '/desarrollo-social',
  element: (
    <ProtectedRoute>
      <DefaultLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '',
      element: <SocialServicesView />,
    },
  ],
}
