'use client';
import { useSearchParams } from 'next/navigation';
import recipes from '../../data/recipes_structured.json';

export default function affiche_recipe() {
  const recipein = useSearchParams().get('nameRecipein');

  const recette = recipes.find((obj) => String(obj.titre) === String(recipein));
  if (!recette) return <p>Recette non trouvée</p>;
  return (
    <div className="flex flex-col items-center  m-10">
      <div className="text-3xl text-center bg-amber-100 p-5 rounded-xl m-5 ">
        {recette.titre}
      </div>
      <div>Pour : {recette.portion}</div>
      <br />
      {recette.ingredients.map((ing, index) => (
        <div key={index}>
          {ing.quantité} {ing.unité} {ing.ingrédient}
        </div>
      ))}
      <br />
      <ol className="list-decimal pl-5 space-y-2">
        {recette.instructions.map((etape, index) => (
          <li key={index} className="leading-relaxed">
            {etape}
          </li>
        ))}
      </ol>
    </div>
  );
}
