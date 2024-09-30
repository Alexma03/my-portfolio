import { Timeline, Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg py-6 px-4 short-laptop:p-5 bg-white bg-opacity-10">
      <div className="flex flex-col gap-4 short-laptop:gap-2">
        {workExperienceItems.map((work, index) => (
          <div key={index}>
            <Timeline>
              <Timeline.Item className="mb-0 ml-6">
                <Timeline.Point className="" />
                <Timeline.Content className="flex flex-col justify-normal">
                  <div className="flex flex-row mb-4 short-laptop:mb-2">
                    <div className="flex justify-normal filter drop-shadow-2xl">
                      <Image
                        src={work.logo}
                        alt={work.company}
                        height={work.height}
                        width={work.width}
                        className="short-laptop:h-7 short-laptop:w-8" // Ajusta el tamaño de la imagen
                      />
                    </div>
                    <Timeline.Title className="text-left flex items-center pl-6 short-laptop:text-md short-laptop:pl-4">
                      {work.company}
                    </Timeline.Title>
                  </div>
                  <Timeline.Time className="dark:text-slate-200 text-left pb-1 short-laptop:pb-0 short-laptop:text-sm">
                    {work.startDate} - {work.endDate || "Presente"}
                  </Timeline.Time>
                  <Timeline.Body className="text-left short-laptop:text-sm">
                    <p className="py-1">{work.position}</p>
                    <p>{work.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.technologies.map((tech, index) => (
                        <Badge key={index} color="info" className="short-laptop:text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
}