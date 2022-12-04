import axios from 'axios'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { Pokemon } from '../interfaces/pokemon.interface'
import { Layout } from '../layouts/Layout'
import { PokeCard } from '../components/base/Card'
import { Pagination } from '../ui/Pagination'
import { usePokemon } from '../hooks/usePokemon'

interface PokemonState {
  id: number
  name: string
  types: string[]
  img_url: string
}

export default function Home () {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const { getPokemons } = usePokemon()
  const [pokemons, setPokemons] = useState<PokemonState[]>([])
  const { data, error, isLoading } = useQuery('Pokemons', getPokemons)
  const { NEXT_PUBLIC_API } = process.env

  const getPokeData = async () => {
    try {
      /* const pokemons = await axios.get(NEXT_PUBLIC_API)
      const pokeData: Pokemon[] = await Promise.all(
        pokemons.data.results.map(async e => (await axios.get(e.url)).data)
      ) */
      const pokeList = data.map(pokemon => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map(e => e.type.name),
          img_url: pokemon.sprites.other.dream_world.front_default
        }
      })
      setPokemons(pokeList)
    } catch (error) {
      console.error('Error al obtener los datos')
    }
  }

  useEffect(() => {
    getPokeData()
  }, [])

  console.log('DATA', data)
  console.log('LOADING', isLoading)
  console.log('ERROR', error)

  return (
    <Layout>
      <div className='bg-red-300 dark:bg-slate-500'>
        <Pagination />
      </div>
      <div>
        {pokemons.map(pokemon => {
          return (
            <PokeCard
              img_url={pokemon.img_url}
              key={pokemon.id}
              order={pokemon.id}
              pokemonType={pokemon.types}
              name={pokemon.name}
              onClick={() => console.log(pokemon.id)}
            />
          )
        })}
      </div>
      <div>
        <Pagination />
      </div>
    </Layout>
  )
}
