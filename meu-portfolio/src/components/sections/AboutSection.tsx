import { Reveal } from '../Reveal';
import { TimeLine } from '../TimeLine';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-28 border-t border-white/[0.10] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,20,147,0.08),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-pink-400/90 uppercase">Sobre</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Minha trajetória de{' '}
            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
              aprendizado
            </span>
          </h2>
          <div className="mb-14 max-w-2xl space-y-5 text-lg font-normal leading-relaxed text-zinc-300">
            <p>
              Em <strong className="font-semibold text-zinc-100">2023</strong> comecei a mergulhar de verdade no
              desenvolvimento web pelo <strong className="font-semibold text-zinc-100">frontend</strong>: HTML,
              CSS e JavaScript, depois React e os primeiros projetos com interface responsiva. Foi o ano em que
              entendi que gosto de ver a ideia virando tela, e de aprender com consistência.
            </p>
            <p>
              Nos anos seguintes fui <strong className="font-semibold text-zinc-100">ampliando o raio</strong>:
              TypeScript, Tailwind e um leque de frameworks no front, além de{' '}
              <strong className="font-semibold text-zinc-100">React</strong> e{' '}
              <strong className="font-semibold text-zinc-100">Next.js</strong>, fui adquirindo experiência com{' '}
              <strong className="font-semibold text-zinc-100">Angular</strong> e{' '}
              <strong className="font-semibold text-zinc-100">Vue.js</strong>, e no mobile com{' '}
              <strong className="font-semibold text-zinc-100">React Native</strong> e{' '}
              <strong className="font-semibold text-zinc-100">Taro</strong> (sempre com base em React). A
              curiosidade natural me puxou também para trás da cortina:{' '}
              <strong className="font-semibold text-zinc-100">Node.js</strong>, rotas e lógica no{' '}
              <strong className="font-semibold text-zinc-100">Next</strong>, modelagem e consultas em{' '}
              <strong className="font-semibold text-zinc-100">banco de dados</strong>, ORMs e{' '}
              <strong className="font-semibold text-zinc-100">estruturas de dados</strong> aplicadas ao que eu
              construo.
            </p>
            <p>
              Hoje encaro projetos de forma <strong className="font-semibold text-zinc-100">full stack</strong>,
              da persistência e das regras de negócio à experiência do usuário (web ou app), escolhendo a stack que
              melhor encaixa no problema, e sigo estudando para manter tudo isso afiado.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-6 text-center font-mono text-xs tracking-[0.2em] text-pink-400/80 uppercase">
            Linha do tempo do aprendizado
          </p>
          <TimeLine />
        </Reveal>
      </div>
    </section>
  );
}
