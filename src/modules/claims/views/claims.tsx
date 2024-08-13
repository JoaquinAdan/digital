import AppLayout from '@/modules/shared/components/layout/app-layout'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  open: { scale: 0, display: 'none', opacity: 0 },
  closed: { scale: 1, display: 'block', opacity: 1 },
}

const Claims = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const divStyle = 'w-full h-10 rounded-md flex justify-center items-center  w-full '
  return (
    <AppLayout
      title='Reclamos'
      description='Genere un reclamo para que el municipio lo atienda si es de su competencia.'
      adminPath='reclamos'
    >
      <button onClick={() => setIsOpen(!isOpen)}>change</button>
      <div className='flex w-full gap-4 mt-4 h-full'>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className={` ${divStyle} cursor-pointer h-full flex`}
        ></motion.div>
        <motion.div
          animate={isOpen ? 'closed' : 'open'}
          variants={variants}
          className={`bg-blue-500 ${divStyle} cursor-pointer h-full  w-full`}
        >
          FORMULARIO
        </motion.div>
      </div>
    </AppLayout>
  )
}

export default Claims
