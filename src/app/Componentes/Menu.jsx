import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-colors-background2 rounded-xl w-[300px] p-4 border border-white">
      <ul className="flex gap-8">
        <LinkMenu texto="Sobre mim" endereco="/" />
        <LinkMenu texto="Projetos" endereco="/Projetos" />
        <LinkMenu texto="Blog" endereco="/Blog" />
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
