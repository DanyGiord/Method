import { motion } from "framer-motion";
import { useState } from "react";

interface TickerColumnProps {
  images: string[];
  speed?: number;
  direction?: "up" | "down";
  onClick?: (src: string) => void;
}

function TickerColumn({ images, speed = 20, direction = "up", onClick }: TickerColumnProps) {
  const imageHeight = 200; // height of each image
  const totalHeight = images.length * imageHeight;

  return (
    <div className="overflow-hidden h-[80vh] flex-1">
      <motion.div
        className="flex flex-col"
        animate={{ y: direction === "up" ? [-totalHeight, 0] : [0, -totalHeight] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: totalHeight / speed,
          ease: "linear",
        }}
      >
        {images.concat(images).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="h-48 w-full object-cover mb-4 cursor-pointer"
            onClick={() => onClick && onClick(img)}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface AnimatedCarouselProps {
  columns: string[][];
  className?: string;
}

export default function AnimatedCarousel({ columns, className = "" }: AnimatedCarouselProps) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const openModal = (src: string) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  return (
    <>
      {/* Carousel container */}
      <div className={`flex gap-4 justify-center ${className}`}>
        {columns.map((colImages, idx) => {
          const direction = idx % 2 === 0 ? "up" : "down";
          const speed = idx === 1 ? 30 : 10; // middle column faster
          return (
            <TickerColumn
              key={idx}
              images={colImages}
              speed={speed}
              direction={direction}
              onClick={openModal}
            />
          );
        })}
      </div>

      {/* Fullscreen modal */}
      {modalSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <img src={modalSrc} className="max-h-full max-w-full object-contain" alt="" />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &rarr;
          </button>
        </div>
      )}
    </>
  );
}
