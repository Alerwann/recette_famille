'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import convertType from '../../utils/convert_type'

const navLinkBase = 'p-5 md:rounded-[40%] transition-all duration-200 ';
const defaultStyle = 'md:bg-[#F1DA07] md:hover:shadow-[-5px_5px_10px_black]';
const activeStyle =
  'md:bg-[#F1F107] md:shadow-[-5px_5px_10px_black] md:scale-110 underline md:no-underline';
const homeLink = `${navLinkBase} md:bg-[#CFF527] `;
const homeLinkActive = `${navLinkBase} md:bg-[#F5EB27] underline md:no-underline`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const currentType = searchParams.get('typeRecipein');

  const [title, setTitle] = useState('ACCUEIL');

  useEffect(() => {
    const temptype = convertType(currentType)
    setTitle(temptype)
  },[currentType])

  // Fonction pour générer la classe dynamiquement
  const getStyle = (type) => {
    return `${navLinkBase} ${currentType === type ? activeStyle : defaultStyle}`;
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="w-full flex flex-row mt-10 py-10 bg-[#FDD5A4] relative z-50 ">
      <div className="flex-2/3 text-3xl text-center md:hidden">{title}</div>
      <div className="md:hidden flex justify-end px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl p-2 border-2 border-black rounded-lg bg-[#F1DA07]"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <ul
        className={`
        ${isOpen ? 'flex' : 'hidden'} 
        flex-col items-center gap-6 py-10 absolute top-full left-0 w-full bg-[#FDD5A4] border-b-2 border-black shadow-lg
        md:static md:flex md:flex-row md:justify-evenly md:py-10 md:gap-0 md:border-none md:shadow-none
        list-none transition-all
      `}
      >
        <li>
          <Link
            href="/"
            className={!currentType ? homeLinkActive : homeLink}
            onClick={closeMenu}
          >
            Accueil
          </Link>
        </li>
        {['aperitif', 'entree', 'poisson', 'plat', 'dessert', 'mignardise'].map(
          (type) => (
            <li key={type}>
              <Link
                onClick={closeMenu}
                href={{
                  pathname: '/liste_recettes',
                  query: { typeRecipein: type },
                }}
                className={getStyle(type)}
              >
                {convertType(type)}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
