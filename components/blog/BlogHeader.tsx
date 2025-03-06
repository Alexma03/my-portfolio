"use client"

import { motion } from "framer-motion"

export function BlogHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <motion.div
      className="space-y-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}

