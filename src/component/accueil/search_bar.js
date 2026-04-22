'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecipeFilter from '../../utils/filterRecipe'

export default function SearchBar() {
  const [saisie, setSaisie] = useState('');
  const [recipeFilter, setRecipeFilter] = useState([]);

  const [messageToShow, setMessageTosShow] = useState('none');

  const router = useRouter();

  const handleNavigation = (recipeType) => {
    router.push(`/recette?nameRecipein=${recipeType}`);
  };

  const searchRecipe = (e) => {
    const eValue = e.target.value.toLowerCase();
    setSaisie(eValue);
    var arrayRecipe = RecipeFilter(eValue,6);

    if (eValue.length > 2) {
      if (arrayRecipe.length <= 0) {
        console.log('pas de recette');
        setMessageTosShow('link');
      } else {
        setRecipeFilter(arrayRecipe);
        setMessageTosShow('list');
      }
    } else {
      setMessageTosShow('none');
    }
  };



  return (
    <div className="m-2 p-2 bg-fuchsia-100 w-full flex flex-col items-center gap-2">
      <p className="text-center text-2xl">Une recette à chercher ?</p>
      <form className="m-1  items-center  flex flex-row gap-1 ">
        <div className="flex flex-col md:flex-row items-center">
          <label id="titre" className="text-center ">
            Nom de la recette (3 lettres minimum) :
          </label>

          <input
            type="text"
            name="titre"
            id="titre"
            value={saisie}
            onChange={(e) => searchRecipe(e)}
            className="m-1 p-2 border-2 border-black rounded-xl"
          />
        </div>
      </form>
      {messageToShow === 'link' && (
        <a
          href="https://forms.gle/6QdLAaobh4LR3gyt7"
          className="underline decoration-solid text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien pour suggérer une recette
        </a>
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center content-evenly">
        {messageToShow === 'list' &&
          recipeFilter.map((item, index) => (
            <div
              key={index}
              className=" flex w-full rounded-lg group gap-3 hover:shadow-[0px_0px_10px_10px_rgba(245,200,40,0.75)] hover:bg-amber-50"
              onClick={() => handleNavigation(item.titre)}
            >
              <span className=" p-5 text-center  ">{item.titre}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
