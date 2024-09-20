"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const paginaAtual = usePathname();

  return (
    <nav className="bg-colors-backgroundClar2 dark:bg-colors-background2  w-[320px]  md:w-[380px] rounded-l-none rounded-r-xl md:rounded-xl flex justify-left  p-2  border-colors-textoPrincipal">
      <ul className="flex items-center p-0 md:p-1 justify-start gap-8">
        <LinkMenu texto="Sobre mim" endereco="/" paginaAtual={paginaAtual} />
        <LinkMenu
          texto="Projetos"
          endereco="/Projetos"
          paginaAtual={paginaAtual}
        />
        <LinkMenu
          texto="Galeria
        "
          endereco="/Galeria"
          paginaAtual={paginaAtual}
        />
      </ul>
    </nav>
  );
}

export function LinkMenu({ texto, endereco, paginaAtual }) {
  return (
    <li>
      <Link
        href={endereco}
        className={` text-sm md:text-lg text-colors-paragrafo2  dark:text-colors-textoPrincipal 
          hover:bg-colors-hover hover:p-2 hover:rounded-none hover:md:rounded-lg 
          hover:text-colors-textoPrincipal 
          ${paginaAtual == endereco ? "bg-colors-destaque text-colors-textoPrincipal p-2  rounded-none md:rounded-lg" : ""}`}
      >
        {texto}
      </Link>
    </li>
  );
}
