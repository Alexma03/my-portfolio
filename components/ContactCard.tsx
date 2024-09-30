import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ContactCard() {
  return (
    <Card className="overflow-hidden h-full w-full">
      <CardContent className="p-0">
        <div className="flex flex-col items-center align-middle h-full py-2 px-3 short-laptop:flex-row">
          <div className="flex flex-col items-center">
            <div className="p-2 m-2 bg-primary/10 rounded-full">
              <MailIcon className="h-8 w-8 text-primary text-center" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contáctame</h3>
              <p className="text-sm text-muted-foreground m-2">
                ¿Tienes un proyecto en mente? Deja tu correo y hablemos
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row w-full max-w-sm items-center short-laptop:flex-col">
            <Input type="email" placeholder="Email" />
            <Button size="sm" className="whitespace-nowrap">
              Enviar mensaje
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
