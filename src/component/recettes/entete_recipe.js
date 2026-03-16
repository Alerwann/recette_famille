export default function RecipeHeader() {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-[#100202]">
      <h2 className="text-white">Ici il y aura les cases suivantes</h2>
      <ul>
        <li className="flex flex-line gap-1 text-amber-50">
          <div>nombre de personnes</div>
          <div>temps de préparations</div>
        </li>
        <li className="flex flex-line gap-10  text-amber-50">
          <div>temps de repos avec alerte si à faire la veille</div>
          <div>temps de cuissons</div>
        </li>
      </ul>
    </div>
  );
}
