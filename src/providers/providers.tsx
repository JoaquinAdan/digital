import { TooltipProvider } from '@/modules/shared/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'

const queryClient = new QueryClient()
export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </QueryClientProvider>
  )
}
