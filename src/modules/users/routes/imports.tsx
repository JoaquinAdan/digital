import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const UsersView = Loader(lazy(() => import('../views/users')))
