import { RouteObject } from 'react-router'

export const authRoutes: RouteObject = {
  path: '/auth',
  element: <></>,
  children: [
    {
      path: 'login',
      element: <></>,
    },
    {
      path: 'logout',
      element: <></>,
    },
  ],
}
