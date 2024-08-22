import PublicRoute from '@/modules/shared/components/routes/public-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { HomeView } from './imports'

export const homeRoutes: RouteObject = {
  path: '/',
  element: (
    <PublicRoute>
      <DefaultLayout />
    </PublicRoute>
  ),
  children: [
    {
      path: '',
      element: <HomeView />,
    },
  ],
}
