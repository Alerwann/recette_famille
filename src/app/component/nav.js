import Link from "next/link";
import "./header.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/accueil" className="navLink accueil">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/aperitif" className="navLink">
            Apéritif
          </Link>
        </li>
        <li>
          <Link href="/entree" className="navLink">
            Entrées
          </Link>
        </li>
        <li>
          <Link href="/poisson" className="navLink">
            Poissons
          </Link>
        </li>
        <li>
          <Link href="/viande" className="navLink">
            Viandes
          </Link>
        </li>
        <li>
          <Link href="/dessert" className="navLink">
            Dessert
          </Link>
        </li>
        <li>
          <Link href="/mignardise" className="navLink">
            Mignardises
          </Link>
        </li>
      </ul>
    </nav>
  );
}
