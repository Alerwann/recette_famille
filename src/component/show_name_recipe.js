import recipes from "../data/recipes_structured.json";
import Link from "next/link";

export default function ShowNameRecipe(typeRecipe) {
  return (
    <div className="flex flex-col">
      {recipes
        .filter((item) => item.type == "dessert")
        .map((item, index) => (
          <li key={index}>
            <Link href="/">{item.titre}</Link>
          </li>
        ))}
    </div>
  );
}
