"use client";
const { usePathname } = require("next/navigation");

const paginaAtual = usePathname();

export default function VerificadorRota() {
  {
    paginaAtual == "Projetos" || paginaAtual == "Galeria" ? "" : children;
  }
}
