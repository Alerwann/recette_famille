"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import FormulaireMdp from "./formulaireMdp";

export default function VerifAcces({ children }) {
  const [autorise, setAutorise] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const MDPENTRE = process.env.NEXT_PUBLIC_MDPENTRE;

  useEffect(() => {
    const codeUrl = searchParams.get("pass");
    const codeStocke = localStorage.getItem("site_access");

    if (codeUrl === MDPENTRE || codeStocke === MDPENTRE) {
      console.log("acces autorisé");
      setAutorise(true);
      localStorage.setItem("site_access", MDPENTRE);
      if (codeUrl) {
        router.replace(pathname);
      }
    }
  }, [searchParams]);

  if (!autorise) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Accès réservé</h1>
        <p>Veuillez saisir le mot de passe.</p>
        <FormulaireMdp onSucces={() => setAutorise(true)} />
      </div>
    );
  }

  // Si autorisé, on affiche le contenu du site
  return <>{children}</>;
}
