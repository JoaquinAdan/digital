import useAuth from '@/modules/auth/hooks/use-auth'
import toast from 'react-hot-toast'
import { Navigate, useLocation } from 'react-router'
import { useEffect, useRef } from 'react'
import PATHS from '@/configs/constants/paths'

/*
 * Un componente que protege las rutas en función de los permisos del usuario.
 * Comprueba si el usuario tiene los permisos necesarios para acceder a la ruta.
 * Si el usuario no tiene los permisos necesarios, lo redirecciona a una página adecuada.
 *
 * @example
 * ```tsx
 * <ProtectedRoute>
 *   <YourComponent />
 * </ProtectedRoute>
 * ```
 */

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const { pathname } = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, scope, resource] = pathname.split('/')

  const toastDisplayed = useRef(false)
  const canAccess = user?.roles.some((role) =>
    role.permissions.some((permission) => {
      const scopePermission = permission.scope === '*' || permission.scope === scope
      const resourcePermission = permission.resource === '*' || permission.resource === resource
      return resource ? resourcePermission && scopePermission : scopePermission
    })
  )

  useEffect(() => {
    if (!canAccess && !toastDisplayed.current) {
      toast.error('No tienes permisos para acceder a esta página')
      toastDisplayed.current = true
    }
  }, [canAccess])

  if (!user || (!resource && !canAccess)) return <Navigate to={PATHS.PUBLIC.HOME} />

  if (!canAccess) return <Navigate to={`/${scope}`} />

  return children
}
