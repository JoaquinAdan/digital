import PublicRoute from '@/modules/shared/components/routes/public-route'
import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ExampleView } from './imports'

export const exampleRoutes: RouteObject = {
  path: '/example',
  element: (
    <PublicRoute>
      <DefaultLayout />
    </PublicRoute>
  ),
  children: [
    {
      path: '',
      element: <ExampleView />,
    },
  ],
}
