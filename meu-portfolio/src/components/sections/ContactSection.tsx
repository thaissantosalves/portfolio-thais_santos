import { Reveal } from '../Reveal';

const email = 'thaisssantos090607@gmail.com';
const linkedin = 'https://www.linkedin.com/in/thaissantos-alves/';
const github = 'https://github.com/thaissantosalves';

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-28 border-t border-white/[0.06] px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,45,149,0.1),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">Contato</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Vamos{' '}
            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
              construir algo
            </span>{' '}
            juntas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Chame por e-mail ou conecte no LinkedIn e no GitHub — fico feliz em conversar sobre projetos e oportunidades.
          </p>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${email}`}
            className="w-full max-w-xs rounded-2xl border border-pink-500/40 bg-gradient-to-r from-pink-500/85 to-pink-600/85 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:from-pink-500 hover:to-pink-600 sm:w-auto"
          >
            Enviar e-mail
          </a>
          <div className="flex w-full max-w-xs flex-col gap-3 sm:w-auto">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-zinc-300 transition hover:border-pink-500/35 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-zinc-300 transition hover:border-pink-500/35 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} Thais Santos — React, Next.js, Node, Motion e Three.js
        </p>
      </div>
    </section>
  );
}
