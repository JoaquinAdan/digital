import PATHS from '@/configs/constants/paths'
import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { Angry } from 'lucide-react'

const navClaims: NavItem = {
  title: 'Reclamos',
  href: PATHS.ADMIN.CLAIMS,
  description: 'Administra los reclamos de los vecinos de la ciudad.',
  icon: Angry,
  visibility: VISIBILITY.PRIVATE,
}

export default navClaims
