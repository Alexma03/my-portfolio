import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full-stack developer portfolio showcasing creative projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 dark:bg-zinc-900`}
      >
        <div className="flex justify-center items-center w-full min-h-screen p-8">
          <main className="grid grid-cols-6 gap-8 max-w-[1920px] w-full mx-auto">
            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-1 p-10ø
            flex items-center justify-center"
              style={{ backgroundColor: "#67d1ff" }}
            >
              <h1 className="text-4xl font-bold">👋 Hi, I'm [Your Name]</h1>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-3 p-10 flex flex-col gap-6"
              style={{ backgroundColor: "#658093" }}
            >
              <h2 className="text-3xl font-semibold">Featured Project</h2>
              <p className="text-xl leading-relaxed">
                An innovative web application built with React and Node.js that
                helps developers showcase their work
              </p>
              <div className="flex gap-4 mt-auto">
                <span className="px-4 py-2 text-lg rounded-full bg-black/10">
                  React
                </span>
                <span className="px-4 py-2 text-lg rounded-full bg-black/10">
                  Node.js
                </span>
              </div>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-2 p-10"
              style={{ backgroundColor: "#c83db6" }}
            >
              <h3 className="text-3xl font-semibold">Skills</h3>
              <ul className="mt-8 space-y-4 text-xl">
                <li>Frontend Development</li>
                <li>Backend Architecture</li>
                <li>UI/UX Design</li>
                <li>Cloud Services</li>
              </ul>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-2 p-10"
              style={{ backgroundColor: "#ef207d" }}
            >
              <h3 className="text-3xl font-semibold">Experience</h3>
              <div className="mt-8 space-y-6">
                <p className="text-xl">Senior Developer @ Tech Co</p>
                <p className="text-xl">Lead Engineer @ Startup</p>
              </div>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-1 p-10 flex items-center justify-center"
              style={{ backgroundColor: "#8df414" }}
            >
              <div className="flex gap-8">
                <a href="#" className="text-xl hover:opacity-75">
                  GitHub
                </a>
                <a href="#" className="text-xl hover:opacity-75">
                  LinkedIn
                </a>
                <a href="#" className="text-xl hover:opacity-75">
                  Twitter
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-4 row-span-1 p-10 flex items-center"
              style={{ backgroundColor: "#f5adbc" }}
            >
              <blockquote className="text-2xl italic">
                "Passionate about creating elegant solutions to complex
                problems"
              </blockquote>
            </div>

            <div
              className="rounded-2xl border-2 relative min-h-[320px] grid-flow-dense col-span-2 row-span-1 p-10 flex items-center justify-center"
              style={{ backgroundColor: "#ecfb10" }}
            >
              <button className="px-8 py-4 text-xl rounded-full bg-black text-white hover:bg-black/80">
                Contact Me
              </button>
            </div>
          </main>
        </div>
        {children}
      </body>
    </html>
  );
}
