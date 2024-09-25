import PATHS from '@/configs/constants/paths'
import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { Users } from 'lucide-react'

const navSocialServicesVisitors: NavItem = {
  title: 'Desarrollo Social',
  href: PATHS.SOCIAL_PUBLIC,
  description: 'Formularios y encuestas.',
  icon: Users,
  visibility: VISIBILITY.VISITOR,
}

export default navSocialServicesVisitors
