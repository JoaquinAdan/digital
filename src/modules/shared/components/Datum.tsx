import React from 'react'
import { Skeleton } from '@/modules/shared/components/ui/skeleton'

interface Props {
  datum: string | React.ReactNode | undefined
  styles?: string
  title: string
  isLoading: boolean
}

// This component is used to detail data with a title, it also accepts components

const Datum = ({ title, datum, styles = 'flex flex-col md:flex-row items-center', isLoading }: Props) => {
  return (
    <div className={`${styles} w-full`}>
      <p className='font-bold mr-1'>{title}:</p>
      {isLoading ? (
        <Skeleton className={`${React.isValidElement(datum) ? 'h-[125px]' : 'h-4'} bg-gray-300 w-full rounded-xl`} />
      ) : React.isValidElement(datum) ? (
        datum
      ) : (
        <span className='capitalize'>{datum ?? ''}</span>
      )}
    </div>
  )
}

export default Datum
