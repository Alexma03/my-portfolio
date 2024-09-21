"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cards } from "@/data/bentoCardData";

export default function Home() {
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
        className="
          relative grid gap-6 py-8 px-16 max-w-[1675px] mx-auto w-full sm:px-32
          grid-cols-1 md:grid-cols-2 md:grid-rows-20 lg:px-28 xl:grid-cols-12 xl:grid-rows-12
          xl:py-10 xl:px-10 xl:h-[100vh] 2xl:p-28 2xl:gap-8
        "
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md ${
              card.title || card.content ? "p-6" : ""
            } col-span-1 md:col-span-${card.mdcolSpan} md:row-span-${card.mdrowSpan} md:col-start-${card.mdcolStart} md:row-start-${card.mdrowStart} xl:col-span-${card.colSpan} xl:row-span-${card.rowSpan} xl:col-start-${card.colStart} xl:row-start-${card.rowStart}`}
          >
            {card.component ? (
              <card.component />
            ) : card.title || card.content ? (
              <>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  {card.title}
                </h3>
                <p className="text-lg text-black dark:text-white">
                  {card.content}
                </p>
              </>
            ) : card.image ? (
              <img
                src={card.image}
                alt={card.title || "Card image"}
                className="object-cover w-full h-full rounded-lg"
              />
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </AuroraBackground>
  );
}