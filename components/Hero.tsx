import React from "react";
import { GlobeDemo } from "./Globe";

export function Hero() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to My Portfolio
      </h1>
      <GlobeDemo />
    </div>
  );
}