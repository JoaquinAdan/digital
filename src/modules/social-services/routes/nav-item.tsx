import PATHS from '@/configs/constants/paths'
import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { Users } from 'lucide-react'

const navSocialServices: NavItem = {
  title: 'Desarrollo Social',
  href: PATHS.ADMIN.SOCIAL,
  description: 'Formularios y encuestas.',
  icon: Users,
  visibility: VISIBILITY.ADMIN,
}

export default navSocialServices

