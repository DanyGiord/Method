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
    <nav className="relative mx-4 py-4 mb-24 flex justify-between items-center ">
      <img
        src="/logo.png"
        alt="Method jiu-jitsu & grappling logop"
        width={150}
      />
      {matches && (
        <div className="flex gap-12 items-center">
          <a className="cursor-pointer text-white">HOME</a>
          <a className="cursor-pointer text-white">BRAZILIAN JIU-JITSU</a>
          <a className="cursor-pointer text-white">HORARIO Y PRECIOS</a>
          <a className="cursor-pointer text-white">SOBRE NOSOTROS</a>
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
            <motion.a href="#" variants={itemMotion} className="cursor-pointer">
              HOME
            </motion.a>
            <motion.a href="#" variants={itemMotion} className="cursor-pointer">
              BRAZILIAN JIU-JITSU
            </motion.a>
            <motion.a href="#" variants={itemMotion} className="cursor-pointer">
              HORARIO Y PRECIOS
            </motion.a>
            <motion.a href="#" variants={itemMotion} className="cursor-pointer">
              SOBRE NOSOTROS
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
