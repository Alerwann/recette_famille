import recipes from '../../data/recipes_structured.json';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowNameRecipe({ typeRecipe }) {
  console.log(typeRecipe);

  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {recipes
        .filter((item) => item.type == typeRecipe)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 justify-items-center items-center text-center border-2 border-black rounded-lg hover:bg-amber-200"
          >
            <Link className="flex-1 p-3" href="/">
              {item.titre}
            </Link>
            <Image
              className="flex-1"
              src={item.image ? item.image : '/fond_dessert.jpg'}
              alt={item.titre}
              width={50}
              height={50}
            />
          </div>
        ))}
    </div>
  );
}
