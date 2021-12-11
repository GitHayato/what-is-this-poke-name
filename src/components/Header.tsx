import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-orange-400">
      <Link href="/">
        <a className="block text-white p-2 text-xl font-extrabold">What is This Poke Name?</a>
      </Link>
    </header>
  )
  }