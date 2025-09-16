import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQueryTs";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width:1280px)");
  return (
    <nav className="fixed z-10 py-4 xl:px-36 px-8 w-full left-0 flex justify-between items-center bg-white/5 backdrop-blur-md">
      <a href="/">
        <img
          src="/logo.png"
          alt="Method jiu-jitsu & grappling logop"
          width={150}
        />
      </a>
      {matches && (
        <div className="flex gap-12 items-center">
          <a href="/bjj" className="cursor-pointer text-white font-bold">
            BRAZILIAN JIU-JITSU
          </a>
          <a href="/grappling" className="cursor-pointer text-white font-bold">
            GRAPPLING
          </a>
          <a href="/horario" className="cursor-pointer text-white font-bold">
            HORARIO Y PRECIOS
          </a>
          <a href="/nosotros" className="cursor-pointer text-white font-bold">
            SOBRE NOSOTROS
          </a>
        </div>
      )}
      {!matches && (
        <div className="z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} color="red" />
        </div>
      )}
      {isOpen && !matches && (
        <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg items-center"
          >
            <motion.a
              href="/bjj"
              variants={itemMotion}
              className="cursor-pointer font-bold"
            >
              BRAZILIAN JIU-JITSU
            </motion.a>
            <motion.a
              href="/grappling"
              variants={itemMotion}
              className="cursor-pointer font-bold"
            >
              GRAPPLING
            </motion.a>
            <motion.a
              href="/horario"
              variants={itemMotion}
              className="cursor-pointer font-bold"
            >
              HORARIO Y PRECIOS
            </motion.a>
            <motion.a
              href="/nosotros"
              variants={itemMotion}
              className="cursor-pointer font-bold"
            >
              SOBRE NOSOTROS
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
