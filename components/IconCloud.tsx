import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "cloudflare",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nextdotjs",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
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
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-[#131313]">
      <IconCloud images={images} />
    </div>
  );
}
