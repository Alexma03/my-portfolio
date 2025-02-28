import { Badge } from "flowbite-react";
import { getStudies } from "@/data/studiesTimelineData";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { useState, useEffect } from "react";

export default function StudiesTimeline() {
  const { width: screenWidth } = useWindowSize();
  const [studiesData, setStudiesData] = useState(getStudies(screenWidth || 0));

  useEffect(() => {
    setStudiesData(getStudies(screenWidth || 0));
  }, [screenWidth]);

  return (
    <div className="h-full w-full rounded-lg p-6 bg-white bg-opacity-10 flex items-center justify-center wide-screen:p-8 xl:p-5 2xl-tall:p-6">
      <div className="size-full flex flex-col md:flex-row md:gap-4 items-stretch gap-6 wide-screen:gap-6 lg:justify-center md:justify-center w-full xl:gap-5 xl:justify-center">
        {studiesData.map((study) => (
          <div key={study.id} className="flex-1 flex flex-col min-w-0">
            <div
              className="flex flex-col p-6 justify-center h-full bg-white/5 rounded-lg 
              transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg 
              cursor-pointer group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4 xl:gap-5">
                  <div
                    className="size-16 2xl:size-20 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  >
                    <Image
                      src={study.img}
                      alt={study.title}
                      fill
                      className="object-contain rounded-lg filter drop-shadow-xl"
                    />
                  </div>
                  <h3
                    className="text-left text-base text-white font-medium 2xl:text-xl wide-screen:text-xl 
                    wide-screen:font-bold transition-colors duration-300 group-hover:text-blue-400 xl:text-lg"
                  >
                    {study.title}
                  </h3>
                </div>

                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 md:flex-col md:items-start 2xl:flex-row 2xl:items-center">
                    <p
                      className="font-semibold text-sm text-gray-300 wide-screen:text-base 2xl-short:text-lg
                      transition-colors duration-300 group-hover:text-gray-200"
                    >
                      {study.institution}
                    </p>
                    <span className="text-gray-400 hidden 2xl:inline">•</span>
                    <span className="text-slate-200 text-xs transition-colors duration-300 group-hover:text-slate-100">
                      {study.year}
                    </span>
                  </div>
                    <p
                    className="text-gray-400 text-xs xl:text-sm mt-2 line-clamp-5 
                    xl:line-clamp-2 2xl-tall:line-clamp-3 wide-screen:line-clamp-4 2xl-short:line-clamp-5
                    transition-colors duration-300 group-hover:text-gray-300"
                    >
                    {study.description}
                    </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 xl:gap-2">
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
