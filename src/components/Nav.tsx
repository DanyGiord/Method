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
    <nav className="fixed z-20 py-4 xl:px-36 px-8 w-full left-0 flex justify-between items-center bg-white/5 backdrop-blur-md">
      <a href="/">
        <img
          src="/logo.png"
          alt="Method jiu-jitsu & grappling logop"
          width={150}
        />
      </a>
      {matches && (
        <div className="flex gap-12 items-center text-white font-bold">
          <a href="/bjj" className="cursor-pointer">
            BRAZILIAN JIU-JITSU
          </a>
          <a href="/grappling" className="cursor-pointer">
            GRAPPLING
          </a>
          <a href="/wrestling" className="cursor-pointer">
            WRESTLING
          </a>
          <a href="/horario" className="cursor-pointer">
            HORARIO Y PRECIOS
          </a>
          <a href="/nosotros" className="cursor-pointer">
            SOBRE NOSOTROS
          </a>
        </div>
      )}
      {!matches && (
        <div className="z-50">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? "black" : "white"}
          />
        </div>
      )}
      {isOpen && !matches && (
        <div className="fixed flex top-0 left-0 w-full h-screen bg-white items-center justify-center md:h-auto md:bg-transparent md:static">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-12 text-xl items-center md:flex-row md:gap-8 md:text-base"
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
              href="/wrestling"
              variants={itemMotion}
              className="cursor-pointer font-bold"
            >
              WRESTLING
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

            {/* Socials */}
            <motion.div
              variants={itemMotion}
              className="flex gap-6 mt-12 md:mt-0"
            >
              <a
                href="https://instagram.com/method_bcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 md:w-5 md:h-5"
                />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/youtube.svg"
                  alt="YouTube"
                  className="w-6 h-6 md:w-5 md:h-5"
                />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 md:w-5 md:h-5"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
