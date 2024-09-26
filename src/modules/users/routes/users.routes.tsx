import ProtectedRoute from '@/modules/shared/components/routes/protected-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { UsersView } from './imports'
import PATHS from '@/configs/constants/paths'

export const usersRoutes: RouteObject = {
  path: PATHS.DIGITAL.USERS,
  element: (
    <ProtectedRoute>
      <DefaultLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '',
      element: <UsersView />,
    },
  ],
}
