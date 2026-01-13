import Navigation from "./nav.js";
import "./header.css"

export default function Header() {
  return (
    <header className="header-container">
      <div className="title-header">
        <h1 className="bigtitle">Les recettes du bonheur</h1>
        <p className="subtitle">À utiliser sans modérations ...</p>
      </div>

      <Navigation />
    </header>
  );
}
