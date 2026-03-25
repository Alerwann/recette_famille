import recipes from '../../data/recipes_structured.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ShowNameRecipe({ typeRecipe }) {
  const router = useRouter();

  const handleNavigation = (recipeType) => {

    router.push(`/recette?nameRecipein=${recipeType}`);
  };
  return (
    <div className="m-15 min-w-80 grid grid-cols-1 md:grid-cols-3 gap-5  ">
      {recipes
        .filter((item) => item.type == typeRecipe)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 border-2 border-black rounded-lg group hover:shadow-[0px_0px_10px_10px_rgba(245,200,40,0.75)]"
            onClick={() => handleNavigation(item.titre)}
          >
            <div className="flex-1 p-3 group-hover:bg-amber-200 h-full  content-center ">
              <span className="  text-center ">{item.titre}</span>
            </div>

            <Image
              className="flex-1 object-cover"
              src={item.image ? item.image : '/fond_dessert.jpg'}
              alt={item.titre}
              width={40}
              height={20}
              unoptimized
            />
          </div>
        ))}
    </div>
  );
}
