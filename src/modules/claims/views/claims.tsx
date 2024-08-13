import AppLayout from '@/modules/shared/components/layout/app-layout'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  open: { flex: 10 },
  closed: { flex: 1 },
}

const Claims = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const divStyle = 'w-full h-10 rounded-md flex justify-center items-center'
  return (
    <AppLayout
      title='Reclamos'
      description='Genere un reclamo para que el municipio lo atienda si es de su competencia.'
      adminPath='reclamos'
    >
      <div className='flex flex-col gap-2 justify-center items-center h-full'>Reclamos</div>
      <div className='flex w-full gap-4 mt-4'>
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className={`bg-red-500 ${divStyle} cursor-pointer h-96`}
        >
          {/* <TableClaims /> */}
        </motion.div>
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? 'closed' : 'open'}
          variants={variants}
          className={`bg-blue-500 ${divStyle} cursor-pointer`}
        >
          FORMULARIO
        </motion.div>
      </div>
    </AppLayout>
  )
}

export default Claims
