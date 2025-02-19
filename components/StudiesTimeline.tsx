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
    console.log('Screen width changed:', screenWidth);
    setStudiesData(getStudies(screenWidth));
  }, [screenWidth]);

  return (
    <div className="h-full w-full rounded-lg p-8 sm:px-8 sm:py-10 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-5 xl:justify-between lg:justify-center md:justify-center max-w-6xl w-full h-full">
        {studiesData.map((study) => (
          <div key={study.id} className="w-full">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4 items-center justify-center">
                <div className="relative w-full">
                  <Image
                    src={study.img}
                    alt={study.title}
                    width={study.width}
                    height={study.height}
                    className="object-contain rounded-md filter drop-shadow-xl" 
                  />
                </div>
              </div>
              <h3 className="text-left text-lg text-white font-medium 2xl:pr-8 xl:pr-8 short-laptop:pr-4 short-laptop:text-lg wide-screen:text-2xl">
                {study.title}
              </h3>
              <span className="text-slate-200 mt-2 text-left text-[13px] wide-screen:text-md">
                {study.year}
              </span>
              <div className="text-left">
                <p className="py-1 font-semibold text-sm text-gray-300 wide-screen:text-lg">
                  {study.institution}
                </p>
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