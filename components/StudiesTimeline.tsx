import { Badge } from "flowbite-react";
import { getStudies } from "@/data/studiesTimelineData"; // actualizamos la importación
import Image from "next/image";
import { useState, useEffect } from "react";

export default function StudiesTimeline() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [studiesData, setStudiesData] = useState(getStudies(screenWidth));

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setStudiesData(getStudies(screenWidth));
  }, [screenWidth]);

  return (
    <div className="h-full w-full rounded-lg p-6 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-stretch gap-6 xl:justify-between lg:justify-center md:justify-center max-w-6xl size-full">
        {studiesData.map((study) => (
          <div key={study.id} className="size-full sm:w-1/3 flex flex-col">
            <div className="flex flex-col justify-between h-full bg-white/5 rounded-lg p-6">
              <div className="flex flex-row items-center gap-4">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-contain rounded-lg filter drop-shadow-xl"
                  />
                </div>
                <h3 className="text-left text-base text-white font-medium">
                  {study.title}
                </h3>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 text-xs wide-screen:text-md">
                    {study.year}
                  </span>
                  <span className="text-gray-400">•</span>
                  <p className="font-semibold text-xs text-gray-300 wide-screen:text-lg">
                    {study.institution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {study.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      className="text-[11px] md:text-xs lg:text-xs xl:text-[11px] short-laptop:text-[11px] text-gray-200 bg-gray-700 wide-screen:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}