import getRandomNumber from '../utils/random-number'
import Pokemon from '../models/pokemon'
import { handler } from '@/http/handler'

// export const getRandomPokemon = async (): Promise<Pokemon> => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`)
//   return handler(response)
// }

export const getRandomPokemon = async (): Promise<Pokemon> => {
  return handler(fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`))
}
