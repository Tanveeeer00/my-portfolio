import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <section>
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

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem]border border-black/5 overflow-hidden sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-black/[0.7] px-3 py-1 text-[0.7] uppercase tracking-wider rounded-full text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image src={imageUrl} alt="project that i worked on" quality={95} />
    </section>
  );
}
