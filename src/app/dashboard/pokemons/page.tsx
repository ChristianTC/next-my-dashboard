
const getPokemons = async (linit=20, offset=0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${linit}&offset=${offset}`)
    .then(res => res.json())

  return data
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons()
  return (
    <div>
      { JSON.stringify(pokemons) }
    </div>
  );
}