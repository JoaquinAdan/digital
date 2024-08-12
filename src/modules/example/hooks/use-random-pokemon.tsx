import { useQuery } from '@tanstack/react-query'
import { getRandomPokemon } from '../services/get-random-pokemon'
import Pokemon from '../models/pokemon'

export const GET_POKEMON_KEY = 'GET_POKEMON_KEY'

export const useRandomPokemon = () => {
  const pokemon = useQuery<Pokemon>({
    queryKey: [GET_POKEMON_KEY],
    queryFn: getRandomPokemon,
    refetchOnWindowFocus: false,
  })

  return pokemon
}
