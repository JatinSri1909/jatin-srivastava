import React from "react";

export function Hero() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to My Portfolio
      </h1>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mt-4">
        I am a passionate developer with a love for creating beautiful and functional web applications.
      </p>
    </div>
  );
}