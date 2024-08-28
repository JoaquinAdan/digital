import { Toaster } from '@/modules/shared/components/ui/toaster'
import QueryProvider from './query'
import TooltipProv from './tooltip'
import React from 'react'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <TooltipProv>
        <Toaster />
        {children}
      </TooltipProv>
    </QueryProvider>
  )
}
