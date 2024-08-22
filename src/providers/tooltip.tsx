import { TooltipProvider } from '@/modules/shared/components/ui/tooltip'
import React from 'react'

export default function TooltipProv({ children }: { children: React.ReactNode }) {
  return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
}
