import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { TvMinimal } from 'lucide-react'

const navUsers: NavItem = {
  title: 'Usuarios',
  href: '/usuarios',
  description: 'Administracion de usuarios del sistema.',
  icon: TvMinimal,
  visibility: VISIBILITY.DIGITAL,
}

export default navUsers
