import PATHS from '@/configs/constants/paths'
import { Navigate } from 'react-router'
import { user } from '@/mocks/user'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!user()) {
    return <Navigate to={PATHS.HOME} />
  }

  return children
}
