import { motion, type HTMLMotionProps } from 'framer-motion';

/** Sem fade de opacity: blur + opacity animada parece “piscar” o vidro no navegador. */
const defaults = {
  initial: { opacity: 1, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-64px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

type RevealProps = HTMLMotionProps<'div'>;

export function Reveal({ children, className, ...rest }: RevealProps) {
  return (
    <motion.div className={className} {...defaults} {...rest}>
      {children}
    </motion.div>
  );
}
