import Navigation from './nav.js';

export default function Header() {
  return (
    <header className=" flex flex-col justify-center items-center bg-[#FFEDD4] ">
      <div className="my-5 p-5 w-full md:w-80/100 
      text-2xl md:text-3xl lg:text-4xl
      font-[fantasy] font-medium  leading-20
      hover:text-shadow-[2px_2px_3px_red]">
        <h1 className="text-left  ">
          Les recettes du bonheur
        </h1>
        <p className="text-right ">
          À utiliser sans modérations ...
        </p>
      </div>

      <Navigation />
    </header>
  );
}
