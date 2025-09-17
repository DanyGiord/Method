"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClassItem {
  name: string;
  time: string;
  coach: string;
  level: string;
  description?: string;
}

interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

const schedule: DaySchedule[] = [
  {
    day: "Lunes",
    classes: [
      { name: "Open Mat", time: "18:00 - 19:00", coach: "Francesco", level: "Todos los niveles" },
      { name: "Grappling", time: "19:00 - 20:30", coach: "Francesco", level: "Todos los niveles" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { name: "BJJ - Gi", time: "10:00 - 11:30", coach: "Francesco", level: "Todos los niveles" },
      { name: "BJJ - Gi", time: "19:00 - 20:30", coach: "Francesco", level: "Todos los niveles" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { name: "Wrestling", time: "18:00 - 19:00", coach: "Francesco", level: "Todos los niveles" },
      { name: "Grappling", time: "19:00 - 20:30", coach: "Francesco", level: "Todos los niveles" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { name: "Grappling", time: "10:00 - 11:30", coach: "Francesco", level: "Todos los niveles" },
      { name: "BJJ - Gi", time: "19:00 - 20:30", coach: "Francesco", level: "Todos los niveles" },
    ],
  },
  {
    day: "Viernes",
    classes: [{ name: "Open Mat", time: "18:30 - 20:00", coach: "Francesco", level: "Todos los niveles" }],
  },
  {
    day: "Sábado",
    classes: [{ name: "Open Mat", time: "11:30 - 13:00", coach: "Francesco", level: "Todos los niveles" }],
  },
  {
    day: "Domingo",
    classes: [],
  },
];

// Helper to get description
function getDescription(name: string) {
  if (name.toLowerCase().includes("open mat")) return "Entreno libre";
  if (name.toLowerCase().includes("bjj - gi")) return "Kimono";
  if (name.toLowerCase().includes("grappling") || name.toLowerCase().includes("wrestling"))
    return "Sin kimono";
  return "";
}

export default function ClassSchedule() {
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  return (
    <section className="py-28 max-w-8xl mx-auto px-4">
      <h2 className="text-6xl font-bold text-center mb-8 text-white">HORARIOS</h2>

      <div className="flex justify-center">
        {/* Schedule Grid */}
        <div className="w-4/5 md:w-full grid grid-cols-1 md:grid-cols-7 gap-6">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="bg-[#212121] text-white rounded-2xl p-6 flex flex-col shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-center mb-4">{day.day}</h3>
              <div className="flex flex-col gap-4">
                {day.classes.map((cls, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#171717] hover:bg-gray-700 p-6 rounded-xl text-left text-base cursor-pointer shadow-md"
                    onClick={() => setSelectedClass(cls)}
                  >
                    <span className="font-bold text-lg">{cls.name}</span> <br />
                    <span className="text-gray-300 text-sm md:text-base">{cls.time}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for class details */}
        <AnimatePresence>
          {selectedClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#171717] text-white p-6 rounded-lg max-w-md w-full"
              >
                <h3 className="text-2xl font-bold mb-2">{selectedClass.name}</h3>
                <p className="mb-1">
                  <strong>Hora:</strong> {selectedClass.time}
                </p>
                <p className="mb-1">
                  <strong>Instructor:</strong> {selectedClass.coach}
                </p>
                <p className="mb-1">
                  <strong>Nivel:</strong> {selectedClass.level}
                </p>
                <p className="mb-1">
                  <strong>Descripción:</strong> {getDescription(selectedClass.name)}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-[#303030] hover:bg-[#404040] rounded"
                  onClick={() => setSelectedClass(null)}
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
