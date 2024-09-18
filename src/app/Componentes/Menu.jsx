"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const paginaAtual = usePathname();
  console.log(paginaAtual);
  return (
    <nav className="bg-colors-backgroundClar2 dark:bg-colors-background2 rounded-l-none rounded-r-xl md:rounded-xl flex justify-left  p-2  border-colors-textoPrincipal">
      <ul className="flex items-center justify-start gap-8">
        <LinkMenu texto="Sobre mim" endereco="/" paginaAtual={paginaAtual} />
        <LinkMenu
          texto="Projetos"
          endereco="/Projetos"
          paginaAtual={paginaAtual}
        />
        <LinkMenu texto="Blog" endereco="/Blog" paginaAtual={paginaAtual} />
      </ul>
    </nav>
  );
}

export function LinkMenu({ texto, endereco, paginaAtual }) {
  return (
    <li>
      <Link
        href={endereco}
        className={` text-colors-paragrafo2 dark:text-colors-textoPrincipal ${paginaAtual == endereco ? "bg-colors-destaque text-colors-textoPrincipal p-2 rounded-lg" : ""}`}
      >
        {texto}
      </Link>
    </li>
  );
}
