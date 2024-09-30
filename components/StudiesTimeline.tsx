import { Timeline, Badge } from "flowbite-react";
import { studies } from "@/data/studiesTimelineData";
import useWindowSize from "@/hooks/useWindowSize"; // Asegúrate de importar el hook correctamente
import Image from "next/image";

export default function StudiesTimeline() {
  const size = useWindowSize();
  const isHorizontal = (size.width ?? 0) > 768; 

  return (
    <div className="h-full w-full rounded-lg p-10 bg-white bg-opacity-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studies.map((study) => (
          <div key={study.id}>
            <Timeline horizontal={isHorizontal}>
              <Timeline.Item className="mb-0 md:ml-6">
                <Timeline.Point />
                <Timeline.Content className="flex flex-col justify-normal">
                  <div className="flex flex-col">
                    <div className="flex justify-normal my-2">
                      <Image
                        src={study.img}
                        alt={study.title}
                        className="h-8 object-contain"
                      />
                    </div>
                    <Timeline.Title className="text-left">
                      {study.title}
                    </Timeline.Title>
                  </div>
                  <Timeline.Time className="dark:text-slate-200 text-left pt-1">
                    {study.year}
                  </Timeline.Time>
                  <Timeline.Body className="text-left pb-1">
                    <p>{study.institution}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {study.skills.map((skill, index) => (
                        <Badge key={index} color="info">
                          {skill}
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