import ProtectedRoute from '@/modules/shared/components/routes/protected-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ClaimsView } from './imports'

export const claimsRoutes: RouteObject = {
  path: '/admin/reclamos',
  element: (
    <ProtectedRoute>
      <DefaultLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '',
      element: <ClaimsView />,
    },
  ],
}
