"use client";
import { useState } from "react";
import MDPENTRE from "../cle";

export default function FormulaireMdp({ onSucces }) {
  const [saisie, setSaisie] = useState("");
  const [erreur, setErreur] = useState(false);

  const verifierMdp = (e) => {
    e.preventDefault(); 
    if (saisie === MDPENTRE) {
      localStorage.setItem("site_access", MDPENTRE);
      onSucces();
    } else {
      setErreur(true);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={verifierMdp}>
        <input
          type="password"
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          placeholder="Mot de passe"
        />
        <button type="submit">Entrer</button>
      </form>
      {erreur && <p style={{ color: "red" }}>Code incorrect</p>}
    </div>
  );
}
