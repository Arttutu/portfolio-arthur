import { asText } from "@prismicio/client";
import Link from "next/link";
import { FaBook } from "react-icons/fa";

export default function Indice({ post }) {
  return (
    <div className="w-96 dark:bg-colors-background2 bg-colors-backgroundClar2 rounded-lg p-4">
      <h1 className="flex gap-2 items-center text-xl font-bold dark:text-colors-paragrafo text-colors-paragrafo2 ">
        <FaBook className=" text-colors-destaque" />
        Índice
      </h1>
      <div></div>
      <ul className="p-4 flex flex-col gap-4">
        {post.data.conteudo.map((item, index) => (
          <Link
            scroll
            key={index}
            href={`#${item.title}`}
            className=" list-disc text-md dark:text-colors-paragrafo text-colors-paragrafo2"
          >
            <li>{asText(item.title)}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
