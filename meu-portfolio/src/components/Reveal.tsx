import { motion, type HTMLMotionProps } from 'framer-motion';

const defaults = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-64px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

type RevealProps = HTMLMotionProps<'div'>;

export function Reveal({ children, className, ...rest }: RevealProps) {
  return (
    <motion.div className={className} {...defaults} {...rest}>
      {children}
    </motion.div>
  );
}
