"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cards } from "@/data/bentoCardData";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="relative z-10 bg-opacity-0">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            relative grid gap-6 py-8 px-16 max-w-[1675px] xl:max-h-[1150px] mx-auto w-full sm:px-32
            grid-cols-1 md:grid-cols-2 md:grid-rows-20 lg:px-28 xl:grid-cols-12 xl:grid-rows-12
            xl:py-10 xl:px-10 xl:h-[100vh] 2xl:p-16 2xl:gap-8 border-none
          "
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                card.component ? "" : "bg-white bg-opacity-10"
              } rounded-lg shadow-lg backdrop-blur-md text-center flex items-center justify-center ${
                card.title || card.content ? "py-4 px-10" : ""
              } col-span-1 md:col-span-${card.mdColSpan} md:row-span-${
                card.mdRowSpan
              } md:col-start-${card.mdColStart} md:row-start-${
                card.mdRowStart
              } xl:col-span-${card.colSpan} xl:row-span-${
                card.rowSpan
              } xl:col-start-${card.colStart} xl:row-start-${
                card.rowStart
              } border-none`}
            >
              {card.component ? (
                <card.component />
              ) : card.title || card.content ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-lg text-black dark:text-white">
                    {card.content}
                  </p>
                </div>
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
      </div>
    </AuroraBackground>
  );
}
