// components/Footer.tsx
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-gray-400 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            INICIO
          </a>
          <a href="bjj" className="hover:text-white transition-colors">
            BRAZILIAN JIU-JITSU
          </a>
          <a href="grappling" className="hover:text-white transition-colors">
            GRAPPLING
          </a>
          <a href="wrestling" className="hover:text-white transition-colors">
            WRESTLING
          </a>
          <a href="horario" className="hover:text-white transition-colors">
            HORARIOS
          </a>
          <a href="nosotros" className="hover:text-white transition-colors">
            SOBRE NOSOTROS
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end text-white">
          <a
            href="https://instagram.com/method_bcn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram className="w-6 h-6 md:w-5 md:h-5" />
          </a>
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaYoutube className="w-6 h-6 md:w-5 md:h-5" />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaWhatsapp className="w-6 h-6 md:w-5 md:h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Method BCN.
        </p>
      </div>
    </footer>
  );
}
