import React from "react";
import { GlobeDemo } from "./Globe";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
      Hi,I am Jatin 👋
      </h1>
      <p className="mt-10 mb-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quam libero. Vitae qui, aliquid temporibus deserunt minus sunt necessitatibus quae, eaque magnam possimus quos maiores, aperiam optio culpa cupiditate? </p>
      <GlobeDemo />
      <div className="mb-10" />
    </div>
  );
}