import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

export default function ContactCard() {
  const [email, setEmail] = useState("");
  const [mensaje, setMessage] = useState("");
  const [step, setStep] = useState(1);

  // Añadir función para validar email
  const isValidEmail = (email: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleContinue = () => {
    // Check si el email no está vacío y es válido
    if (email.trim() !== "" && isValidEmail(email)) {
      setStep(2);
    }
  };

  const handleSend = async () => {
    const { data, error } = await supabase
      .from("Mensajes")
      .insert({ email, mensaje });
  
    if (error) {
      console.error("Error al guardar el mensaje:", error);
    } else {
      console.log("Mensaje guardado:", data);
    }
  
    setStep(3);
  };

  const handleDelete = () => {
    setEmail("");
    setMessage("");
    setStep(1);
  };

  return (
    <Card className="overflow-hidden h-full w-full">
      <CardContent className="p-0 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full py-4 px-6">
          <div className="flex flex-col items-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MailIcon className="h-6 w-6 text-primary text-center" />
            </div>
          </div>
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 items-center"
                >
                  <p className="text-base text-muted-foreground text-center w-full">
                    ¿Quieres contactar conmigo? <br /> 
                    Déjame tu correo y te responderé lo antes posible.
                  </p>
                  <div className="flex flex-row gap-4 w-full">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleContinue();
                        }
                      }}
                      className={`flex-1 ${email && !isValidEmail(email) ? "border-red-500" : ""}`} // añade borde rojo si es inválido
                    />
                    <Button
                      size="sm"
                      className="whitespace-nowrap transition-transform duration-150 ease-in-out active:scale-95"
                      onClick={handleContinue}
                    >
                      Continuar
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 items-center"
                >
                  <p className="text-base text-muted-foreground text-center w-full">
                    Correo de contacto: <strong>{email}</strong>
                  </p>
                  <Textarea
                    placeholder="Escribe aquí tu mensaje"
                    value={mensaje}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full input resize-none"
                  />
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="sm"
                      className="whitespace-nowrap transition-transform duration-150 ease-in-out active:scale-95"
                      onClick={handleSend}
                    >
                      Enviar mensaje
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="whitespace-nowrap transition-transform duration-150 ease-in-out active:scale-95"
                      onClick={handleDelete}
                    >
                      Eliminar
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 items-center"
                >
                  <p className="text-base text-muted-foreground text-center w-full">
                    Mensaje enviado por: <strong>{email}</strong>
                  </p>
                  <p className="text-base mb-4">{mensaje}</p>
                  <Button
                    size="sm"
                    className="whitespace-nowrap transition-transform duration-150 ease-in-out active:scale-95"
                    onClick={() => {
                      setMessage("");
                      setStep(1);
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}