import { RouteObject } from 'react-router'
import { LoginView } from './imports'

export const authRoutes: RouteObject = {
  path: '/auth',
  children: [
    {
      path: 'login',
      element: <LoginView />,
    },
    {
      path: 'logout',
      element: <></>,
    },
  ],
}
