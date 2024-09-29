import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  projectUrl?: string;
}

export default function CurrentWorkingOn({
  title = "Mi Proyecto Actual",
  description = "Una breve descripción de mi proyecto actual y sus objetivos principales.",
  imageUrl = "/images/Imagen-social-network.jpeg",
  technologies = ["React", "Next.js", "Tailwind CSS"],
  projectUrl = "#",
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full w-full bg-white bg-opacity-10">
      <CardContent className="p-0">
        <div className="flex flex-col xl:flex-row">
          <div className="relative w-full xl:w-1/3">
            <img
              alt={title}
              className="object-cover w-full h-64 xl:h-full"
              src={imageUrl}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
            />
            <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
              En progreso
            </Badge>
          </div>
          <div className="flex flex-col justify-between p-6 w-full lg:w-2/3">
            <div className="text-start">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Button className="self-start" variant="outline">
              Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}