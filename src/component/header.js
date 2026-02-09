import Navigation from "./nav.js";

export default function Header() {
  return (
    <header className=" flex flex-col gap-10 justify-center items-center bg-[#FFEDD4]">
      <div className="my-10 p-5 w-full text-2xl md:text-3xl lg:text-4xl font-[fantasy] font-medium  leading-20 ">
        <h1 className="text-left hover:text-shadow-[2px_2px_3px_red] ">Les recettes du bonheur</h1>
        <p className="text-right hover:text-shadow-[2px_2px_3px_red]">À utiliser sans modérations ...</p>
      </div>

      <Navigation />
    </header>
  );
}
