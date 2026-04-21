export default function Footer() {
  return (
    <footer className="p-10 flex flex-col md:flex-row bg-amber-700 place-content-evenly text-xl ">
      <div>©️ Marie Guehl - avril 2026</div>
      <div>
        <a
          href="https://forms.gle/LTX8NzZpALBSG7uUA"
          className="underline decoration-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Une erreur ? Envoie moi un formulaire
        </a>
      </div>
    </footer>
  );
}
