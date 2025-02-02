import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />
        })
      }
      {/* <Image
        key={pokemon.id}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={0}
        height={0}
        style={{ width: 'auto', height: '100px' }}
        alt={pokemon.name}
        priority={false} /> */}
    </div>
  )
}
