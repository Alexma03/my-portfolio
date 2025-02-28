import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg p-6 2xl-short:p-5 wide-screen:p-7 bg-white bg-opacity-10 flex items-center justify-center ">
      <div className="size-full flex flex-col gap-6 w-full max-w-3xl xl:gap-4 wide-screen:gap-6">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="flex-1 flex flex-col min-w-0">
            <div
              className="flex flex-col p-4 2xl:px-6 justify-center h-full bg-white/5 rounded-lg 
              transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg 
              cursor-pointer group"
            >
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-4 xl:gap-5">
                  <div className="size-14 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={work.logo}
                      alt={work.company}
                      fill
                      className="object-contain rounded-lg filter drop-shadow-xl"
                    />
                  </div>
                  <h3
                    className="text-left text-base text-white font-medium 2xl:text-xl wide-screen:text-xl 
                    wide-screen:font-bold transition-colors duration-300 group-hover:text-blue-400 xl:text-lg"
                  >
                    {work.company}
                  </h3>
                </div>

                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 md:flex-col md:items-start 2xl:flex-row 2xl:items-center">
                    <h2
                      className="font-semibold text-sm text-gray-300 wide-screen:text-base 2xl-short:text-lg
                      transition-colors duration-300 group-hover:text-gray-200"
                    >
                      {work.position}
                    </h2>
                    <span className="text-gray-400 hidden 2xl:inline">•</span>
                    <span className="text-slate-200 text-xs transition-colors duration-300 group-hover:text-slate-100">
                      {work.startDate} - {work.endDate || "Presente"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 xl:text-sm line-clamp-5 xl:line-clamp-2 2xl-tall:line-clamp-3 wide-screen:line-clamp-3 2xl-short:line-clamp-4 transition-colors duration-300 group-hover:text-gray-300">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 xl:gap-2 mt-3">
                    {work.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        color="gray"
                        className="text-[11px] md:text-xs lg:text-xs xl:text-xs text-gray-200 bg-gray-700 
                          transition-all duration-300 group-hover:bg-gray-600 group-hover:text-white wide-screen:text-sm"
                      >
                        {tech}
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
