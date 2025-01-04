import { Badge } from "flowbite-react";
import { studies } from "@/data/studiesTimelineData";
import Image from "next/image";

export default function StudiesTimeline() {
  return (
    <div className="h-full w-full rounded-lg px-6 py-8 sm:px-10 sm:py-12 bg-white bg-opacity-10 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-6 xl:justify-between lg:justify-center md:justify-center max-w-6xl w-full h-full">
        {studies.map((study) => (
          <div key={study.id} className="w-full">
            <div className="flex flex-col justify-normal">
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
              <h3 className="text-left text-lg md:text-2xl lg:text-2xl xl:text-xl text-gray-900 dark:text-white font-medium">
                {study.title}
              </h3>
              <span className="dark:text-slate-200 mt-2 text-left text-xs md:text-base lg:text-base xl:text-sm">
                {study.year}
              </span>
              <div className="text-left">
                <p className="py-1 font-semibold text-base text-gray-700 dark:text-gray-300">
                  {study.institution}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {study.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      className="text-xs md:text-sm lg:text-sm xl:text-xs text-gray-700 dark:text-gray-200 dark:bg-gray-700" 
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