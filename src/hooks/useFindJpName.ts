import { PokeData } from "../utils/pokeData"

export const useFindJpName = () => {
  const findJpName = (id: string) => {
    const numberId = Number(id)
    const data = PokeData[numberId - 1]
    const jpName = data?.name.japanese
    const type = data?.type

    return { jpName, type }
  }
  return { findJpName }
}