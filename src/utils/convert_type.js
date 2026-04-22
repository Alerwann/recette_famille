export default function convertType(recipeType) {
    switch (recipeType) {
        case "aperitif": return "Apréritifs";
        case "entree": return "Entrées";
        case "poisson": return "Poissons";
        case "plat": return "Plats";
        case "dessert": return "Desserts";
        case "mignardise": return "Mignardises";
        default: return "Accueil";
    }
}

