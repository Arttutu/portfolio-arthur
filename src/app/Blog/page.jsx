import { createClient } from "@prismicio/client";
import React from "react";
import Titles from "../Componentes/Titles";
import BlogItem from "../Componentes/BlogItem";

export default async function Blog() {
  const prismicClient = createClient();
  const blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e);
    return [];
  });
  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2  mt-4 mb-4 p-4  rounded-lg">
      <Titles title={"Meu Blog"} />
      <div className="flex flex-col gap-8 ">
        {blog.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
