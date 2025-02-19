import React from "react";

export function NameCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-white bg-opacity-10 text-white rounded-lg lg:my-8 my-6 2xl:my-8">
      <h1 className="text-xl font-bold sm:text-2xl md:text-2xl xl:text-xl 2xl:text-3xl">Hola soy Alejandro Marcos 👋</h1>
      <h2 className="text-lg font-medium">Ingeniero de Software</h2>
    </div>
  );
}