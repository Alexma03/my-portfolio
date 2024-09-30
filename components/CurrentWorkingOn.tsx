import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { projectData } from "@/data/currentWorkingOnData";
import Image from "next/image";

export default function CurrentWorkingOn() {
  const { title, description, imageUrl, technologies = [] } = projectData;

  return (
    <Card className="overflow-hidden h-full w-full bg-white bg-opacity-10">
      <CardContent className="p-0">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/3 relative">
            <Image
              alt={title}
              src={imageUrl}
              width={2048}
              height={2048}
              className="object-cover w-full h-64 xl:h-full short-laptop:h-48"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
            />
            <Badge className="absolute top-2 left-2 bg-yellow-500 text-black short-laptop:text-xs">
              En progreso
            </Badge>
          </div>
            <div className="flex flex-col justify-between p-6 w-full lg:w-2/3 short-laptop:py-3 short-laptop:px-8 short-laptop:justify-start">
            <div className="text-start">
              <h3 className="text-2xl font-bold mb-2 short-laptop:text-lg short-laptop:mb-1">{title}</h3>
              <p className="text-muted-foreground mb-4 dark:text-slate-300 text-slate-800 short-laptop:text-sm short-laptop:mb-2">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 short-laptop:mb-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="short-laptop:text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Button className="self-start short-laptop:text-xs short-laptop:py-1 short-laptop:px-2" variant="outline">
              Ver proyecto <ExternalLink className="ml-2 h-4 w-4 short-laptop:h-3 short-laptop:w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}