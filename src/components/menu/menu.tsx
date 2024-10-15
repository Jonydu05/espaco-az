import Link from "next/link";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">Início</Link>
      </li>
      <li>
        <Link href="/about-me">Sobre mim</Link>
      </li>
      <li>
        <Link href="/contact">Contato</Link>
      </li>
      <li>
        <Link href="/photos">Fotos</Link>
      </li>
      <li>
        <Link href="/terms">Termos</Link>
      </li>
    </ul>
  );
}
