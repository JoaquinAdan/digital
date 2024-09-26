import PATHS from '@/configs/constants/paths'
import useAuth from '@/modules/auth/hooks/use-auth'
import { Navigate, useLocation } from 'react-router'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const { pathname } = useLocation()
  console.log(user)
  console.log(pathname.split('/'))

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, scope, resource] = pathname.split('/')

  if (!user) {
    return <Navigate to={PATHS.PUBLICS.HOME} />
  }

  return children
}
