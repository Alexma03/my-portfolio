"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/data/blogData"

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="relative">
      <Link href={`/blog/${post.slug}`} className="block">
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
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            
            <div className="text-muted-foreground mb-4">
              <p>{post.excerpt}</p>
            </div>

            <div className="flex items-center text-primary">
              <span>Read more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}