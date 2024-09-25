import React from "react";
import Logo from "../Componentes/Logo";

export default function LayoutPost({ children }) {
  return (
    <main className="bg-white  container mx-auto">
      <Logo />
      {children}
    </main>
  );
}
