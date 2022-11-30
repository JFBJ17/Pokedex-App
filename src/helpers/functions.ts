import { pokeTypeColor } from './constans'

export const getPokeTypeColor = (type: string) => {
  return pokeTypeColor[type]
}
