import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { PokemonType } from '../types/pokemon/:id'
import { POKE_API_URL } from '../utils/endpoints'

const IndexPage = ({pokemonData}: {pokemonData: PokemonType}) => {
  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <Image src={pokemonData.sprites.front_default} width={200} height={200} />
    </div>
  )
}

export async function getStaticProps() {
  const fetchData = await axios.get<PokemonType>(`${POKE_API_URL}/809`)
  const pokemonData = fetchData.data

  return {
    props: {
      pokemonData,
    },
  }
}

export default IndexPage
