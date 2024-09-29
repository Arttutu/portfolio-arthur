import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-scroll";

export default function VoltarBotao({ voltar_endereco }) {
  return (
    <Link href={voltar_endereco}>
      <button className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-lg flex items-center gap-2 ">
        <FaArrowAltCircleLeft className="text-2xl text-colors-destaque duration-200 hover:opacity-50" />
        Voltar
      </button>
    </Link>
  );
}
