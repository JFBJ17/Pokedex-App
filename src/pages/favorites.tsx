import { useState } from 'react'

import { ImSearch } from 'react-icons/im'
import { Card } from '../components/base/Card'
import { Layout } from '../layouts/Layout'
import { Input } from '../ui/Input'
import { Pagination } from '../ui/Pagination'

export default function FavoritesPage () {
  const [favoritePokemons, setFavoritesPokemons] = useState([])

  return (
    <Layout title='Favoritos'>
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
        {favoritePokemons.map(pokemon => {
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
