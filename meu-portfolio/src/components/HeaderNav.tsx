import { useCallback, useEffect, useId, useRef, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const linkClass = (id: SectionId) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeSection === id ? 'text-pink-200' : 'text-zinc-200 hover:text-pink-200'
    }`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const onPointer = (e: PointerEvent) => {
      const el = wrapRef.current;
      if (el && !el.contains(e.target as Node)) close();
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer, true);
    };
  }, [open, close]);

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-8">
      <nav className="flex flex-col items-stretch md:items-center">
        <div className="hidden items-center gap-1 rounded-full border border-white/25 bg-white/[0.08] px-2 py-2 shadow-lg shadow-black/15 backdrop-blur-lg md:flex md:gap-0 md:px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${linkClass(item.id)} rounded-full px-4 py-2 ${
                activeSection === item.id ? 'bg-pink-500/25' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div ref={wrapRef} className="relative mx-auto w-full max-w-xs md:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-zinc-100 shadow-lg shadow-black/15 backdrop-blur-lg transition hover:border-pink-400/35 hover:bg-white/[0.12] hover:text-pink-100"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <span>Usar atalhos</span>
            <svg
              className={`h-4 w-4 shrink-0 text-pink-300/90 transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div
              id={menuId}
              role="menu"
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/90 py-1 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/10"
            >
              {navItems.map((item, i) => (
                <a
                  key={item.id}
                  role="menuitem"
                  href={`#${item.id}`}
                  onClick={close}
                  className={`block px-4 py-3 text-center text-[15px] tracking-tight transition-colors ${
                    activeSection === item.id
                      ? 'bg-pink-500/15 text-pink-100'
                      : 'text-zinc-200 hover:bg-white/[0.06] hover:text-white'
                  } ${i > 0 ? 'border-t border-white/[0.06]' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
