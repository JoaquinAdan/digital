import useAuth from '@/modules/auth/hooks/use-auth'
import protectedItems from '../../routes/protected-items'
import publicItems from '../../routes/public-items'
import ListItem from './nav-list-item'

const NavMenu = () => {
  const { user } = useAuth()

  let navItems = publicItems
  if (user) {
    const scopes = user.roles.flatMap((role) => role.permissions.map((permission) => permission.scope))
    const hasWildcard = scopes.includes('*')
    const filteredArray = hasWildcard
      ? protectedItems
      : protectedItems.filter((item) => scopes.some((scope) => item.href.includes(scope)))
    navItems = [...navItems, ...filteredArray]
  }

  console.log(navItems)
  console.log(publicItems)

  return (
    <ul className='grid w-[1000px] gap-3 p-0 xl:p-4 xl:grid-cols-3'>
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
