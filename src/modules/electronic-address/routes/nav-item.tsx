import { VISIBILITY } from '@/configs/constants/visibility'
import { NavItem } from '@/modules/shared/models/nav-item'
import { CircuitBoard } from 'lucide-react'

const electronicAddressUsers: NavItem = {
  title: 'Domicilio electrónico',
  href: '/domicilio-electronico',
  description: 'Constitución de domicilio electrónico del ciudadano.',
  icon: CircuitBoard,
  visibility: VISIBILITY.PUBLIC,
}

export default electronicAddressUsers
