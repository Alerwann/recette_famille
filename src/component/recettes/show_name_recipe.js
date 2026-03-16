import recipes from "../../data/recipes_structured.json";
import Link from "next/link";

export default function ShowNameRecipe({ typeRecipe }) {
  console.log(typeRecipe);
  return (
    <div className="flex flex-col">
      {recipes
        .filter((item) => item.type == typeRecipe)
        .map((item, index) => (
          <li key={index} className="list-none">
            <Link href="/">{item.titre}</Link>
          </li>
        ))}
    </div>
  );
}
