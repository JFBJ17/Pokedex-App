import { useState } from 'react'
import { useQuery } from 'react-query'
import { ImSearch } from 'react-icons/im'
import Skeleton from 'react-loading-skeleton'

import { Input } from '../ui/Input'
import { Layout } from '../layouts/Layout'
import { Pagination } from '../ui/Pagination'
import { Card } from '../components/base/Card'
import { usePokemon } from '../hooks/usePokemon'

export default function Home () {
  const { getPokemons } = usePokemon()
  const [pageNumber, setPageNumber] = useState(0)
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['pokemons', pageNumber],
    queryFn: ({ queryKey }) => getPokemons(queryKey[1] as number)
  })

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
        <Pagination
          currentPage={pageNumber / 20 + 1}
          total={isLoading ? undefined : data.count}
          onChange={page => {
            setPageNumber(page * 20 - 20)
          }}
        />
      </section>
      <section className='container mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
        {isLoading
          ? Array.from({ length: 10 }, (v, k) => (
              <Skeleton key={k} borderRadius={6} height={240} />
            ))
          : data.pokemons.map(pokemon => {
              return (
                <Card
                  img_url={pokemon.sprites.other.dream_world.front_default}
                  key={pokemon.id}
                  order={pokemon.id}
                  pokemonType={pokemon.types.map(e => e.type.name)}
                  name={pokemon.name}
                />
              )
            })}
      </section>
      <section className='mt-5 mb-28 overflow-x-auto px-2 h-10'>
        <Pagination
          currentPage={pageNumber / 20 + 1}
          total={isLoading ? undefined : data.count}
          onChange={page => {
            setPageNumber(page * 20 - 20)
          }}
        />
      </section>
    </Layout>
  )
}
