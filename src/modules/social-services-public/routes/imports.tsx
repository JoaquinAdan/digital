import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const SocialServicesView = Loader(lazy(() => import('../views/social-services')))
