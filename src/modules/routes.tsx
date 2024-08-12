import { RouteObject } from 'react-router'
import { exampleRoutes } from './example/routes/example.routes'
import { authRoutes } from './auth/routes/auth.routes'
import { homeRoutes } from './home/routes/home.routes'

export const routes: RouteObject[] = [authRoutes, homeRoutes, exampleRoutes]
