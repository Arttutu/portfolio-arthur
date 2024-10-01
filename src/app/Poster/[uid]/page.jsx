import Indice from "@/app/Componentes/Indice";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import VoltarBotao from "@/app/Componentes/VoltarBotao";

export default async function Poster({ params }) {
  const prismicClient = createClient();
  const post = await prismicClient
    .getByUID("blog", params.uid)
    .catch(() => redirect("/not_found"));

  return (
    <div className="container flex gap-4">
      <div className="w-full md:w-3/4 rounded-none md:rounded-lg dark:bg-colors-background2 bg-colors-backgroundClar2 p-4 flex flex-col gap-4">
        <h1 className=" text-2xl text-colors-destaque">
          {asText(post.data.title)}
        </h1>
        {post.data.conteudo.map((item, index) => (
          <div
            key={index}
            id={`${asText(item.title)}`}
            className="flex flex-col gap-4 mt-8"
          >
            <h1 className="text-xl font-bold dark:text-colors-paragrafo text-colors-paragrafo2">
              {asText(item.title)}
            </h1>
            <h2>{asText(item.subtitile)}</h2>

            <p className="text-md dark:text-colors-paragrafo text-colors-paragrafo2">
              {asText(item.conteudo)}
            </p>
            <PrismicImage
              className="w-full mx-auto mt-4 md:w-1/2 h-auto rounded-lg object-cover"
              field={item.imagens}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:block w-1/4">
        <div className="sticky top-2 flex flex-col gap-4">
          <Indice post={post} />
          <div
            className="bg-colors-backgroundClar2 dark:bg-colors-background2 w-[150px] rounded-lg 
          text-colors-paragrafo p-2 dark:text-colors-paragrafo2"
          >
            <VoltarBotao voltar_endereco="/" texto="Anterior" />
          </div>
        </div>
      </div>
    </div>
  );
}
