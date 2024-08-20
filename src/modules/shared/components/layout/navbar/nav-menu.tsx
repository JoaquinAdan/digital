import { Angry, CircleHelp, Ruler } from 'lucide-react'
import ListItem from './nav-list-item'

const components: {
  title: string
  href: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
}[] = [
  {
    title: 'Reclamos',
    href: '/admin/reclamos',
    description: 'Administra los reclamos de los vecinos de la ciudad.',
    icon: Angry,
  },
  {
    title: 'Example',
    href: '/example',
    description: 'Pagina de ejemplo con estructura de carpetas del proyecto.',
    icon: Ruler,
  },
  {
    title: '???',
    href: '/admin/???',
    description: '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ',
    icon: CircleHelp,
  },
]

const NavMenu = () => {
  return (
    <ul className='grid w-[1000px] gap-3 p-0 xl:p-4 xl:grid-cols-3'>
      {components.map((component) => (
        <ListItem key={component.title} title={component.title} href={component.href} icon={component.icon}>
          {component.description}
        </ListItem>
      ))}
    </ul>
  )
}

export default NavMenu
