"use client";
import { usePathname } from "next/navigation";
import LinkMenu from "../LinkMenu";

export default function Menu() {
  const paginaAtual = usePathname();

  return (
    <nav className="bg-colors-backgroundClar2 dark:bg-colors-background2 px-4  rounded-l-none rounded-r-xl md:rounded-xl flex justify-left  p-2  border-colors-textoPrincipal">
      <ul className="flex items-center p-0 md:p-1 justify-start gap-8">
        <LinkMenu texto="Sobre" endereco="/" paginaAtual={paginaAtual} />
        <LinkMenu
          texto="Projetos"
          endereco="/Projetos"
          paginaAtual={paginaAtual}
        />
        <LinkMenu
          texto="Blog
        "
          endereco="/Blog"
          paginaAtual={paginaAtual}
        />
      </ul>
    </nav>
  );
}
