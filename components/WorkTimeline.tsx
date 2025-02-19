import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg p-7 bg-white bg-opacity-10 flex items-center justify-center 2xl:px-10">
      <div className="flex flex-col items-center justify-center gap-7 max-w-3xl size-full">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col">
              <div className="flex flex-row mb-2 items-center">
                <div className="flex items-center">
                  <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-8 xl:h-8 wide-screen:h-12 wide-screen:w-12">
                    <Image
                      fill
                      src={work.logo}
                      alt={work.company}
                      className="object-contain rounded-md filter drop-shadow-xl"
                    />
                  </div>
                </div>
                <h3 className="text-left flex items-center pl-4 wide-screen:text-3xl text-xl 2xl:text-2xl xl:text-lg text-gray-900 dark:text-white font-medium">
                  {work.company}
                </h3>
              </div>
              <div className="text-left flex flex-col short-laptop:flex-row short-laptop:items-center short-laptop:gap-4">
                <p className="py-1 font-semibold text-sm md:text-lg lg:text-lg xl:text-base 2xl:text-lg wide-screen:text-2xl text-gray-700 dark:text-gray-300">
                  {work.position}
                </p>
                <span className="dark:text-slate-200 text-[11px] md:text-sm lg:text-sm xl:text-[11px] wide-screen:text-base">
                  {work.startDate} - {work.endDate || "Presente"}
                </span>
              </div>
              <p className="text-[12px] md:text-sm lg:text-sm xl:text-[14px] text-gray-600 dark:text-gray-400 text-left wide-screen:text-base mt-2">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
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
        ))}
      </div>
    </div>
  );
}
