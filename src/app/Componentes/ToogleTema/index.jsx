"use client"
import { FiMoon, FiSun } from "react-icons/fi"

export default function Tema() {
  const toogle = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      aria-label="Trocar de tema"
      variant="outline"
      className=" duration-200 hover:dark:opacity-50 0 hover:opacity-50"
    >
      <FiSun
        className="cursor-pointer  text-colors-destaque text-4xl bg-colors-backgroundClar2 dark:bg-colors-background2 p-2 rounded-r-none  rounded-lg md:rounded-lg   transition-all block dark:hidden "
        onClick={toogle}
      />
      <FiMoon
        className=" cursor-pointer text-colors-destaque  text-4xl bg-colors-background2 p-2 rounded-r-none  rounded-lg md:rounded-lg   transition-all hidden dark:block"
        onClick={toogle}
      />
    </button>
  )
}
