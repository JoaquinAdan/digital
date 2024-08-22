import React from 'react'
import QueryProvider from './query'
import TooltipProv from './tooltip'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <TooltipProv>{children}</TooltipProv>
    </QueryProvider>
  )
}
