import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GraduationCap, Book, CheckCircle, Clock } from "lucide-react";
import { Timeline, TimelineItem, Button } from "flowbite-react";

interface Study {
  id: number;
  title: string;
  institution: string;
  year: string;
  type: "degree" | "course" | "certification";
  completed: boolean;
  description: string;
  skills: string[];
}

const studies: Study[] = [
  {
    id: 1,
    title: "Ingeniería en Informática",
    institution: "Universidad Tecnológica",
    year: "2015 - 2019",
    type: "degree",
    completed: true,
    description:
      "Programa de grado en ciencias de la computación y desarrollo de software.",
    skills: ["Java", "Algoritmos", "Bases de Datos", "Redes"],
  },
  {
    id: 2,
    title: "Desarrollo Web Full Stack",
    institution: "Bootcamp CodeAcademy",
    year: "2020",
    type: "course",
    completed: true,
    description: "Curso intensivo de desarrollo web full stack.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2021",
    type: "certification",
    completed: false,
    description:
      "Certificación profesional en desarrollo de aplicaciones en AWS.",
    skills: ["AWS", "Cloud Computing", "Serverless", "DevOps"],
  },
];

const getIcon = (type: Study["type"]) => {
  switch (type) {
    case "degree":
      return <GraduationCap className="h-6 w-6" />;
    case "course":
      return <Book className="h-6 w-6" />;
    case "certification":
      return <GraduationCap className="h-6 w-6" />;
  }
};

export default function EnhancedHorizontalTimelineCard() {
  return (
    <div className="h-full w-full rounded-lg p-10 bg-white bg-opacity-10">
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
