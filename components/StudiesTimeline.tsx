import { Timeline, Badge } from "flowbite-react";
import { studies } from "@/data/studiesTimelineData";

export default function StudiesTimeline() {
  return (
    <div className="h-full w-full rounded-lg p-10 bg-white bg-opacity-10">
      <div className="grid grid-cols-3 gap-4">
        {studies.map((study) => (
          <div key={study.id} className="col-span-1">
            <Timeline horizontal>
                <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content className="flex flex-col justify-normal">
                  <div className="flex justify-normal my-4">
                  <img src={study.img} alt={study.title} className="h-8 object-contain" />
                  </div>
                  <Timeline.Time className="dark:text-slate-200 text-left pb-1">{study.year}</Timeline.Time>
                  <Timeline.Title className="text-left pb-1">{study.title}</Timeline.Title>
                  <Timeline.Body className="text-left pb-1">
                  <p><strong>Institución:</strong> {study.institution}</p>
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