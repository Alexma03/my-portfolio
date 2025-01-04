import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg px-6 py-8 sm:px-10 sm:py-12 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8 xl:justify-between xl:space-y-0 lg:justify-center md:justify-center max-w-3xl w-full h-full lg:space-y-12 md:space-y-12">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col justify-normal">
              <div className="flex flex-row mb-2 items-center">
                <div className="flex justify-normal items-center">
                  <div className="relative w-10 h-10 lg:w-12 lg:h-12 md:w-12 md:h-12 xl:w-10 xl:h-10">
                    <Image
                      fill
                      src={work.logo}
                      alt={work.company}
                      className="object-contain rounded-md filter drop-shadow-xl" 
                    />
                  </div>
                </div>
                <h3 className="text-left flex items-center pl-4 text-lg md:text-2xl lg:text-2xl xl:text-xl text-gray-900 dark:text-white font-medium">
                  {work.company}
                </h3>
              </div>
              <span className="dark:text-slate-200 text-left text-xs md:text-base lg:text-base xl:text-sm">
                {work.startDate} - {work.endDate || "Presente"}
              </span>
              <div className="text-left">
                <p className="py-1 font-semibold text-base md:text-xl lg:text-xl xl:text-lg text-gray-700 dark:text-gray-300">
                  {work.position}
                </p>
                <p className="text-xs md:text-base lg:text-base xl:text-sm text-gray-600 dark:text-gray-400">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {work.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      className="text-xs md:text-sm lg:text-sm xl:text-xs text-gray-700 dark:text-gray-200 dark:bg-gray-700" 
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
