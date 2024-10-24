"use client"
import BlogItem from "@/app/Componentes/BlogItem"
import Titles from "@/app/Componentes/Titles"
import { createClient } from "@/prismicio"

export default async function Blog() {
  const prismicClient = createClient()
  const Blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e)
  })

  return (
    <section className="bg-colors-background2 p-4 mt-4">
      {Blog?.length > 0 && (
        <>
          <div className="p-4">
            <Titles title={"Meu Bloge"} />
            <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
              Meu bloge com dicas de tecnologias e um pouco sobre minhas
              trajetórias
            </p>
          </div>
          <div className="flex justify-end p-4 gap-2">
            <span className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
              {Blog.length}/{Blog.length} postagem(s)
            </span>
          </div>
        </>
      )}
      {Blog?.map((blogItem) => (
        <BlogItem key={blogItem.id} blog={blogItem} />
      ))}
    </section>
  )
}
