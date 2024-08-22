import { VISIBILITY } from '@/configs/constants/visibility'

export interface NavItem {
  title: string
  href: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  visibility: keyof typeof VISIBILITY
}
