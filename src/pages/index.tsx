import Link from "next/link"

const Index = () => {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-center">ポケモンの名前を英語から当てるクイズです。</h1>
      <Link href="/quiz">さっそく始める</Link>
    </div>
  )
}

export default Index