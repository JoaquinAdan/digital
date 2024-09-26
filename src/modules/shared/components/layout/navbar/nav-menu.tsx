import useAuth from '@/modules/auth/hooks/use-auth'
import protectedItems from '../../routes/protected-items'
import publicItems from '../../routes/public-items'
import ListItem from './nav-list-item'

/*
 * Componente NavMenu que muestra un menú de navegación basado en la autenticación y los roles del usuario.
 *
 * Este componente utiliza el hook `useAuth` para obtener el usuario actual y sus roles. Luego,
 * determina los elementos de navegación que se mostrarán según si el usuario está autenticado y
 * sus permisos.
 *
 * - Si el usuario no está autenticado, solo se muestran `publicItems`.
 * - Si el usuario está autenticado, sus roles y permisos se utilizan para filtrar y mostrar
 * `protectedItems` además de `publicItems`.
 */

const NavMenu = () => {
  const { user } = useAuth()

  let navItems = publicItems
  if (user) {
    const scopes = user?.roles?.flatMap((role) => role.permissions.map((permission) => permission.scope))
    const hasWildcard = scopes?.includes('*')
    const filteredArray = hasWildcard
      ? protectedItems
      : protectedItems.filter((item) => scopes?.some((scope) => item.href.includes(scope)))
    navItems = [...navItems, ...filteredArray]
  }

  return (
    <ul className='grid xl:w-[1000px] gap-3 p-0 xl:p-4 xl:grid-cols-3'>
      {navItems.map((component) => (
        <ListItem
          key={component.title}
          title={component.title}
          href={component.href}
          icon={component.icon}
          visibility={component.visibility}
        >
          {component.description}
        </ListItem>
      ))}
    </ul>
  )
}

export default NavMenu
