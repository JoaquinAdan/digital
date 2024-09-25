import { RouteObject } from 'react-router'
import { exampleRoutes } from './example/routes/example.routes'
import { authRoutes } from './auth/routes/auth.routes'
import { homeRoutes } from './home/routes/home.routes'
import { claimsRoutes } from './claims/routes/claims.routes'
import { usersRoutes } from './users/routes/users.routes'
import { electronicAddressRoutes } from './electronic-address/routes/electronic-address.routes'
import { socialServicesRoutes } from './social-services/routes/social-services.routes'
import { socialServicesVisitorRoutes } from './social-services-public/routes/social-services-visitor.routes'

export const routes: RouteObject[] = [
  authRoutes,
  homeRoutes,
  exampleRoutes,
  claimsRoutes,
  usersRoutes,
  electronicAddressRoutes,
  socialServicesRoutes,
  socialServicesVisitorRoutes,
]
