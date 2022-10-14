import { Layout } from '../../layouts/Layout'
import InputSearch from '../../components/InputSearch'
import Pagination from '../../components/Pagination'
import Tarjeta from '../../components/Tarjeta'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button } from '../../ui/Button'

export const Pokemon = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const { NEXT_PUBLIC_API } = process.env
  // States
  const [searchPokemon, setSearchPokemon] = useState('')
  const [pokemonData, setPokemonData] = useState({})
  const [pagination, setPagination] = useState(0)

  const handleChange = (e: any) => {
    setSearchPokemon(e.target.value)
  }

  const handleSearch = () => {
    if (searchPokemon) {
      searcher(searchPokemon.toLowerCase())
    }
  }

  const searcher = async (pokemon: any) => {
    try {
      const response = await axios.get(`${url}/${pokemon}`)
      setPokemonData(response.data)
      setPagination(response.data.id)
    } catch (err) {
      const msgError = new Error(`No se encontro el pokemon ${searchPokemon}`)
      toast.error(msgError.message)
    }
  }

  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <section className='flex items-center flex-col space-y-3'>
          <InputSearch
            handleChange={handleChange}
            handleSearch={handleSearch}
          />
          <Pagination
            searcher={searcher}
            pagination={pagination}
            setPagination={setPagination}
          />
        </section>
        <section className='col-span-1 lg:col-span-2 bg-gray-50 dark:bg-gray-300 shadow-md'>
          <Tarjeta pokemonData={pokemonData} />
          <Button text='Boton' />
        </section>
      </div>
    </Layout>
  )
}
