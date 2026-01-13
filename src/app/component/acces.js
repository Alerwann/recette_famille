"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MDPENTRE from "../cle";
import FormulaireMdp from "./formulaireMdp";

export default function VerifAcces({ children }) {
  const [autorise, setAutorise] = useState(false);
  const searchParams = useSearchParams();



  useEffect(() => {
    const codeUrl = searchParams.get("pass");
    const codeStocke = localStorage.getItem("site_access");

      if (codeUrl === MDPENTRE || codeStocke === MDPENTRE) {
          console.log("acces autorisé");
      setAutorise(true);
      localStorage.setItem("site_access", MDPENTRE);
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
