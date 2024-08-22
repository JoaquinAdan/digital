import PATHS from '@/configs/constants/paths'
import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { Ruler } from 'lucide-react'

const navHome: NavItem = {
  title: 'Inicio',
  href: PATHS.HOME,
  description: 'Pagina de inicio de Campana Digital.',
  icon: Ruler,
  visibility: VISIBILITY.PUBLIC,
}

export default navHome
