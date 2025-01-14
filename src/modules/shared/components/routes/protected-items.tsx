import navClaims from '@/modules/claims/routes/nav-item'
import { NavItem } from '../../models/nav-item'
import navUsers from '@/modules/users/routes/nav-item'
import navSocialServices from '@/modules/social-services/routes/nav-item'
import navSocialServicesVisitors from '@/modules/social-services-survey/routes/nav-item'

const protectedItems: NavItem[] = [navClaims, navUsers, navSocialServices, navSocialServicesVisitors]

export default protectedItems
