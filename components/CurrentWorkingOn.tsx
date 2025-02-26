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
      <CardContent className="p-0 h-full">
        <div className="flex flex-col xl:flex-row h-full">
          <div className="w-full xl:w-1/3 relative h-full">
            <Image
              alt={title}
              src={imageUrl}
              width={2048}
              height={2048}
              className="object-cover w-full h-full"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
            />
            <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
              En progreso
            </Badge>
          </div>
          <div className="flex flex-col justify-between p-6 w-full lg:w-2/3 h-full">
            <div className="text-start flex-grow">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4 dark:text-slate-300 text-slate-800">
                {description}
              </p>
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