import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function VoltarBotao({ voltar_endereco, texto }) {
  return (
    <Link href={voltar_endereco}>
      <button className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg flex items-center gap-2 ">
        <FaArrowAltCircleLeft className="text-2xl text-colors-destaque duration-200 hover:opacity-50" />
        {texto}
      </button>
    </Link>
  );
}
