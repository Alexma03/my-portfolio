"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative grid gap-8 p-8 max-w-full mx-auto h-[100vh] w-full
                   grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:h-[70vh]
                   auto-rows-fr"
      >
        {[
          { id: 1, title: "Tarjeta 1", content: "Contenido de la tarjeta 1", colSpan: 2, rowSpan: 2 },
          { id: 2, title: "Tarjeta 2", content: "Contenido de la tarjeta 2", colSpan: 1, rowSpan: 1 },
          { id: 3, title: "Tarjeta 3", content: "Contenido de la tarjeta 3", colSpan: 1, rowSpan: 2 },
          { id: 4, title: "Tarjeta 4", content: "Contenido de la tarjeta 4", colSpan: 3, rowSpan: 1 },
          { id: 5, title: "Tarjeta 5", content: "Contenido de la tarjeta 5", colSpan: 2, rowSpan: 1 },
          { id: 6, title: "Tarjeta 6", content: "Contenido de la tarjeta 6", colSpan: 1, rowSpan: 3 },
          { id: 7, title: "Tarjeta 7", content: "Contenido de la tarjeta 7", colSpan: 2, rowSpan: 2 },
          { id: 8, title: "Tarjeta 8", content: "Contenido de la tarjeta 8", colSpan: 3, rowSpan: 2 },
        ].map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md 
                        col-span-${card.colSpan} row-span-${card.rowSpan}`}
          >
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </AuroraBackground>
  );
}
