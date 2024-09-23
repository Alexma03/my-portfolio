"use client";

import { useState, useRef, useEffect } from "react";
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
  const [hoverCardPosition, setHoverCardPosition] = useState({ x: 0, y: 0 });
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (
    item: WorkExperienceItem,
    event: React.MouseEvent
  ) => {
    setHoveredItem(item);
    updateHoverCardPosition(event);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredItem) {
      updateHoverCardPosition(event);
    }
  };

  const updateHoverCardPosition = (event: React.MouseEvent) => {
    if (timelineRef.current) {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const x = event.clientX - timelineRect.left;
      const y = event.clientY - timelineRect.top;
      setHoverCardPosition({ x, y });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setHoveredItem(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-cente w-full h-full">
      <Card className="w-full bg-white bg-opacity-10">
        <CardContent className="py-4 px-6">
          <div
            className="space-y-8"
            ref={timelineRef}
            onMouseMove={handleMouseMove}
          >
            {workExperienceItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8"
                onMouseEnter={(e) => handleMouseEnter(item, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300" />
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -ml-2 border-4 border-white" />
                <div className="flex items-center mb-2">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 mr-4 rounded-full shadow-md"
                  />
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                </div>
                <p className="text-sm mb-1 font-medium">{item.position}</p>
                <div className="flex items-center text-xs text-white-600 mb-2">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-xs text-white-600 mb-2">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>
                    {item.startDate} - {item.endDate || "Presente"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {hoveredItem && (
        <Card
          className="bg-white bg-opacity-70 text-black absolute z-50 max-w-xs shadow-lg transition-opacity duration-200 ease-in-out"
          style={{
            left: `${hoverCardPosition.x}px`,
            top: `${hoverCardPosition.y}px`,
            opacity: hoveredItem ? 1 : 0,
            pointerEvents: hoveredItem ? "auto" : "none",
          }}
        >
          <CardContent className="p-4">
            <h4 className="font-bold mb-2">{hoveredItem.company}</h4>
            <p className="text-sm mb-2">{hoveredItem.position}</p>
            <p className="text-xs mb-2">{hoveredItem.description}</p>
            <div className="flex items-center text-xs text-gray-600">
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              <span>
                {hoveredItem.startDate} - {hoveredItem.endDate || "Presente"}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
