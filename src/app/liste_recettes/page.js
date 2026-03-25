"use client";

import ShowNameRecipe from "../../component/recettes/show_name_recipe";
import { useSearchParams } from "next/navigation";


export default function ListeRecette() {
  const typeRecipein = useSearchParams().get("typeRecipein");

  return (
    <main className="w-full flex flex-col justify-around items-center h-vh gap-15">
      <div className="mt-2 text-3xl">
        <h1 >Liste des recettes</h1>
      </div>
      <div className="w-full">
        <ShowNameRecipe typeRecipe={typeRecipein} />
      </div>
    </main>
  );
}
