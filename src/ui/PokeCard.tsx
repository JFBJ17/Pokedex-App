import Image from 'next/image'
import {
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  PokeTypeItem,
  PokeTypeList
} from '../styles/pokecard'

interface Props {
  pokemonType: string[]
  order: number
  name: string
  img_url: string
}

export const PokeCard: React.FC<Props> = ({
  pokemonType,
  order,
  name,
  img_url
}) => {
  const pokeIndex = order.toString().padStart(3, '0')

  return (
    <CardContainer>
      <CardHeader>
        <span className='pokeindex'>{`#${pokeIndex}`}</span>
      </CardHeader>
      <CardBody pokemonType={pokemonType[0]}>
        <Image
          alt={`${name}-${order}`}
          src={img_url}
          objectFit='contain'
          width={300}
          height={175}
        />
      </CardBody>
      <CardFooter>
        <span className='pokename'>{name}</span>
        <PokeTypeList>
          {pokemonType.map((poke, i) => {
            return (
              <PokeTypeItem key={i} pokemonType={poke}>
                {poke}
              </PokeTypeItem>
            )
          })}
        </PokeTypeList>
      </CardFooter>
    </CardContainer>
  )
}
