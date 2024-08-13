import DefaultLayout from '@/modules/shared/components/layout/default-layout'
import { RouteObject } from 'react-router'
import { ClaimsView } from './imports'

export const claimsRoutes: RouteObject = {
  path: '/reclamos',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <ClaimsView />,
    },
  ],
}
