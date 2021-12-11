import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useGetPokemonByIdQuery } from '../app/queries/pokeApi'
import { stockIdSlice, selectStockIds } from '../app/slice/stockIdSlice'
import { Button } from '../components/Button'
import { Loading } from '../components/Loading'
import { useFindJpName } from '../hooks/useFindJpName'
import { useRandom } from '../hooks/useRandom'

const Quiz = () => {
  const [queryId, setQueryId] = React.useState('')
  const [showAnswer, setShowAnswer] = React.useState(false)

  const stockIds = useAppSelector(selectStockIds)
  const { pokemonId } = stockIdSlice.actions
  const dispatch = useAppDispatch()
  const { findJpName } = useFindJpName()
  const { push } = useRouter()

  const dispatchPokemonId = React.useCallback(() => {
    const { randomNumber } = useRandom()
    dispatch(pokemonId(randomNumber))
    setQueryId(randomNumber)
  }, [])

  React.useEffect(() => {
    dispatchPokemonId()
  }, [])

  const { data: pokemonData, refetch: refetchPokemonData, isFetching } = useGetPokemonByIdQuery(queryId)
  const jpPokemonName = findJpName(queryId)

  const handleClickNextPokemon = React.useCallback(() => {
    dispatchPokemonId()
    refetchPokemonData()
    setShowAnswer(false)
  }, [dispatchPokemonId, refetchPokemonData])

  const handleClickShowAnswer = React.useCallback(() => {
    setShowAnswer(true)
  }, [])

  console.log(pokemonData)

  return (
    <div className="flex justify-center">
      {isFetching ? (
        <Loading />
      ) : (
        <div className="pt-6">
          {showAnswer ? (
            <Image src={pokemonData.sprites.front_default} width={320} height={320} />
          ) : (
            <h1 className="text-8xl flex justify-center items-center align-middle w-80 h-80">?</h1>
            )}
          <h1 className="font-bold text-xl text-center my-2">英名：{pokemonData.name}</h1>
          {showAnswer ? (
            <h1 className="font-bold text-xl text-center">{jpPokemonName}</h1>
          ) : (
            <input placeholder="答えを入力してください" className="w-full border-2 px-2 py-1 rounded-md" />
          )}
          <div className="text-center mt-4">
            {showAnswer ? (
              <Button onClick={handleClickNextPokemon}>次の問題</Button>
            ) : (
              <Button onClick={handleClickShowAnswer}>答えを見る</Button>
            )}
          </div>
          {/* {stockIds.map((id) => (
            <p key={id} onClick={() => setQueryId(id)}>{id}</p>
          ))} */}
          <div className="text-center">
            <Button color="black" className="mt-8" onClick={() => push('/')}>クイズを終了する</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz
