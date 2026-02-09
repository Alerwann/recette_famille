import Navigation from "../nav.js";
import "./header.css"

export default function Header() {
  return (
    <header className=" flex flex-col gap-10 justify-center items-center">
      <div className="p-5 w-full text-2xl md:text-3xl lg:text-4xl font-[fantasy] font-medium  leading-20">
        <h1 className="text-left">Les recettes du bonheur</h1>
        <p className="text-right">À utiliser sans modérations ...</p>
      </div>

      <Navigation />
    </header>
  );
}
