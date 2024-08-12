import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const HomeView = Loader(lazy(() => import('../views/home')))
