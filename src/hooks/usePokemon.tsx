import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon.interface'

export const usePokemon = () => {
  const { NEXT_PUBLIC_API } = process.env

  const getPokemons = async () => {
    try {
      const pokemons = await axios.get(NEXT_PUBLIC_API)
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
