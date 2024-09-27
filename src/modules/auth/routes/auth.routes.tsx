import { RouteObject } from 'react-router'
import { LoginView } from './imports'
import PATHS from '@/configs/constants/paths'

export const authRoutes: RouteObject = {
  path: PATHS.PUBLIC.AUTH,
  children: [
    {
      path: PATHS.PUBLIC.AUTH + PATHS.PUBLIC.LOGIN,
      element: <LoginView />,
    },
    {
      path: PATHS.PUBLIC.AUTH + PATHS.PUBLIC.LOGOUT,
      element: <></>,
    },
  ],
}
