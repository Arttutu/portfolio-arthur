"use client";
import Link from "next/link";
import { asText } from "@prismicio/client";
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
import { FaReact, FaRegFolder as Pasta } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion"; // Importando Framer Motion

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
    <Link href={asText(projetos.data.linksite)} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }} // Escalando o card levemente ao hover
        whileTap={{ scale: 0.95 }} // Pequena animação ao clicar
        transition={{ type: "spring", stiffness: 300 }} // Transição suave
        className="flex flex-col gap-2 p-4 w-full bg-colors-backgroundClaro dark:bg-colors-background rounded-lg cursor-pointer"
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="dark:text-colors-textoPrincipal text-xl transition-opacity duration-200 text-colors-destaque hover:opacity-70">
              <PrismicRichText field={projetos.data.titulo} />
            </h3>
            <Pasta className="text-colors-destaque text-lg" />
          </div>
          <h2 className="text-colors-paragrafo2 dark:text-colors-paragrafo text-lg">
            {asText(projetos.data.subtitulo)}
          </h2>
          <div className="bg-colors-backgroundClar2 dark:bg-colors-background2 rounded-lg p-4">
            <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-md">
              {asText(projetos.data.descriaoprojeto)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-4 gap-4">
          {projetos.data.tecnologias.map((item, index) => (
            <ul key={index} className="rounded-lg bg-black p-2">
              <li className="text-sm text-colors-paragrafo flex gap-2 items-center">
                {iconMap[item.tecnologiasnome]}
                {item.tecnologiasnome}
              </li>
            </ul>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
