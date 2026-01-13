import Image from "next/image";
import fondMain from "../../../public/assets/fond_dessert.jpg";

export default function Home() {
  return (
    <main className="accueilMain">
      <Image src={fondMain} alt="" fill priority className="fondPageAcueil" />
      <div className="bienvenuetitle">
        <h2>Bienvenu dans mon site de recettes</h2>
      </div>
      <div className="bienvenuMessage">
        <p>Le privilège d'accéder à mes recettes t'a été accordé</p>
        <p>
          Tu as accès à toutes mes recettes mais je ne souhaite pas ce que ce
          site soit partagé.
        </p>
        <p>
          Merci de respecter cela et de ne pas communiquer le qr code à n'importe
          qui.
        </p>
      </div>
    </main>
  );
}
