import { RouteObject } from 'react-router'
import { LoginView } from './imports'
import PATHS from '@/configs/constants/paths'

export const authRoutes: RouteObject = {
  path: PATHS.PUBLICS.AUTH,
  children: [
    {
      path: PATHS.PUBLICS.AUTH + PATHS.PUBLICS.LOGIN,
      element: <LoginView />,
    },
    {
      path: PATHS.PUBLICS.AUTH + PATHS.PUBLICS.LOGOUT,
      element: <></>,
    },
  ],
}
