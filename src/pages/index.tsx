import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { ImSearch } from 'react-icons/im'

import { Pokemon } from '../interfaces/pokemon.interface'
import { Layout } from '../layouts/Layout'
import { Card } from '../components/base/Card'
import { Pagination } from '../ui/Pagination'
import { usePokemon } from '../hooks/usePokemon'
import { Input } from '../ui/Input'
import Skeleton from 'react-loading-skeleton'

interface PokemonState {
  id: number
  name: string
  types: string[]
  img_url: string
}

export default function Home () {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const { getPokemons } = usePokemon()
  // const [pokemons, setPokemons] = useState<PokemonState[]>([])
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  })

  const getPokeData = () => {
    const pokeList = [].map(pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(e => e.type.name),
        img_url: pokemon.sprites.other.dream_world.front_default
      }
    })
    return pokeList
  }

  console.log('Error', error)
  console.log('LOADING', isLoading)
  console.log('DATA', data)

  /* if (isError) return 'Ocurrio un error'
  if (isLoading) return 'Loading...' */

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
        {Array.from({ length: 10 }).map((pokemon, i) => {
          return (
            <Card
              img_url={'https://picsum.photos/100'}
              key={i}
              order={i}
              pokemonType={[]}
              name={isLoading ? <Skeleton /> : 'name'}
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
