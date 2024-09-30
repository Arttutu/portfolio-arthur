"use client";
import React from "react";
import Logo from "../Componentes/Logo";
import Tema from "../Componentes/ToogleTema";
import Link from "next/link";
import { useParams } from "next/navigation";
import SubirBotao from "../Componentes/SubirBotao";
import VoltarBotao from "../Componentes/VoltarBotao";

export default function LayoutPost({ children }) {
  const url = useParams();
  return (
    <>
      <header className="container mx-auto text-center md:text-left mt-4 flex flex-col gap-8 ">
        <Logo />
      </header>
      <main className="dark:bg-colors-background bg-colors-backgroundClaro  container mx-auto">
        <div className=" flex justify-between mt-4 mx-4  md:my-8 md:mx-0 ">
          <VoltarBotao voltar_endereco={"/Blog"} />
          <Tema />
        </div>
        <div className="flex flex-wrap p-2 items-center gap-2 mb-4">
          <Link
            href={"/"}
            className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg duration-200 hover:opacity-75"
          >
            Home
          </Link>
          <span className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg">
            {">"}
          </span>
          <Link
            href={"/Blog"}
            className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg duration-200 hover:opacity-75"
          >
            Blog
          </Link>
          <span className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg">
            {">"}
          </span>
          <span className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg">
            Poster
          </span>
          <span className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg">
            {">"}
          </span>
          <span className="font-bold text-black dark:text-white text-sm md:text-lg">
            {url.uid}
          </span>
        </div>
        {children}
        <SubirBotao />
      </main>
    </>
  );
}
