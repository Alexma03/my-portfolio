"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function BlogPage() {
  return (
    <main>
      <section className="sm:h-auto [@media(max-height:1000px)]:xl:h-auto [@media(min-height:1000px)]:xl:h-screen md:h-auto [@media(min-height:1600px)]:h-auto">
        <AuroraBackground>
          <div className="relative z-10 bg-opacity-0 p-4 md:p-6 lg:p-8 xl:p-10 h-full">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="
                relative grid gap-6 max-w-[1900px] mx-auto w-full h-full
                grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-20 lg:grid-cols-2 xl:grid-cols-12 xl:grid-rows-12
                2xl:gap-8 border-none overflow-hidden
              "
            >
              {/* Blog content grid items */}
              <motion.div
                className="col-span-12 row-span-12 bg-white bg-opacity-10 shadow-2xl rounded-lg backdrop-blur-md p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
                {/* Blog posts grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Sample blog post */}
                  <div className="bg-white bg-opacity-5 rounded-lg p-6 hover:bg-opacity-20 transition-all">
                    <h2 className="text-xl font-semibold text-white mb-2">Post Title</h2>
                    <p className="text-gray-300">Blog post excerpt...</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>
    </main>
  );
}