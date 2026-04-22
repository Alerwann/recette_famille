import recipes from '../data/recipes_structured.json'

export default function RecipeFilter(eValue, nbCase) {
  var newArray = [];
  if (eValue.length > 2) {
    newArray = recipes.filter((item) =>
      item.titre.toLowerCase().includes(eValue),
    );
  }
  return newArray.slice(0, nbCase);
}
