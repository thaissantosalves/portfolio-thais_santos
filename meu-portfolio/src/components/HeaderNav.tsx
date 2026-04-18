import React, { useState } from 'react';
import type { SectionId } from '../hooks/useActiveSection';

type HeaderProps = {
  activeSection: SectionId;
};

const navItems: { id: SectionId; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contato' },
];

function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (id: SectionId) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeSection === id ? 'text-pink-300' : 'text-zinc-400 hover:text-pink-300'
    }`;

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-8">
      <nav className="flex items-center justify-center">
        <div className="hidden items-center gap-1 rounded-full border border-pink-500/20 bg-black/55 px-2 py-2 shadow-lg shadow-pink-500/10 backdrop-blur-md md:flex md:gap-0 md:px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${linkClass(item.id)} rounded-full px-4 py-2 ${
                activeSection === item.id ? 'bg-pink-500/15' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className="flex rounded-xl border border-pink-500/25 bg-black/60 p-2.5 text-zinc-300 backdrop-blur-md transition hover:text-pink-300 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mt-3 rounded-2xl border border-pink-500/25 bg-black/90 p-4 shadow-xl backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-4 py-3 ${linkClass(item.id)} ${
                  activeSection === item.id ? 'bg-pink-500/10' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
