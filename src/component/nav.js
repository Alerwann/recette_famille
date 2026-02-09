import Link from "next/link";

const navLinkStyle = "p-5 rounded-[50%] bg-[#F1DA07] hover:shadow-[-5px_5px_10px_black]  transition-all duration-200 ";
const homeLink = `${navLinkStyle} bg-[#F1F107]`;



export default function Navigation() {
  return (
    <nav className="w-full mt-10 py-10 bg-[#FDD5A4]">
      <ul  className="flex flex-row justify-evenly list-none">
        <li >
          <Link href="/" className={homeLink} >
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/aperitif" className={navLinkStyle} >
            Apéritif
          </Link>
        </li>
        <li>
          <Link href="/entree" className={navLinkStyle} >
            Entrées
          </Link>
        </li>
        <li>
          <Link href="/poisson" className={navLinkStyle}>
            Poissons
          </Link>
        </li>
        <li>
          <Link href="/viande" className={navLinkStyle}>
            Viandes
          </Link>
        </li>
        <li>
          <Link href="/dessert" className={navLinkStyle}>
            Dessert
          </Link>
        </li>
        <li>
          <Link href="/mignardise" className={navLinkStyle}>
            Mignardises
          </Link>
        </li>
      </ul>
    </nav>
  );
}
