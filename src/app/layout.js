import { Geist, Geist_Mono, Rouge_Script } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import VerifAcces from "./component/acces";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rougeScript = Rouge_Script({
  weight: "400",
  variable: "--font-rouge-script",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mes recettes",
  description: "Liste de mes recettes favorite",
};



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${rougeScript.variable} ${geistMono.variable} ${geistSans.variable}`}>
        <VerifAcces>
          <Header />
          {children}
        </VerifAcces>
      </body>
    </html>
  );
}
