import { PokeData } from "../utils/pokeData"

export const useFindJpName = () => {
  const findJpName = (id: string) => {
    const numberId = Number(id)
    const data = PokeData[numberId - 1]
    const jpName = data?.name.japanese

    return jpName
  }
  return { findJpName }
}