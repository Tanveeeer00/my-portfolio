import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";

import Project from "@/components/Project";

export default function Projects() {
  return (
    <div>
      <section id="projects" className="scroll-mt-28">
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
