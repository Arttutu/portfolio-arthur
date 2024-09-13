import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="text-2xl text-colors-titulo font-bold hover:text-white transition-all">{`<ArthurGomes.dev/>`}</span>
    </Link>
  );
}
