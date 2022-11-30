import Image from 'next/image'

interface Props {
  pokemonType: string[]
  order: number
  name: string
  img_url: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const PokeCard: React.FC<Props> = ({
  pokemonType,
  order,
  name,
  img_url,
  onClick
}) => {
  const pokeIndex = order.toString().padStart(3, '0')

  return (
    <div onClick={onClick}>
      <div>
        <span className='pokeindex'>{`#${pokeIndex}`}</span>
      </div>
      <div>
        <Image
          alt={`${name}-${order}`}
          src={img_url}
          objectFit='contain'
          width={300}
          height={175}
        />
      </div>
      <div>
        <span className='pokename'>{name}</span>
        <ul>
          {pokemonType.map((poke, i) => {
            return <li key={i}>{poke}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
