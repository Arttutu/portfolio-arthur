import Indice from "@/app/Componentes/Indice"
import { createClient } from "@/prismicio"
import { asText } from "@prismicio/client"
import { PrismicImage } from "@prismicio/react"

export default async function Poster({ params }) {
  const prismicClient = createClient()
  const post = await prismicClient
    .getByUID("blog", params.uid)
    .catch(() => redirect("/not_found"))

  return (
    <div className="container flex gap-4">
      <div className="w-full md:w-3/4 rounded-none sm:rounded-lg dark:bg-colors-background2 bg-colors-backgroundClar2 flex flex-col gap-4 pb-8">
        <h1 className="text-2xl text-left text-colors-destaque uppercase underline p-4">
          {asText(post.data.title)}
        </h1>
        {post.data.conteudo.map((item, index) => (
          <div
            key={index}
            id={`${asText(item.title)}`}
            className="flex flex-col"
          >
            {asText(item.title) && (
              <h1 className="text-xl font-bold my-4 dark:text-colors-paragrafo text-colors-paragrafo2 px-4 py-2">
                {asText(item.title)}
              </h1>
            )}
            <h2 className="text-lg p-4 dark:text-colors-paragrafo text-colors-paragrafo2 px-4 py-2">
              {asText(item.subtitile)}
            </h2>
            {asText(item.conteudo) && (
              <p className="text-md dark:text-colors-paragrafo text-colors-paragrafo2 p-4">
                {asText(item.conteudo)}
              </p>
            )}
            <PrismicImage
              className="w-full mx-auto mt-4 md:w-full h-auto object-cover"
              field={item.imagens}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:block w-auto">
        <div className="sticky top-2 flex flex-col gap-4">
          <Indice post={post} />
        </div>
      </div>
    </div>
  )
}
