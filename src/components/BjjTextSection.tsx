"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function BjjTextSection() {
  return (
    <section className="relative bg-[#1b1b1b] text-white h-screen flex items-center my">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/bjj-png.png"
            alt="Entrenamiento BJJ"
            className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-5xl h-auto object-contain hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl xl:text-6xl font-extrabold">
            Brazilian <span className="text-red-500">Jiu Jitsu</span> en Method
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            En <span className="font-semibold">Method Barcelona</span> te
            abrimos las puertas al arte suave: el{" "}
            <span className="text-red-400 font-bold">
              Brazilian Jiu Jitsu (BJJ)
            </span>
            . Más que un deporte, es defensa personal, condición física y
            crecimiento personal.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Aprende{" "}
            <span className="font-semibold">
              técnicas de control, derribo y sumisión
            </span>
            , desarrollando fuerza, resistencia y estrategia en un ambiente
            seguro y motivador.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Entrenamos en modalidad{" "}
            <span className="font-semibold">GI (con kimono)</span> y
            <span className="font-semibold"> NO GI (sin kimono)</span>, para que
            vivas el Jiu Jitsu en todas sus variantes.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/50 transition"
          >
            Reserva tu clase gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
