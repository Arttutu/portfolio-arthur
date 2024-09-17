import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-colors-background2 rounded-l-none rounded-r-xl md:rounded-xl flex justify-center w-[400px] p-2  border-colors-textoPrincipal">
      <ul className="flex gap-8">
        <LinkMenu texto="Sobre mim" endereco="/" />
        <LinkMenu texto="Projetos" endereco="/Projetos" />
        <LinkMenu texto="Blog" endereco="/Blog" />
        <LinkMenu texto="Galeria" endereco="/Blog" />
      </ul>
    </nav>
  );
}

export function LinkMenu({ texto, endereco }) {
  return (
    <li>
      <Link href={endereco} className="text-colors-textoPrincipal">
        {texto}
      </Link>
    </li>
  );
}
