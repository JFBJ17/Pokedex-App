import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon.interface'
import { Layout } from '../layouts/Layout'
import { PokeCard } from '../ui/PokeCard'
import { Grid } from '../styles/home'

interface PokemonState {
  id: number
  name: string
  types: string[]
  img_url: string
}

export default function Home () {
  const [pokemons, setPokemons] = useState<PokemonState[]>([])
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const { NEXT_PUBLIC_API } = process.env

  const getPokeData = async () => {
    try {
      const pokemons = await axios.get(NEXT_PUBLIC_API)
      const pokeData: Pokemon[] = await Promise.all(
        pokemons.data.results.map(async e => (await axios.get(e.url)).data)
      )
      const pokeList = pokeData.map(pokemon => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map(e => e.type.name),
          img_url: pokemon.sprites.other.dream_world.front_default
        }
      })
      setPokemons(pokeList)
    } catch (error) {
      console.error(error?.message as string)
    }
  }

  useEffect(() => {
    getPokeData()
  }, [])

  return (
    <Layout>
      <Grid>
        {pokemons.map(pokemon => {
          return (
            <PokeCard
              img_url={pokemon.img_url}
              key={pokemon.id}
              order={pokemon.id}
              pokemonType={pokemon.types}
              name={pokemon.name}
            />
          )
        })}
      </Grid>
    </Layout>
  )
}
