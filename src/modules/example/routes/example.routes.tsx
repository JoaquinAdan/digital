import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ExampleView } from './imports'

export const exampleRoutes: RouteObject = {
  path: '/example',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <ExampleView />,
    },
  ],
}
