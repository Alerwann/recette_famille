/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import fondMain from "../../public/fond_dessert.jpg";
export default function Home() {
  return (
    <div className="h-lvh">
      <Image
        src={fondMain}
        alt="Photography of dessert"
        className="h-svh -z-1  opacity-5 absolute "
      />
      <div className="h-4/5 px-10 md:px-0 flex flex-col items-center justify-center gap-4  ">
   
        <div className="text-center font-bold italic text-3xl md:text-4xl lg:text-5xl">
          <h2>Bienvenue dans mon site de recettes</h2>
        </div>
        <div className="text-center text-xl md:text-2xl lg:text-3xl italic leading-15 ">
          <p>Le privilège d'accéder à mes recettes t'a été accordé</p>
          <p>
            Tu as accès à toutes mes recettes mais je ne souhaite pas ce que ce
            site soit partagé.
          </p>
          <p>
            Merci de respecter cela et de ne pas communiquer le qr code à
            n'importe qui.
          </p>
        </div>
      </div>
    </div>
  );
}
