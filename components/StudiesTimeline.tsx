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
    <div className="h-full w-full rounded-lg p-6 bg-white bg-opacity-10 flex items-center justify-center wide-screen:p-8">
      <div className="flex flex-col sm:flex-row items-stretch gap-6 wide-screen:gap-8 lg:justify-center md:justify-center w-full">
        {studiesData.map((study) => (
          <div key={study.id} className="flex-1 flex flex-col min-w-0">
            <div className="flex flex-col justify-between h-full bg-white/5 rounded-lg p-6 xl:p-7 
              transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg 
              cursor-pointer group">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4 xl:gap-5">
                  <div className="size-16 relative flex-shrink-0 xl:size-18 wide-screen:size-20 
                    transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={study.img}
                      alt={study.title}
                      fill
                      className="object-contain rounded-lg filter drop-shadow-xl"
                    />
                  </div>
                  <h3 className="text-left text-base text-white font-medium xl:text-lg wide-screen:text-xl 
                    wide-screen:font-bold transition-colors duration-300 group-hover:text-blue-400">
                    {study.title}
                  </h3>
                </div>

                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 xl:flex-col wide-screen:flex-col xl:items-start wide-screen:items-start">
                    <span className="text-slate-200 text-xs xl:text-sm transition-colors duration-300 group-hover:text-slate-100">
                      {study.year}
                    </span>
                    <span className="text-gray-400 xl:hidden wide-screen:hidden">•</span>
                    <p className="font-semibold text-xs xl:text-sm text-gray-300 wide-screen:text-base 
                      transition-colors duration-300 group-hover:text-gray-200">
                      {study.institution}
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs xl:text-sm mt-2 line-clamp-3 
                    transition-colors duration-300 group-hover:text-gray-300">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 xl:mt-4 xl:gap-2">
                    {study.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        color="gray"
                        className="text-[11px] md:text-xs lg:text-xs xl:text-xs text-gray-200 bg-gray-700 
                          transition-all duration-300 group-hover:bg-gray-600 group-hover:text-white wide-screen:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}