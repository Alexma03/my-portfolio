import React from "react";
import { EvervaultCard } from "./ui/evervault-card";

export function NameCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <EvervaultCard 
        className=""
        text={
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">Hola soy Alejandro Marcos 👋</h1>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-medium">Ingeniero de Software</h2>
          </div>
        }
      />
    </div>
  );
}