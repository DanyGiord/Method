import { motion } from "framer-motion";
import { useState } from "react";

interface TickerColumnProps {
  images: string[];
  speed?: number;
  direction?: "up" | "down";
  onClick?: (src: string) => void;
}

function TickerColumn({ images, speed = 20, direction = "up", onClick }: TickerColumnProps) {
  const imageHeight = 200;
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
             className="h-48 md:h-64 lg:h-80 w-full object-cover mb-4 cursor-pointer"
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Flatten all images from columns for gallery navigation
  const allImages = columns.flat();

  const openModal = (src: string) => {
    const index = allImages.indexOf(src);
    setCurrentIndex(index >= 0 ? index : 0);
    setModalSrc(src);
  };

  const closeModal = () => setModalSrc(null);

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
    setModalSrc(allImages[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(newIndex);
    setModalSrc(allImages[newIndex]);
  };

  return (
    <>
      {/* Carousel container */}
      <div className={`flex gap-4 justify-center ${className}`}>
        {columns.map((colImages, idx) => {
          const direction = idx % 2 === 0 ? "up" : "down";
          const speed = idx === 1 ? 30 : 10;
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

      {/* Fullscreen modal with navigation */}
      {modalSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            &#8592;
          </button>
          <img src={modalSrc} className="max-h-full max-w-full object-contain" alt="" />
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            &#8594;
          </button>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
