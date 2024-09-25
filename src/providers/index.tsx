import QueryProvider from './query'
import TooltipProv from './tooltip'
import { Toaster } from 'react-hot-toast'
import React from 'react'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <TooltipProv>
        <Toaster position='bottom-left'/>
        {children}
      </TooltipProv>
    </QueryProvider>
  )
}
