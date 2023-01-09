import axios from 'axios'
import { POKEMONS_API } from '../helpers/constans'
import { Pokemon } from '../interfaces/pokemon.interface'

export const usePokemon = () => {
  const getPokemons = async () => {
    try {
      const pokemons = await POKEMONS_API.get('/pokemon')
      const pokeData: Pokemon[] = await Promise.all(
        pokemons.data.results.map(async e => (await axios.get(e.url)).data)
      )
      return pokeData
    } catch {
      throw new Error('Error al obtener los datos')
    }
  }
  return {
    getPokemons
  }
}
