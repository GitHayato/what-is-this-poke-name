import { useRouter } from "next/router"
import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { stockIdSlice, selectCorrectIds, selectIncorrectIds, selectStockIds } from "../app/slice/stockIdSlice"
import { Button } from "../components/Button"
import { PokeData } from "../utils/pokeData"


const Result = () => {
  const stockIds = useAppSelector(selectStockIds)
  const correctIds = useAppSelector(selectCorrectIds)
  const incorrectIds = useAppSelector(selectIncorrectIds)
  const dispatch = useAppDispatch()
  const { resetAnswers } = stockIdSlice.actions

  const { push } = useRouter()

  const handleClickToHome = React.useCallback(() => {
    dispatch(resetAnswers())
    push("/")
  }, [dispatch, push])

  return (
    <div className="mt-10 px-8">
      <h1 className="font-bold text-xl">クイズ結果</h1>
      <div>
        <div className="my-4">
          <h3 className="bg-green-500 text-white rounded-t-md px-2 py-1">
            正解数: {correctIds.length}/{stockIds.length}
          </h3>
          <ul>
            {correctIds.map((id) => (
              <li key={id} className="px-2 py-1 bg-green-100 flex">
                <p>No.{id}</p>
                <p className="ml-4">{PokeData[Number(id) - 1].name.japanese}</p>
              </li>

            ))}
          </ul>
        </div>
        <div className="my-4">
          <h3 className="bg-red-500 text-white rounded-t-md px-2 py-1">
            不正解数: {incorrectIds.length}/{stockIds.length}
          </h3>
          <ul>
            {incorrectIds.map((id) => (
              <li key={id} className="px-2 py-1 bg-red-100 flex">
                <p>No.{id}</p>
                <p className="ml-4">{PokeData[Number(id) - 1].name.japanese}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <Button color="black" onClick={handleClickToHome}>Homeに戻る</Button>
      </div>
    </div>
  )
}

export default Result