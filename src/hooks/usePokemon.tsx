import axios from 'axios'
import { POKEMONS_API } from '../helpers/constans'
import { Pokemon } from '../interfaces/pokemon.interface'

export const usePokemon = () => {
  const getPokemons = async (page: number) => {
    try {
      const pokemons = await POKEMONS_API.get(`/?offset=${page}&limit=20`)
      console.log('POKEMONS', pokemons)
      const pokeData: Pokemon[] = await Promise.all(
        pokemons.data.results.map(async e => (await axios.get(e.url)).data)
      )
      return {
        count: pokemons.data.count as number,
        pokemons: pokeData
      }
    } catch {
      throw new Error('Error al obtener los datos')
    }
  }
  return {
    getPokemons
  }
}
