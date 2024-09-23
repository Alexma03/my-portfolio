import IconCloud from "@/components/magicui/icon-cloud";

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
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
