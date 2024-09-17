import Link from "next/link";
import { asText } from "@prismicio/client";
import { FaReact, FaRegFolder as Pasta } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiRadixui,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PrismicRichText } from "@prismicio/react";
const iconMap = {
  React: <FaReact />,
  Tailiwind: <SiTailwindcss />,
  Vite: <SiVite />,
  Radix: <SiRadixui />,
  Nextjs: <SiNextdotjs />,
  Prisma: <SiPrisma />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  MongoDB: <SiMongodb />,
  Nodejs: <SiNodedotjs />,
  Postgresql: <BiLogoPostgresql />,
  Figma: <SiFigma />,
};
export function ProjetosItem({ projetos }) {
  return (
    <Link href={asText(projetos.data.linksite)} target="_blank" className="">
      <div className="flex flex-col gap-2 p-4 bg-colors-background rounded-lg cursor-pointer">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-colors-textoPrincipal text-xl transition-opacity duration-200 dark:text-white hover:opacity-70">
              {/*  {asText(projetos.data.titulo)} */}
              <PrismicRichText field={projetos.data.titulo} />
            </h3>
            <Pasta className="text-colors-paragrafo text-lg" />
          </div>
          <h2 className="text-colors-paragrafo text-lg">
            {asText(projetos.data.subtitulo)}
          </h2>
          <div className="bg-colors-background2 rounded-lg p-4">
            <p className="text-colors-paragrafo text-md">
              {asText(projetos.data.descriaoprojeto)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-4 gap-4">
          {projetos.data.tecnologias.map((item, index) => (
            <ul key={index} className={`rounded-lg bg-black p-2`}>
              <li className="text-sm text-colors-paragrafo flex gap-2 items-center ">
                {iconMap[item.tecnologiasnome]}
                {item.tecnologiasnome}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </Link>
  );
}
