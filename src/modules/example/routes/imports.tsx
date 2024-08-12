import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const ExampleView = Loader(lazy(() => import('../views/example')))
