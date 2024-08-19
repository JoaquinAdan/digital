import breakpoints from '@/configs/constants/breakpoints'
import { useEffect, useState } from 'react'

const useBreakpoint = (initialBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): boolean => {
  const [isLessThanBreakpoint, setIsLessThanBreakpoint] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const breakpointValue = breakpoints[initialBreakpoint]
      setIsLessThanBreakpoint(width < breakpointValue)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [initialBreakpoint])
  return isLessThanBreakpoint
}

export default useBreakpoint
