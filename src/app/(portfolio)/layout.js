import React from "react"
import Logo from "../Componentes/Logo"
import Header from "../Componentes/Header"
import Info from "../Componentes/InfoArthur/index."
import SubirBotao from "../Componentes/SubirBotao"

export default function layout({ children }) {
  return (
    <>
      <header className="container px-0 md:px-12 mx-auto text-center md:text-left mt-4 flex flex-col gap-8 ">
        <Logo />
        <Header mobile={true} />
      </header>
      <main className="relative">
        <div className="container  mx-auto px-0 md:px-12 flex flex-col  md:flex md:flex-row gap-4 mt-[20px]">
          <Info />
          <div>
            <Header mobile={false} />
            {children}
          </div>
        </div>
        <SubirBotao />
      </main>
    </>
  )
}
