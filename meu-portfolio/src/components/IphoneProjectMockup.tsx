import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useRef } from 'react';

const spring = { stiffness: 280, damping: 32, mass: 0.8 };

type IphoneProjectMockupProps = {
  imageSrc: string;
  alt: string;
};

export function IphoneProjectMockup({ imageSrc, alt }: IphoneProjectMockupProps) {
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
      rotateX.set(-py * 26);
      rotateY.set(px * 26);
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
      className="relative mx-auto flex max-w-[min(100%,320px)] justify-center pb-10 [perspective:1200px]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerCancel={onLeave}
    >
      {!reducedMotion && (
        <p className="pointer-events-none absolute -bottom-8 left-1/2 w-max -translate-x-1/2 font-mono text-[10px] text-zinc-500 sm:text-xs">
          Passe o cursor para inclinar em 3D
        </p>
      )}

      <motion.div
        className="relative w-[72%] max-w-[280px] [transform-style:preserve-3d] sm:w-[78%]"
        style={{ rotateX, rotateY }}
      >
        <div className="rounded-[2.35rem] border border-white/10 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black p-[10px] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,45,149,0.12)]">
          <div className="relative rounded-[2rem] bg-black">
            <div className="absolute left-1/2 top-2 z-20 h-5 w-[28%] -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10" />

            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.85rem] bg-zinc-950">
              <img
                src={imageSrc}
                alt={alt}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-pink-500/15 via-transparent to-transparent opacity-70 blur-2xl"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
