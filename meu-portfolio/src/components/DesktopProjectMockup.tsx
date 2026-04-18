import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useRef } from 'react';

const spring = { stiffness: 240, damping: 34, mass: 0.85 };

type DesktopProjectMockupProps = {
  imageSrc: string;
  alt: string;
  /** Texto exibido na barra fictícia do “navegador” */
  chromeLabel?: string;
};

export function DesktopProjectMockup({ imageSrc, alt, chromeLabel = 'projeto · web' }: DesktopProjectMockupProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const reducedMotion = useReducedMotion();

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reducedMotion) return;
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rotateX.set(-py * 18);
      rotateY.set(px * 18);
    },
    [reducedMotion, rotateX, rotateY]
  );

  const onLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-2xl pb-10 [perspective:1400px]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerCancel={onLeave}
    >
      {!reducedMotion && (
        <p className="pointer-events-none absolute -bottom-2 left-1/2 w-max -translate-x-1/2 font-mono text-[10px] text-zinc-500 sm:-bottom-1 sm:text-xs">
          Passe o cursor para inclinar o desktop em 3D
        </p>
      )}

      <motion.div
        className="relative mx-auto w-full [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        <div className="relative rounded-t-2xl border border-white/10 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 p-2 pb-1.5 shadow-[0_28px_90px_-16px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,45,149,0.1)]">
          <div className="flex items-center gap-2 px-1.5 pb-2 pt-1">
            <span className="h-2 w-2 rounded-full bg-red-500/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2 flex-1 truncate rounded-md bg-black/40 py-1 text-center font-mono text-[9px] text-zinc-500 sm:text-[10px]">
              {chromeLabel}
            </span>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-950 ring-1 ring-black/60">
            <img
              src={imageSrc}
              alt={alt}
              className="absolute inset-0 box-border h-full w-full object-contain object-center p-2 sm:p-2.5"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        <div
          className="relative z-10 -mt-px mx-auto h-2 w-[min(100%,520px)] rounded-b-md border border-t-0 border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-950"
          aria-hidden
        />

        <div
          className="mx-auto mt-0 flex w-[72%] max-w-[340px] flex-col items-center"
          aria-hidden
        >
          <div className="h-5 w-16 rounded-b-md bg-gradient-to-b from-zinc-700 to-zinc-900 ring-1 ring-white/10" />
          <div className="-mt-px h-2 w-full max-w-[280px] rounded-b-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black" />
        </div>

        <div
          className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-pink-500/12 via-transparent to-transparent opacity-60 blur-3xl"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
