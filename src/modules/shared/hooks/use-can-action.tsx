import useAuth from '@/modules/auth/hooks/use-auth'

const useCanAction = () => {
  const { user } = useAuth()
  const can = (action: string, scope: string, resource: string) =>
    user?.roles.some((role) =>
      role.permissions.some(
        (permission) =>
          (permission.action === action || permission.action === '*') &&
          (permission.scope === scope || permission.scope === '*') &&
          (permission.resource === resource || permission.resource === '*')
      )
    )

  return can
}

export default useCanAction
