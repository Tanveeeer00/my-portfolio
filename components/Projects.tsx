"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { useSectionInView } from "@/lib/hooks";
// import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  // const { ref } = useSectionInView("Projects", 0.5);
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <div>
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
