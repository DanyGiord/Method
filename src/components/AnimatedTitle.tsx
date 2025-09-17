import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedTitle({ text, className = "" }: Props) {
  return (
    <motion.h1
      className={`font-bold text-center z-10 ${className}`}
      initial={{ opacity: 0, y: 50 }}       // Start hidden + lower
      animate={{ opacity: 1, y: 0 }}        // Fade in + slide up
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {text}
    </motion.h1>
  );
}
