import Image from "next/image";
import { IconCloudDemo } from "@/components/TecnologiesIconCloud";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="h-screen p-8">
        <section className="grid grid-cols-6 gap-8 max-w-[1920px] w-full mx-auto h-full">
          <div
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-1 p-10 
            flex items-center justify-center"
            style={{ backgroundColor: "#67d1ff" }}
          >
            <h1 className="text-4xl font-bold">👋 Hi, I'm Alejandro</h1>
          </div>

          <div
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-3 p-10 flex flex-col gap-6"
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
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-2 overflow-hidden"
          >
            <IconCloudDemo />
          </div>

          <div
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-2 p-10"
            style={{ backgroundColor: "#ef207d" }}
          >
            <h3 className="text-3xl font-semibold">Experience</h3>
            <div className="mt-8 space-y-6">
              <p className="text-xl">Senior Developer @ Tech Co</p>
              <p className="text-xl">Lead Engineer @ Startup</p>
            </div>
          </div>

          <div
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-1 p-10 flex items-center justify-center"
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
            className="rounded-2xl border-2 relative grid-flow-dense col-span-4 row-span-1 p-10 flex items-center"
            style={{ backgroundColor: "#f5adbc" }}
          >
            <blockquote className="text-2xl italic">
              "Passionate about creating elegant solutions to complex problems"
            </blockquote>
          </div>

          <div
            className="rounded-2xl border-2 relative grid-flow-dense col-span-2 row-span-1 p-10 flex items-center justify-center"
            style={{ backgroundColor: "#ecfb10" }}
          >
            <button className="px-8 py-4 text-xl rounded-full bg-black text-white hover:bg-black/80">
              Contact Me
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
