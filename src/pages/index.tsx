import Image from 'next/image'
import React from 'react'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useGetPokemonByIdQuery } from '../app/queries/pokeApi'
import { stockIdSlice, selectStockIds } from '../app/slice/stockIdSlice'
import { Loading } from '../components/Loading'
import { useRandom } from '../hooks/useRandom'

const IndexPage = () => {
  const [queryId, setQueryId] = React.useState('')

  const stockIds = useAppSelector(selectStockIds)
  const { pokemonId } = stockIdSlice.actions
  const dispatch = useAppDispatch()

  const dispatchPokemonId = React.useCallback(() => {
    const { randomNumber } = useRandom()
    dispatch(pokemonId(randomNumber))
    setQueryId(randomNumber)
  }, [])

  React.useEffect(() => {
    dispatchPokemonId()
  }, [])

  const { data: pokemonData, refetch: refetchPokemonData, isFetching } = useGetPokemonByIdQuery(queryId)

  const handleClickNextPokemon = React.useCallback(() => {
    dispatchPokemonId()
    refetchPokemonData()
  }, [dispatchPokemonId, refetchPokemonData])

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <h1>{pokemonData.name}</h1>
          <Image src={pokemonData.sprites.front_default} width={200} height={200} />
          <button onClick={handleClickNextPokemon}>Next Pokemon</button>
          {stockIds.map((id) => (
            <p key={id} onClick={() => setQueryId(id)}>{id}</p>
          ))}
        </>
      )}
    </div>
  )
}

export default IndexPage
