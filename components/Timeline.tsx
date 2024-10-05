import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export function TimelineDemo() {
  const data = [
    {
      title: "About Me",
      content: <Hero />,
    },
    {
      title: "Projects",
      content: <Projects />,
    },
    {
      title: "Skills",
      content: <Skills />,
    },
    {
      title: "Contact",
      content: <Contact />,
    },
  ];

  return <Timeline data={data} />;
}