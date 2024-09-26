import ProtectedRoute from '@/modules/shared/components/routes/protected-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ClaimsView } from './imports'
import ClaimDetail from '../views/claim-detail'
import PATHS from '@/configs/constants/paths'

export const claimsRoutes: RouteObject = {
  path: PATHS.ADMIN.CLAIMS,
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
    {
      path: `${PATHS.ADMIN.CLAIMS + PATHS.GENERICS.DETAIL}/:id`,
      element: <ClaimDetail />,
    },
  ],
}
