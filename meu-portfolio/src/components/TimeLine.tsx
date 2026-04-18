import { motion } from 'framer-motion';

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: '2023 — início',
    title: 'Primeiro contato sério com o front',
    description:
      'Foquei nas bases da web: HTML, CSS e JavaScript, depois React. Montei primeiras telas, revisei layout responsivo, Git e o hábito de documentar o que aprendia. Era o ano de construir confiança com a stack visual.',
  },
  {
    year: '2024',
    title: 'Frontend mais maduro — várias stacks',
    description:
      'TypeScript e Tailwind em produção; fui conhecendo Angular e Vue.js além de aprofundar React e Next.js. No mobile, React Native e Taro com React para levar a mesma lógica de componentes para apps e mini-programas. Integração com APIs REST e cuidado com estado e performance.',
  },
  {
    year: '2025',
    title: 'Abertura para back e banco',
    description:
      'Node.js e o ecossistema Next (rotas de API, server actions onde faz sentido), autenticação e sessões. SQL, modelagem de tabelas, migrations e ORM para não tratar o banco como caixa-preta. Estruturas de dados e algoritmos deixando de ser só teoria e entrando nos desafios que eu codava.',
  },
  {
    year: '2026 — hoje',
    title: 'Full stack em evolução',
    description:
      'Integro camadas com mais naturalidade: persistência, regras em Node/Next, contratos de API e UI com React, Next, Angular ou Vue conforme o projeto; no mobile, React Native ou Taro quando faz sentido. Continuo estudando e refinando esse mix no dia a dia.',
  },
];

export function TimeLine() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-pink-500/60 via-pink-500/25 to-transparent md:left-1/2 md:-translate-x-px" />
      <ul className="space-y-12">
        {milestones.map((item, index) => (
          <motion.li
            key={item.year}
            className={`relative flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-8 ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div
              className={`flex items-start gap-4 md:col-span-2 md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`relative z-10 flex min-w-[2rem] justify-center md:absolute md:left-1/2 md:min-w-0 md:-translate-x-1/2`}
              >
                <span className="mt-1.5 h-3 w-3 rounded-full border-2 border-pink-400 bg-black shadow-[0_0_12px_rgba(255,45,149,0.6)] md:mt-0" />
              </div>
              <div
                className={`flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm md:max-w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-right'
                }`}
              >
                <p className="font-mono text-xs text-pink-400/90">{item.year}</p>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
