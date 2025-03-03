import React from "react";
import { EvervaultCard } from "./ui/evervault-card";

export function NameCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <EvervaultCard 
        className="my-4 sm:my-5 md:my-6 lg:my-8 xl:my-0"
        text={
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold sm:text-2xl md:text-2xl xl:text-xl 2xl:text-3xl">Hola soy Alejandro Marcos 👋</h1>
            <h2 className="text-lg font-medium 2xl:text-xl wide-screen:text2x">Ingeniero de Software</h2>
          </div>
        }
      />
    </div>
  );
}