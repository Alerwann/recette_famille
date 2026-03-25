import recipes from '../../data/recipes_structured.json';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowNameRecipe({ typeRecipe }) {
  console.log(typeRecipe);

  return (
    <div className="m-5 min-w-full grid grid-cols-1 md:grid-cols-3 gap-5  ">
      {recipes
        .filter((item) => item.type == typeRecipe)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 border-2 border-black rounded-lg group hover:shadow-[0px_0px_10px_10px_rgba(245,200,40,0.75)]"
          >
            <div className="flex-1 p-3 group-hover:bg-amber-200 h-full  content-center ">
              <Link className="  text-center " href="/">
                {item.titre}
              </Link>
            </div>

            <Image
              className="flex-1 object-cover"
              src={item.image ? item.image : '/fond_dessert.jpg'}
              alt={item.titre}
              width={60}
              height={40}
              unoptimized
            />
          </div>
        ))}
    </div>
  );
}
