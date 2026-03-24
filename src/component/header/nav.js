import Link from "next/link";

const navLinkStyle = "p-5 rounded-[50%] bg-[#F1DA07] hover:shadow-[-5px_5px_10px_black]  transition-all duration-200 ";
const homeLink = `${navLinkStyle} bg-[#F1F107]`;



export default function Navigation() {
  return (
    <nav className="w-full mt-10 py-10 bg-[#FDD5A4]">
      <ul className="flex flex-row justify-evenly list-none">
        <li>
          <Link href="/" className={homeLink}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "aperitif" },
            }}
            className={navLinkStyle}
          >
            Apéritifs
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "entree" },
            }}
            className={navLinkStyle}
          >
            Entrées
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "poisson" },
            }}
            className={navLinkStyle}
          >
            Poissons
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "plat" },
            }}
            className={navLinkStyle}
          >
            Plats
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "dessert" },
            }}
            className={navLinkStyle}
          >
            Desserts
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/liste_recettes",
              query: { typeRecipein: "mignardise" },
            }}
            className={navLinkStyle}
          >
            Mignardises
          </Link>
        </li>
      </ul>
    </nav>
  );
}
