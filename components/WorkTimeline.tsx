"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, BriefcaseIcon } from "lucide-react";

interface WorkExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  logo: string;
  description: string;
}

const workExperienceItems: WorkExperienceItem[] = [
  {
    company: "Santander Digital Services",
    position: "Ingeniero de Software Analista I",
    location: "Madrid, España",
    startDate: "2024-07",
    endDate: null,
    technologies: ["Spring Boot", "Java", "SQL", "Github"],
    logo: "/images/santander.png",
    description:
      "Lideré el desarrollo de aplicaciones web escalables y participé en la arquitectura de microservicios.",
  },
  {
    company: "Carrefour Tech",
    position: "Full Stack Developer",
    location: "Madrid, España",
    startDate: "2023-07",
    endDate: "2024-07",
    technologies: ["Spring Boot", "Angular", "MongoDB", "PostgreSQL"],
    logo: "/images/carrefour.png",
    description:
      "Desarrollé y mantuve aplicaciones web full-stack para clientes en diversos sectores.",
  },
];

export default function WorkExperienceTimeline() {
  const [hoveredItem, setHoveredItem] = useState<WorkExperienceItem | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item: WorkExperienceItem) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Card className="w-full h-full bg-white bg-opacity-0 text-white">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Experiencia Laboral</h2>
        <div className="space-y-6">
          {workExperienceItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-gray-300 last:border-l-0"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full -ml-2" />
              <div className="flex items-center mb-2">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-16 h-10 mr-2"
                />
                <h3 className="text-lg font-semibold">{item.company}</h3>
              </div>
              <p className="text-sm mb-1">{item.position}</p>
              <div className="flex items-center text-xs text-gray-300 mb-2">
                <MapPinIcon className="w-4 h-4 mr-1" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-xs text-gray-300 mb-2">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {item.startDate} - {item.endDate || "Presente"}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-blue-500 text-white"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {hoveredItem && (
        <div
          className="fixed z-50 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          <h4 className="font-bold mb-2">{hoveredItem.company}</h4>
          <p className="text-sm mb-2">{hoveredItem.position}</p>
          <p className="text-xs mb-2">{hoveredItem.description}</p>
          <div className="flex items-center text-xs text-gray-600">
            <BriefcaseIcon className="w-4 h-4 mr-1" />
            <span>
              {hoveredItem.startDate} - {hoveredItem.endDate || "Presente"}
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}
