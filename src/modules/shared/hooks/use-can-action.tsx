import useAuth from '@/modules/auth/hooks/use-auth'

/*
 * Custom hook para determinar si el usuario actual tiene permiso para realizar una acción específica.
 *
 * @returns {Function} Una función que verifica si el usuario tiene el permiso requerido.
 *
 * La función devuelta toma tres parámetros:
 * - `action` (string): La acción para la que se debe comprobar el permiso.
 * - `scope` (string): El ámbito dentro del cual se realizará la acción.
 * - `resource` (string): El recurso en el que se realizará la acción.
 *
 * La función devuelve un valor booleano que indica si el usuario tiene el permiso requerido.
 *
 * La verificación de permisos se basa en los roles del usuario y sus permisos asociados.
 * Se concede un permiso si alguno de los roles del usuario tiene un permiso que coincide con la
 * acción, el alcance y el recurso especificados, o si alguno de estos campos está configurado como '*'.
 */

const useCanAction = () => {
  const { user } = useAuth()
  const can = (scope: string, resource: string, action: string) =>
    user?.roles.some(role =>
      role.permissions.some(
        permission =>
          (permission.action === action || permission.action === '*') &&
          (permission.scope === scope || permission.scope === '*') &&
          (permission.resource === resource || permission.resource === '*'),
      ),
    )

  return can
}

export default useCanAction
