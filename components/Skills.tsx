import React from "react";

export function Skills() {
  return (
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
  );
}