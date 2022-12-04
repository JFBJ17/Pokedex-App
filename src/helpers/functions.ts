import { pokeTypeColor } from './constans'

export const getPokeTypeColor = (type: string): string => {
  return pokeTypeColor[type]
}
