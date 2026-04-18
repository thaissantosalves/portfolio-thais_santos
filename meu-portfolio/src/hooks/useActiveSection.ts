import { useEffect, useState } from 'react';

export const SECTION_IDS = ['inicio', 'sobre', 'projetos', 'skills', 'contato'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('inicio');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
