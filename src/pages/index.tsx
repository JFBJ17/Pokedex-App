import axios from 'axios'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { ImSearch } from 'react-icons/im'

import { Pokemon } from '../interfaces/pokemon.interface'
import { Layout } from '../layouts/Layout'
import { Card } from '../components/base/Card'
import { Pagination } from '../ui/Pagination'
import { usePokemon } from '../hooks/usePokemon'
import { Input } from '../ui/Input'

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
    <Layout title='Inicio'>
      <form className='px-2'>
        <Input
          hiddenLabel
          fullWidth
          type='search'
          endIcon={<ImSearch />}
          placeholder='Buscar pokemon'
        />
      </form>
      <section className='my-5 overflow-x-auto px-2 h-10'>
        <Pagination />
      </section>
      <section className='container mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
        {pokemons.map(pokemon => {
          return (
            <Card
              img_url={pokemon.img_url}
              key={pokemon.id}
              order={pokemon.id}
              pokemonType={pokemon.types}
              name={pokemon.name}
              onClick={() => console.log(pokemon.id)}
            />
          )
        })}
      </section>
      <section className='mt-5 mb-28 overflow-x-auto px-2 h-10'>
        <Pagination />
      </section>
    </Layout>
  )
}
