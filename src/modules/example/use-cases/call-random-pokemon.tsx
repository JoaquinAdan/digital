import CardPokemon from '../components/card-default'
import { useRandomPokemon } from '../hooks/use-random-pokemon'

const CallRandomPokemon = () => {
  const pokemon = useRandomPokemon()
  if (!pokemon.data) return null
  return (
    <CardPokemon
      image={pokemon.data.sprites.front_default}
      name={pokemon.data.name}
      refetch={pokemon.refetch}
      isLoading={pokemon.isFetching || pokemon.isLoading}
    />
  )
}

export default CallRandomPokemon
