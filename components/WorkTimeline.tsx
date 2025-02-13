import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg px-5 py-6 sm:p-10 xl:p-6 2xl:p-8 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 2xl:justify-center xl:justify-between xl:space-y-0 lg:justify-center md:justify-center max-w-3xl w-full h-full lg:space-y-10 md:space-y-10 2xl:space-y-4">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col">
              <div className="flex flex-row mb-2 items-center">
                <div className="flex items-center">
                  <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-8 xl:h-8">
                    <Image
                      fill
                      src={work.logo}
                      alt={work.company}
                      className="object-contain rounded-md filter drop-shadow-xl" 
                    />
                  </div>
                </div>
                <h3 className="text-left flex items-center pl-4 text-base md:text-xl lg:text-xl xl:text-lg text-gray-900 dark:text-white font-medium">
                  {work.company}
                </h3>
              </div>
              <span className="dark:text-slate-200 text-left text-[10px] md:text-sm lg:text-sm xl:text-[11px]">
                {work.startDate} - {work.endDate || "Presente"}
              </span>
              <div className="text-left">
                <p className="py-1 font-semibold text-sm md:text-lg lg:text-lg xl:text-base text-gray-700 dark:text-gray-300">
                  {work.position}
                </p>
                <p className="text-[10px] md:text-sm lg:text-sm xl:text-[12px] text-gray-600 dark:text-gray-400">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {work.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      className="text-[10px] md:text-xs lg:text-xs xl:text-[11px] text-gray-700 dark:text-gray-200 dark:bg-gray-700" 
                    >
                      {tech}
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