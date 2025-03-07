"use client";

import { useState, useEffect } from 'react'
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { getBlogPosts, BlogPost } from "@/data/blogData";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <section className="sm:h-auto [@media(max-height:1000px)]:xl:h-auto [@media(min-height:1000px)]:xl:h-screen md:h-auto [@media(min-height:1600px)]:h-auto">
        <AuroraBackground>
          <div className="h-screen flex flex-col overflow-hidden my-10">
            <div className="py-8 px-4 bg-background/95 backdrop-blur-sm sticky top-0 z-10 border-b">
              <div className="container mx-auto">
                <BlogHeader
                  title="My Development Blog"
                  description="Thoughts, tutorials, and insights about programming and software development"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AuroraBackground>
      </section>
    </main>
  );
}
