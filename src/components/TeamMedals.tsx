import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

interface Medal {
  type: string;
  count: number;
  color: string;
}

const medals: Medal[] = [
  { type: "oro", count: 23, color: "#FFD700" },
  { type: "plata", count: 21, color: "#C0C0C0" },
  { type: "bronce", count: 12, color: "#CD7F32" },
];

export default function TeamMedals() {
  const [counts, setCounts] = useState<number[]>(medals.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // 2s
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const newCounts = medals.map((medal) => {
        const progress = Math.min(elapsed / duration, 1);
        return Math.floor(progress * medal.count);
      });
      setCounts(newCounts);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <section ref={sectionRef} className="py-28 bg-[#1b1b1b] text-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold mb-6">Nuestro Equipo</h2>
         <p className="text-2xl">
          El equipo de Method Barcelona ha competido en toda España y ha ganado
          numerosos títulos desde 2023.
        </p>
        <p className="text-2xl mb-12">
          ¡Orgullosos de nuestros logros en competiciones!
        </p>

        <div className="flex justify-center gap-12 flex-wrap">
          {medals.map((medal, i) => (
            <motion.div
              key={medal.type}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Medal Icon */}
              <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-4 text-black text-4xl"
                style={{ backgroundColor: medal.color }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <FaMedal />
              </motion.div>

              {/* Animated Number */}
              <div className="text-3xl font-bold">{counts[i]}</div>

              <span className="text-xl font-semibold capitalize mt-2">
                {medal.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
