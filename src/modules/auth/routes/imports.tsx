import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const LoginView = Loader(lazy(() => import('../views/login')))
