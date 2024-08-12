import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { HomeView } from './imports'

export const homeRoutes: RouteObject = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <HomeView />,
    },
  ],
}
