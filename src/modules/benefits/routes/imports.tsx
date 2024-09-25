import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const ClaimsView = Loader(lazy(() => import('../views/claims')))
