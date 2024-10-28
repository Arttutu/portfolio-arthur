"use client"
import Link from "next/link"
import { asText } from "@prismicio/client"
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
  SiPrismic,
} from "react-icons/si"
import { FaReact, FaExternalLinkAlt as Ancora } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import { motion } from "framer-motion" // Importando Framer Motion

const iconMap = {
  React: (
    <span style={{ backgroundColor: "#61DAFB" }} className="p-2 rounded-full">
      <FaReact className="text-black" /> {/* Ícone em branco para contraste */}
    </span>
  ),
  Tailiwind: (
    <span style={{ backgroundColor: "#38BDF8" }} className="p-2 rounded-full">
      <SiTailwindcss className="text-white" />
    </span>
  ),
  Vite: (
    <span style={{ backgroundColor: "#646CFF" }} className="p-2 rounded-full">
      <SiVite className="text-white" />
    </span>
  ),
  Radix: (
    <span style={{ backgroundColor: "#C4A5FA" }} className="p-2 rounded-full">
      <SiRadixui className="text-white" />
    </span>
  ),
  Nextjs: (
    <span style={{ backgroundColor: "#000000" }} className="p-2 rounded-full">
      <SiNextdotjs className="text-white" />
    </span>
  ),
  Prisma: (
    <span style={{ backgroundColor: "#2D3748" }} className="p-2 rounded-full">
      <SiPrisma className="text-white" />
    </span>
  ),
  Prismic: (
    <span style={{ backgroundColor: "#5163BA" }} className="p-2 rounded-full">
      <SiPrismic className="text-white" />
    </span>
  ),
  TypeScript: (
    <span style={{ backgroundColor: "#3178C6" }} className="p-2 rounded-full">
      <SiTypescript className="text-white" />
    </span>
  ),
  JavaScript: (
    <span style={{ backgroundColor: "#F7DF1E" }} className="p-2 rounded-full">
      <SiJavascript className="text-black" />{" "}
    </span>
  ),
  MongoDB: (
    <span style={{ backgroundColor: "#47A248" }} className="p-2 rounded-full">
      <SiMongodb className="text-white" />
    </span>
  ),
  Nodejs: (
    <span style={{ backgroundColor: "#339933" }} className="p-2 rounded-full">
      <SiNodedotjs className="text-white" />
    </span>
  ),
  Postgresql: (
    <span style={{ backgroundColor: "#336791" }} className="p-2 rounded-full">
      <BiLogoPostgresql className="text-black" />
    </span>
  ),
  Figma: (
    <span style={{ backgroundColor: "#F24E1E" }} className="p-2 rounded-full">
      <SiFigma className="text-white" />
    </span>
  ),
}

export function ProjetosItem({ projetos }) {
  return (
    <Link href={asText(projetos.data.linksite)} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col gap-2 p-4 w-full bg-colors-backgroundClaro dark:bg-colors-background rounded-none md:rounded-lg cursor-pointer"
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="dark:text-colors-textoPrincipal font-bold text-xl transition-opacity duration-200 text-colors-destaque hover:opacity-70 flex items-center gap-2">
              <PrismicRichText field={projetos.data.titulo} />
            </h3>
            <Ancora className="dark:text-colors-paragrafo text-colors-paragrafo2 text-lg" />
          </div>
          <h2 className="text-colors-paragrafo2 font-semibold dark:text-colors-paragrafo text-lg">
            {asText(projetos.data.subtitulo)}
          </h2>
          <div className="bg-colors-backgroundClar2 dark:bg-colors-background2 rounded-lg flex flex-col items-center gap-4 p-4">
            <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-md text-left">
              {asText(projetos.data.descriaoprojeto)}
            </p>
            <PrismicImage
              className="h-auto w-full rounded-b-lg md:w-[600px] md:h-[300px] object-cover md:rounded-lg"
              field={projetos.data.imagemprojeto}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-4 gap-4">
          {projetos.data.tecnologias.map((item, index) => (
            <ul key={index} className="rounded-lg bg-colors-background2 p-2">
              <li className="text-sm text-colors-paragrafo flex gap-2 items-center">
                {iconMap[item.tecnologiasnome]}
                {item.tecnologiasnome}
              </li>
            </ul>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}
