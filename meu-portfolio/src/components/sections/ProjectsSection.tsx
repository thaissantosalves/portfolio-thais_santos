import { motion } from 'framer-motion';
import { DesktopProjectMockup } from '../DesktopProjectMockup';
import { IphoneProjectMockup } from '../IphoneProjectMockup';
import { Reveal } from '../Reveal';

const base = process.env.PUBLIC_URL || '';
const rotaImage = `${base}/rota.jpeg`;
const corujaImage = `${base}/coruja.jpeg`;
const yepImage = `${base}/yep.jpeg`;

type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
};

const otherProjects: Project[] = [
  {
    title: 'Dashboard analítico',
    description: 'Agregações no banco, cache de consultas e painéis em tempo real no front.',
    stack: ['Next.js', 'Node', 'PostgreSQL', 'React'],
    href: '#',
  },
  {
    title: 'API + app Next',
    description: 'Rotas server-side, validação de payloads e persistência com ORM.',
    stack: ['Next.js', 'Node', 'REST', 'Prisma'],
    href: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative scroll-mt-28 border-t border-white/[0.10] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,105,180,0.07),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">Projetos</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Alguns dos meus{' '}
            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
              trabalhos
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Mobile, varejo e operações complexas, sempre com front, back e regras de negócio alinhados.
          </p>
        </Reveal>

        <Reveal className="mb-16">
          <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] shadow-lg shadow-black/20 backdrop-blur-lg">
            <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_minmax(240px,0.95fr)] lg:gap-12 lg:p-10">
              <div className="order-2 space-y-5 lg:order-1">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">Mobile · cidade</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Rota</h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Participei do desenvolvimento do aplicativo <strong className="text-zinc-100">Rota</strong>, pensado
                  para aproximar pessoas do que importa na cidade: <strong className="text-zinc-100">notícias</strong>{' '}
                  locais, <strong className="text-zinc-100">alertas</strong> (como meteorologia e avisos úteis),{' '}
                  <strong className="text-zinc-100">serviços</strong> e conteúdos que organizam a rotina urbana, tudo
                  em uma experiência mobile clara, rápida e agradável de usar.
                </p>

                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  No dia a dia do projeto trabalhei com telas, fluxos e integrações para que informação e ações
                  públicas chegassem bem resolvidas no bolso do usuário, com hierarquia visual forte e foco em
                  utilidade.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['React Native', 'Mobile UI', 'TypeScript', 'Consumo de APIs'].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-pink-500/35 bg-pink-500/15 px-3 py-1 font-mono text-[11px] text-pink-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <IphoneProjectMockup
                  imageSrc={rotaImage}
                  alt="Tela do aplicativo Rota com notícias, alertas da cidade e navegação inferior"
                />
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal className="mb-16">
          <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] shadow-lg shadow-black/20 backdrop-blur-lg">
            <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(280px,1.05fr)_1fr] lg:gap-12 lg:p-10">
              <div className="order-1 flex justify-center lg:justify-start">
                <DesktopProjectMockup
                  imageSrc={corujaImage}
                  alt="Interface web do sistema Coruja para gestão de campanhas publicitárias"
                  chromeLabel="coruja · campanhas"
                />
              </div>

              <div className="order-2 space-y-5">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">
                    Web + app · Grupo Coruja
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Coruja, campanhas</h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Participei do desenvolvimento de um ecossistema voltado ao{' '}
                  <strong className="text-zinc-100">controle do sistema de campanhas de mídia (ads)</strong> do{' '}
                  <strong className="text-zinc-100">Grupo Coruja</strong>, reunindo visão operacional, de cliente e
                  mobile em um só produto. O objetivo central é dar transparência e governança às campanhas: criar,
                  acompanhar, ajustar e medir ações publicitárias com fluxos claros para quem administra e para quem
                  consome os resultados.
                </p>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  O projeto se organiza em <strong className="text-zinc-100">três frentes</strong>: o{' '}
                  <strong className="text-zinc-100">painel administrativo</strong>, a área voltada ao{' '}
                  <strong className="text-zinc-100">cliente</strong> e o{' '}
                  <strong className="text-zinc-100">aplicativo</strong>. Atuei nos{' '}
                  <strong className="text-zinc-100">três modelos</strong>, tanto em{' '}
                  <strong className="text-zinc-100">front quanto em back</strong>: nas experiências web usei{' '}
                  <strong className="text-zinc-100">Next.js</strong> ponta a ponta (interface e camada server-side),
                  enquanto no app mobile trabalhei com <strong className="text-zinc-100">React Native</strong> para as
                  mesmas regras de negócio conversarem com as mesmas APIs, mantendo consistência entre admin, portal
                  do cliente e aplicativo.
                </p>

                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Foi um trabalho de integração contínua: permissões, papéis de usuário, formulários complexos,
                  relatórios e estados sincronizados entre web e mobile, sempre com foco em confiabilidade para quem
                  opera campanhas em escala.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Next.js (front + back)',
                    'React Native',
                    'TypeScript',
                    'APIs & integrações',
                    'Full stack',
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-pink-500/35 bg-pink-500/15 px-3 py-1 font-mono text-[11px] text-pink-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal className="mb-16">
          <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] shadow-lg shadow-black/20 backdrop-blur-lg">
            <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_minmax(280px,1.05fr)] lg:gap-12 lg:p-10">
              <div className="order-2 space-y-5 lg:order-1">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">
                    E-commerce · e-mobility
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">YEP</h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Participei do desenvolvimento do site <strong className="text-zinc-100">YEP</strong>, focado em{' '}
                  <strong className="text-zinc-100">vendas de produtos</strong> e{' '}
                  <strong className="text-zinc-100">scooters elétricas</strong>: vitrine, detalhes de modelo, fluxo de
                  compra e conteúdo pensado para quem busca mobilidade elétrica com confiança. A experiência pública
                  conversa com catálogos, estoques e regras comerciais mantidas consistentes no back.
                </p>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Por trás da vitrine existe um{' '}
                  <strong className="text-zinc-100">painel administrativo hierárquico</strong>, desenhado para três
                  níveis: <strong className="text-zinc-100">administradores</strong>,{' '}
                  <strong className="text-zinc-100">lojas e franqueadores</strong> e a{' '}
                  <strong className="text-zinc-100">empresa principal (matriz)</strong>. Cada perfil enxerga o que
                  precisa, pedidos, metas, cadastros, políticas de preço ou indicadores, sem misturar permissões,
                  com trilhas de auditoria e governança claras.
                </p>

                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Foi um desafio legal de <strong className="text-zinc-100">modelagem de papéis</strong> e de{' '}
                  <strong className="text-zinc-100">APIs</strong> que sirvam tanto o site quanto as operações internas,
                  mantendo o mesmo núcleo de dados para matriz, rede e time administrativo.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Next.js',
                    'E-commerce',
                    'RBAC / hierarquia',
                    'TypeScript',
                    'APIs REST',
                    'Full stack',
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-pink-500/35 bg-pink-500/15 px-3 py-1 font-mono text-[11px] text-pink-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <DesktopProjectMockup
                  imageSrc={yepImage}
                  alt="Site YEP com vitrine de produtos e scooters elétricas"
                  chromeLabel="yep · vendas & e-mobility"
                />
              </div>
            </div>
          </article>
        </Reveal>

        <p className="mb-6 text-center font-mono text-xs tracking-[0.2em] text-pink-400/70 uppercase">
          Outros projetos
        </p>
        <motion.ul
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {otherProjects.map((p) => (
            <motion.li key={p.title} variants={item}>
              <a
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-white/20 bg-white/[0.07] p-6 shadow-md shadow-black/15 backdrop-blur-lg transition hover:border-pink-400/40 hover:bg-white/[0.11]"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-pink-200">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-pink-500/35 bg-pink-500/15 px-2.5 py-0.5 font-mono text-[11px] text-pink-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
