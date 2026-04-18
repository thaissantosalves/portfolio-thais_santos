import { motion } from 'framer-motion';
import { Reveal } from '../Reveal';

const skills = [
  'React',
  'Next.js',
  'Angular',
  'Vue.js',
  'React Native',
  'Taro + React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'APIs REST',
  'Banco de dados (SQL)',
  'ORM (ex.: Prisma)',
  'Modelagem & estruturas de dados',
  'Algoritmos & complexidade',
  'Autenticação & sessões',
  'Git',
  'Testes (Jest / RTL)',
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,20,147,0.06),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="mb-10 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">Skills</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Ferramentas que{' '}
            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
              uso no dia a dia
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Do ecossistema <strong className="font-medium text-zinc-300">React</strong> e{' '}
            <strong className="font-medium text-zinc-300">Next</strong> a{' '}
            <strong className="font-medium text-zinc-300">Angular</strong> e{' '}
            <strong className="font-medium text-zinc-300">Vue</strong>; no mobile,{' '}
            <strong className="font-medium text-zinc-300">React Native</strong> e{' '}
            <strong className="font-medium text-zinc-300">Taro</strong> com base em React — além de back, banco e
            APIs com a mesma exigência de qualidade.
          </p>
        </Reveal>

        <motion.ul
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {skills.map((name) => (
            <motion.li
              key={name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
              }}
            >
              <span className="inline-block rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-zinc-200 backdrop-blur-sm transition hover:border-pink-500/40 hover:text-pink-100">
                {name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
