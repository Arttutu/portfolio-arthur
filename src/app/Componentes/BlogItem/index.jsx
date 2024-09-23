import { PrismicRichText } from "@prismicio/react";
import React from "react";

export default function BlogItem({ blog }) {
  console.log(blog);
  return (
    <>
      <PrismicRichText field={blog.data.title} />
    </>
  );
}
