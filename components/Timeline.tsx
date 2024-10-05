import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "About Me",
      content: (
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome to My Portfolio
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mt-4">
            I am a passionate developer with a love for creating beautiful and functional web applications.
          </p>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
            Projects
          </h2>
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
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
            Skills
          </h2>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Contact",
      content: (
        <div className="py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
            Contact
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
            Feel free to reach out to me at:
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mt-4">
            Email: example@example.com
          </p>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}