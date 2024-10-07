import Image from "next/image";
import React from "react";

export function Projects() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="Project 1"
            width={500}
            height={500}
            className="rounded-lg object-cover h-60 w-full shadow-lg"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mt-4">
            Project 1 Description
          </p>
        </div>
        <div>
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="Project 2"
            width={500}
            height={500}
            className="rounded-lg object-cover h-60 w-full shadow-lg"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mt-4">
            Project 2 Description
          </p>
        </div>
      </div>
    </div>
  );
}