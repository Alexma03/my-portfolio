"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { cards, Card } from "../data/bentoCardData";

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
        className="relative grid gap-10 py-10 px-10 max-w-full mx-auto h-[100vh] w-full grid-cols-12 grid-rows-12"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md col-span-${card.colSpan} row-span-${card.rowSpan} col-start-${card.colStart} row-start-${card.rowStart}`}
          >
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </AuroraBackground>
  );
}
