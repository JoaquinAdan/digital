import ProtectedRoute from '@/modules/shared/components/routes/protected-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { SocialServicesView } from './imports'

export const socialServicesVisitorRoutes: RouteObject = {
  path: '/social-services',
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
