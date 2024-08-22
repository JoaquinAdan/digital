import PATHS from '@/configs/constants/paths'
import useAuth from '@/modules/auth/hooks/use-auth'
import { Navigate } from 'react-router'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to={PATHS.HOME} />
  }

  return children
}
