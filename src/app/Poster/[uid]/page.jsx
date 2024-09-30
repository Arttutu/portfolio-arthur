import Indice from "@/app/Componentes/Indice";
import { createClient } from "@/prismicio";

import { asText } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { notFound } from "next/navigation";
export default async function Poster({ params }) {
  const prismicClient = createClient();
  const post = await prismicClient
    .getByUID("blog", params.uid)
    .catch(() => notFound());
  return (
    <div className="container flex gap-4">
      <div className="rounded-none md:rounded-lg dark:bg-colors-background2 bg-colors-backgroundClar2 p-4 flex flex-col gap-4">
        <h1 className=" text-2xl text-colors-destaque">
          {asText(post.data.title)}
        </h1>
        {post.data.conteudo.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 mt-8">
            <h1
              id={`#${asText(item.title)}`}
              className="text-xl font-bold dark:text-colors-paragrafo text-colors-paragrafo2 "
            >
              {asText(item.title)}
            </h1>
            <h2> {asText(item.subtitile)}</h2>

            <p className="text-md dark:text-colors-paragrafo text-colors-paragrafo2">
              {asText(item.conteudo)}
            </p>
            <PrismicImage
              className=" w-full mx-auto mt-4 md:w-1/2 h-auto rounded-lg object-cover"
              field={item.imagens}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <Indice post={post} />
      </div>
    </div>
  );
}
