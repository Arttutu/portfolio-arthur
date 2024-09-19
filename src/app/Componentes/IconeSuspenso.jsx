"use client";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function IconeSuspenso() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.1) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    handleScroll(); // Para verificar o scroll ao carregar a página
    window.addEventListener("scroll", handleScroll); // Verificar rolagem

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpar listener
    };
  }, []);

  if (!showIcon) return null;

  return (
    <ScrollLink smooth={true} duration={500} to="logo">
      <div
        className="flex justify-center fixed bottom-0 left-1/2 transform -translate-x-1/2 
    md:left-auto md:right-4 md:translate-x-0 md:w-12
    bg-colors-backgroundClar2 dark:bg-colors-background2 p-2 rounded-lg rounded-b-none md:rounded-lg 
    cursor-pointer transition-all"
      >
        <IoIosArrowDropup className="text-colors-destaque text-4xl" />
      </div>
    </ScrollLink>
  );
}
