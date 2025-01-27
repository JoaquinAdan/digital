import { NavLink } from 'react-router-dom'
// import { ArrowUp } from 'lucide-react'
// import { Button } from '../ui/button'

const Footer = () => {
  return (
    <>
      {/* <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='fixed right-2 bottom-2' variant='ghost'>
        <ArrowUp className='h-5 w-5 text-purple-700' />
      </Button> */}
      <div className='mt-2 mb-1 flex justify-center'>
        <p className='font-bold text-gray-700'>Copyright © {new Date().getFullYear()}</p>
        <p className='mx-1 font-bold text-gray-700 hidden sm:block'>-</p>
        <NavLink to='https://www.campana.gob.ar/' target='_blank'>
          <p className='font-bold text-gray-700 hidden sm:block'>www.campana.gov.ar</p>
          <div className='bg-gray-600 h-[1px] w-full mt-[-5px]' />
        </NavLink>
      </div>
      <div
        style={{
          background: 'linear-gradient(331deg, rgba(90,1,117,1) 0%, rgba(253,224,239,1) 12%, rgba(255,255,255,1) 30%)',
          height: '40vh',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          zIndex: -1,
        }}
      />
    </>
  )
}

export default Footer
