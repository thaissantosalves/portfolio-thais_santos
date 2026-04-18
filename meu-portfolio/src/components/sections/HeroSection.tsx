import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-28 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,45,149,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.04),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-center lg:text-left">
          <motion.p
            className="font-mono text-sm tracking-[0.25em] text-pink-400/90 uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio · Full stack
          </motion.p>

          <motion.h1
            className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Oi! Sou{' '}
            <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              Thais Santos
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <h2 className="text-xl font-semibold text-pink-300 sm:text-2xl">Desenvolvedora Full Stack</h2>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-pink-500/70 to-transparent lg:mx-0" />
            <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-zinc-300 lg:mx-0">
              Do banco de dados e da modelagem de dados às APIs em Node e às rotas server-side no Next.js —
              passando por interfaces responsivas e bem estruturadas.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-2xl border border-pink-500/35 bg-gradient-to-r from-pink-500/80 to-pink-600/80 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/15 transition hover:border-pink-400/60 hover:from-pink-500 hover:to-pink-600 hover:shadow-pink-500/25"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-pink-400/40 hover:bg-white/10"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-zinc-400 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
            </span>
            Disponível para projetos e freelas
          </motion.div>
        </div>

        <motion.div
          className="relative hidden min-h-[280px] lg:block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-white/[0.07] to-transparent p-8 backdrop-blur-md">
            <div className="flex h-full flex-col justify-between font-mono text-xs text-zinc-500">
              <div className="space-y-3 text-pink-400/90">
                <p className="text-white/80">{'// stack em destaque'}</p>
                <ul className="space-y-2 text-[11px] leading-relaxed sm:text-xs">
                  <li className="text-zinc-300">React · Next.js · Angular · Vue.js</li>
                  <li className="text-zinc-300">React Native · Taro (React) · TypeScript</li>
                  <li className="text-zinc-300">Node · SQL/ORM · REST · Tailwind</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-[11px] text-pink-300/90">
                <span className="text-zinc-500">status</span> build_ok — v2026.04
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
