import Image from "next/image"
import { useRouter } from "next/router"

import { useGetPokemonByIdQuery } from "../app/queries/pokeApi"
import { Button } from "../components/Button"

const Index = () => {
  const { push } = useRouter()
  const { data: pokemonData } = useGetPokemonByIdQuery('1')

  return (
    <div className="mx-auto max-w-md">
      <div className="pt-6 text-center">
        {pokemonData && (
          <Image src={pokemonData.sprites.front_default} width={320} height={320} />
        )}
      </div>
      <h1 className="text-center">ポケモン名を当てるクイズ！</h1>
      <h1 className="text-center">英語になってるから日本語名をあててね！</h1>
      <div className="text-center mt-4">
        <Button onClick={() => push('/quiz')}>さっそく始める</Button>
      </div>
    </div>
  )
}

export default Index