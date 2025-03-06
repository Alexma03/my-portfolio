"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/data/blogData"

export function BlogPostCard({ post }: { post: BlogPost }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardRect, setCardRect] = useState({ width: 0, height: 0, top: 0, left: 0 })

  // Update card dimensions when hovered to ensure accurate positioning
  useEffect(() => {
    if (cardRef.current && isHovered) {
      const rect = cardRef.current.getBoundingClientRect()
      setCardRect({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      })
    }
  }, [isHovered])

  // Handle mouse events
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div className="relative" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Static card that maintains its position in the grid */}
      <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow h-full">
        <div className="relative aspect-video">
          <Image
            src={post.image || "/placeholder.svg?height=200&width=400"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
          <div className="text-muted-foreground h-12">
            <p className="line-clamp-2">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* AnimatePresence for smooth enter/exit animations */}
      <AnimatePresence>
        {isHovered && cardRef.current && (
          <>
            {/* Backdrop blur overlay with fade animation */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleMouseLeave}
            />

            {/* Floating card with enhanced animations */}
            <motion.div
              className="fixed rounded-lg overflow-hidden border bg-card text-card-foreground shadow-lg z-50"
              initial={{
                opacity: 0,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1.08,
                x: 0,
                y: -10,
              }}
              exit={{
                opacity: 0,
                scale: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1], // Spring-like easing for clamping effect
              }}
              style={{
                width: cardRect.width,
                top: cardRect.top,
                left: cardRect.left,
                transformOrigin: "center center",
              }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>

                  <div className="text-muted-foreground mb-4">
                    <p>{post.excerpt}</p>
                  </div>

                  <motion.div
                    className="flex items-center text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
