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
      className="w-full rounded-lg p-2 mt-4 outline-none"
      placeholder="Busque uma postagem"
    />
  )
}
