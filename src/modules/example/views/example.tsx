import CallRandomPokemon from '../use-cases/call-random-pokemon'

const Example = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-full'>
      <CallRandomPokemon />
    </div>
  )
}

export default Example
