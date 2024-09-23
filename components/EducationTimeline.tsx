import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { GraduationCap, Book, CheckCircle, Clock } from "lucide-react"

interface Study {
  id: number
  title: string
  institution: string
  year: string
  type: "degree" | "course" | "certification"
  completed: boolean
  description: string
  skills: string[]
}

const studies: Study[] = [
  {
    id: 1,
    title: "Ingeniería en Informática",
    institution: "Universidad Tecnológica",
    year: "2015 - 2019",
    type: "degree",
    completed: true,
    description: "Programa de grado en ciencias de la computación y desarrollo de software.",
    skills: ["Java", "Algoritmos", "Bases de Datos", "Redes"]
  },
  {
    id: 2,
    title: "Desarrollo Web Full Stack",
    institution: "Bootcamp CodeAcademy",
    year: "2020",
    type: "course",
    completed: true,
    description: "Curso intensivo de desarrollo web full stack.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2021",
    type: "certification",
    completed: false,
    description: "Certificación profesional en desarrollo de aplicaciones en AWS.",
    skills: ["AWS", "Cloud Computing", "Serverless", "DevOps"]
  }
]

const getIcon = (type: Study["type"]) => {
  switch (type) {
    case "degree":
      return <GraduationCap className="h-6 w-6" />
    case "course":
      return <Book className="h-6 w-6" />
    case "certification":
      return <GraduationCap className="h-6 w-6" />
  }
}

export default function EnhancedHorizontalTimelineCard() {
  return (
    <Card className="w-full bg-opacity-10 bg-white text-white overflow-hidden">
      <CardContent className="p-6">
        <div className="relative flex flex-nowrap pb-4">
          {studies.map((study, index) => (
            <div key={study.id} className="flex-none w-80">
              <div className="mb-2 flex items-center justify-center relative">
                <div className="flex items-center justify-center w-12 h-8 rounded-full bg-primary text-primary-foreground z-10">
                  {getIcon(study.type)}
                </div>
                {index < studies.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-full h-px bg-gray-700 dotted-line" />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{study.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{study.institution}</p>
                <p className="text-sm font-medium text-gray-300 mb-2">{study.year}</p>
                <Badge variant={study.completed ? "default" : "secondary"} className="mb-2">
                  {study.completed ? (
                    <><CheckCircle className="h-4 w-4 mr-1" /> Completado</>
                  ) : (
                    <><Clock className="h-4 w-4 mr-1" /> En progreso</>
                  )}
                </Badge>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-sm text-gray-400 truncate cursor-help">{study.description}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{study.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {study.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}