import { motion } from "framer-motion";
import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className = "" }: Props) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}   // Start hidden, shifted down
      whileInView={{ opacity: 1, y: 0 }} // Animate when visible
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% visible
    >
      {children}
    </motion.section>
  );
}