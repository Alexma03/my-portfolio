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
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-4 bg-white bg-opacity-10 shadow-2xl rounded-lg backdrop-blur-md">
      <p className="text-4xl font-bold text-white">My Skills</p>
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-[#1F1F1F]">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
