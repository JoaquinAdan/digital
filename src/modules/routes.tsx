import { RouteObject } from 'react-router'
import { exampleRoutes } from './example/routes/example.routes'
import { authRoutes } from './auth/routes/auth.routes'
import { homeRoutes } from './home/routes/home.routes'
import { claimsRoutes } from './claims/routes/claims.routes'

export const routes: RouteObject[] = [authRoutes, homeRoutes, exampleRoutes, claimsRoutes]
