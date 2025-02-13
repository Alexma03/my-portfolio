import { Badge } from "flowbite-react";
import { studies } from "@/data/studiesTimelineData";
import Image from "next/image";

export default function StudiesTimeline() {
  return (
    <div className="h-full w-full rounded-lg px-5 py-6 sm:px-8 sm:py-10 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-5 xl:justify-between lg:justify-center md:justify-center max-w-6xl w-full h-full">
        {studies.map((study) => (
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
              <h3 className="text-left text-base md:text-xl lg:text-xl xl:text-lg short-laptop:text-sm text-gray-900 dark:text-white font-medium">
                {study.title}
              </h3>
              <span className="dark:text-slate-200 mt-2 text-left text-[10px] md:text-sm lg:text-sm xl:text-[10px] short-laptop:text-[10px]">
                {study.year}
              </span>
              <div className="text-left">
                <p className="py-1 font-semibold text-sm text-gray-700 dark:text-gray-300 short-laptop:text-xs">
                  {study.institution}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {study.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      className="text-[11px] md:text-xs lg:text-xs xl:text-[11px] short-laptop:text-[11px] text-gray-700 dark:text-gray-200 dark:bg-gray-700" 
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