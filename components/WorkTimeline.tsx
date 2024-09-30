import { Timeline, Badge } from "flowbite-react";
import { workExperienceItems } from "@/data/workTimelineData";
import Image from "next/image";

export default function WorkExperienceTimeline() {
  return (
    <div className="h-full w-full rounded-lg p-10 bg-white bg-opacity-10">
      <div className="flex flex-col gap-4">
        {workExperienceItems.map((work, index) => (
          <div key={index}>
            <Timeline>
              <Timeline.Item className="mb-0 ml-6">
                <Timeline.Point className=""/>
                <Timeline.Content className="flex flex-col justify-normal">
                  <div className="flex flex-row">
                    <div className="flex justify-normal mb-4 filter drop-shadow-2xl">
                      <Image
                        src={work.logo}
                        alt={work.company}
                        className="h-8 object-contain"
                      />
                    </div>
                    <Timeline.Title className="text-left pl-6">
                    {work.company}
                  </Timeline.Title>
                  </div>
                  <Timeline.Time className="dark:text-slate-200 text-left pb-1">
                    {work.startDate} - {work.endDate || "Presente"}
                  </Timeline.Time>
                  <Timeline.Body className="text-left">
                    <p className="py-1">{work.position}</p>
                    <p>{work.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.technologies.map((tech, index) => (
                        <Badge key={index} color="info">
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
