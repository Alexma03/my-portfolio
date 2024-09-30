"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cards } from "@/data/bentoCardData";
import Image from "next/image";

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
            relative grid gap-6 py-5 px-2 max-w-[2000px] xl:max-h-[1150px] mx-auto w-full
            grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-20 lg:px-14 xl:grid-cols-12 xl:grid-rows-12
            xl:py-10 xl:px-10 xl:h-[100vh] 2xl:p-16 2xl:gap-8 border-none short-laptop:p-8
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
              } shadow-2xl rounded-lg backdrop-blur-md text-center flex items-center justify-center md:col-span-${
              card.mdColSpan
              } md:row-span-${card.mdRowSpan} md:col-start-${
              card.mdColStart
              } md:row-start-${card.mdRowStart} xl:col-span-${
              card.colSpan
              } xl:row-span-${card.rowSpan} xl:col-start-${
              card.colStart
              } xl:row-start-${card.rowStart} border-none flex items-center justify-center`}
            >
              {card.component ? (
              <card.component />
              ) : card.image ? (
              <Image
                width={1080}
                height={1440}
                src={card.image}
                alt={"Card image"}
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
