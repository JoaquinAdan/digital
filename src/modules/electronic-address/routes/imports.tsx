import { Loader } from '@/modules/shared/components/layout/loader'
import { lazy } from 'react'

export const ElectronicAddressView = Loader(lazy(() => import('../views/electronic-address')))
