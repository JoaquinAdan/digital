import purplesvg from '@/assets/electronic-address/purple.svg'
import renaper from '@/assets/electronic-address/renaper.png'
import { Button } from '@/modules/shared/components/ui/button'

const ElectronicAddress = () => {
  return (
    <div className='flex flex-col px-3'>
      <article className='flex flex-col gap-2 items-centerw-full lg:mt-5'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1 md:gap-3 justify-center items-start h-full w-full'>
            <h1 className='font-bold  text-xl md:text-4xl lg:text-5xl text-gray-700'>
              Plataforma de dirección electronica fiscal
            </h1>
            <div className='flex md:flex-row-reverse 2xl:flex-row flex-col gap-1'>
              <img className='hidden xl:block w-12 2xl:ml-[-50px]' src={renaper} alt='Logo renaper' />
              <p className='font-bold text-gray-700'>
                Podrás autenticarte ingresando tu Documento Nacional de Identidad, sexo correspondiente y el número de
                trámite que figura en tu DNI
              </p>
            </div>
            <Button size='sm' className=''>
              Autenticar
            </Button>
          </div>
          <img className='hidden lg:block' src={purplesvg} alt='svg sobre personas conectando' />
        </div>
      </article>
      <article className='flex flex-col m-auto mt-5'>
        <h2 className='font-bold text-left xl:text-center text-xl md:text-4xl text-gray-700'>
          ¿Cómo puedo autenticar mi identidad?
        </h2>
        <p className='font-bold text-gray-700 text-left mt-1'>
          Es muy sencillo. Primero deberás apretar el boton "AUTENTICAR" que tienes arribas. Al apretarlo, el sistema te
          dirigirá a la página oficial del organismo “Renaper” para que ingreses tus datos de manera segura y confiable. De
          esta manera, se validará tu identidad y podrás acceder al trámite, transacción, reclamo o cualquier otra acción que
          necesites llevar adelante. Esta herramienta es muy importante, ya que el sistema comprueba que la persona humana es
          quien dice ser al momento de realizar una transacción, siendo esta afirmación condición necesaria y suficiente para
          que estas operaciones tengan validez legal.
        </p>
      </article>
    </div>
  )
}

export default ElectronicAddress
