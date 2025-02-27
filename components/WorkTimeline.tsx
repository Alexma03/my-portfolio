import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full p-6 bg-white bg-opacity-10 flex items-center justify-center rounded-lg xl:p-5 2xl:p-6">
      <div className="size-full flex flex-col gap-6 w-full max-w-3xl xl:gap-5">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="size-full">
            <div
              className="size-full flex flex-col justify-center items-center bg-white/5 rounded-lg p-4
              transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg 
              cursor-pointer group 2xl:p-6 wide-screen:pt-3"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <div
                    className="size-10 relative flex-shrink-0 xl:size-12 wide-screen:size-14
                    transition-transform duration-300 group-hover:scale-105 "
                  >
                    <Image
                      src={work.logo}
                      alt={work.company}
                      fill
                      className="object-contain rounded-lg filter drop-shadow-xl"
                    />
                  </div>
                  <h3
                    className="text-left text-lg text-white font-medium xl:text-xl
                    transition-colors duration-300 group-hover:text-blue-400"
                  >
                    {work.company}
                  </h3>
                </div>

                <div className="text-left">
                  <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-2">
                    <h2 className="font-bold text-base text-gray-300
                      transition-colors duration-300 group-hover:text-gray-200">
                      {work.position}
                    </h2>
                    <span className="text-gray-400 hidden xl-short:inline">•</span>
                    <span className="text-slate-200 text-sm transition-colors duration-300 group-hover:text-slate-100 xl:text-xs xl-short:text-sm xl-short:font-medium">
                      {work.startDate} - {work.endDate || "Presente"}
                    </span>
                  </div>
                  <p
                    className="text-gray-400 text-xs mt-2 line-clamp-3 xl:line-clamp-2 2xl:line-clamp-4 xl-short:line-clamp-3 xl-short:text-sm
                    transition-colors duration-300 group-hover:text-gray-300 xl-tall:line-clamp-3 xl-tall:text-sm wide-screen:line-clamp-2"
                  >
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {work.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        color="gray"
                        className="text-xs text-gray-200 bg-gray-700 
                          transition-all duration-300 group-hover:bg-gray-600 group-hover:text-white"
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
