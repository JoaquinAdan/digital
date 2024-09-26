import PATHS from '@/configs/constants/paths'
import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { Ruler } from 'lucide-react'

const navExample: NavItem = {
  title: 'Ejemplo',
  href: PATHS.PUBLICS.EXAMPLE,
  description: 'Pagina de ejemplo con estructura de carpetas del proyecto.',
  icon: Ruler,
  visibility: VISIBILITY.PUBLIC,
}

export default navExample
