"use client"
import { useState } from "react"

export const Buscador = ({ Blog }) => {
  const [valor, setValor] = useState()
  const ValorInput = (e) => {
    setValor(e.target.value)
    console.log(e.target.value)
  }
  return (
    <input
      value={valor}
      onChange={ValorInput}
      className="w-full rounded-lg  p-2 mt-4 outline-none dark:bg-colors-background dark:text-colors-textoPrincipal text-black"
      placeholder="Busque uma postagem por título ou descrição..."
    />
  )
}
