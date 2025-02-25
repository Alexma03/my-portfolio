import { Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="size-full rounded-lg p-8 bg-white bg-opacity-10">
        <div className="flex flex-col gap-6 size-full justify-center items-center">
        {workExperienceItems.map((work, index) => (
          <div key={index} className="size-full">
            <div className="flex flex-col h-full justify-center items-center bg-white/5 rounded-lg p-6
              transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg 
              cursor-pointer group">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <div className="size-12 relative flex-shrink-0
                    transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={work.logo}
                      alt={work.company}
                      fill
                      className="object-contain rounded-lg filter drop-shadow-xl"
                    />
                  </div>
                  <h3 className="text-left text-xl text-white font-medium 
                    transition-colors duration-300 group-hover:text-blue-400">
                    {work.company}
                  </h3>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg text-gray-300
                      transition-colors duration-300 group-hover:text-gray-200">
                      {work.position}
                    </h2>
                    <span className="text-gray-400">•</span>
                    <span className="text-slate-200 text-base transition-colors duration-300 group-hover:text-slate-100">
                      {work.startDate} - {work.endDate || "Presente"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-3 line-clamp-3 
                    transition-colors duration-300 group-hover:text-gray-300">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        color="gray"
                        className="text-sm text-gray-200 bg-gray-700 
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
