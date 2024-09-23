import Link from "next/link";

export default function LinkMenu({ texto, endereco, paginaAtual }) {
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