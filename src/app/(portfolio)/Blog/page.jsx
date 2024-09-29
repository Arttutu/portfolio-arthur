import BlogItem from "@/app/Componentes/BlogItem";
import Titles from "@/app/Componentes/Titles";
import { createClient } from "@/prismicio";
import React from "react";

export default async function Blog() {
  const prismicClient = createClient();
  const Blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e);
  });

  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2  mt-4 mb-4 p-4 rounded-none md:rounded-lg">
      <Titles title={"Meu Blog"} />
      <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
        Blog onde vou escrever sobre tutoriais e dicas de programação.
      </p>
      <div className="flex flex-col gap-8 ">
        {Blog.length > 0 ? (
          Blog.map((blogItem) => <BlogItem key={blogItem.id} blog={blogItem} />)
        ) : (
          <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2 mt-8">
            Nenhum blog encontrado.
          </p>
        )}
      </div>
    </section>
  );
}
