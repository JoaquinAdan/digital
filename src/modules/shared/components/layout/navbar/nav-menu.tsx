import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import ListItem from './nav-list-item'

const components: {
  title: string
  href: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    icon: Bars4Icon,
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    icon: NewspaperIcon,
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
    icon: PhoneIcon,
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'Menu',
    href: '/docs/primitives/menu',
    description: 'A popup that displays a list of choices.',
    icon: TagIcon,
  },
  {
    title: 'Popover',
    href: '/docs/primitives/popover',
    description: 'A popup that displays a list of choices.',
    icon: UserGroupIcon,
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
