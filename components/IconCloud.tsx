import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "cloudflare",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "mysql",
  "googlecloud",
  "kotlin",
  "springboot",
  "nodedotjs",
  "intellijidea",
  "astro",
  "tailwindcss",
  "angular",
  "mongodb",
];

export function IconCloudHero() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
 
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background">
      <IconCloud images={images} />
    </div>
  );
}
