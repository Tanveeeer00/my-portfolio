"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
// import {useSectionInView} from "@/lib"

export default function About() {
  // const { ref, inView } = useInView();
  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection]);
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-[1.25rem]">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Bachelor of Science in Information Technology
        </span>
        , I decided to pursue my passion for web development. Through YouTube
        tutorials, blogs, and comprehensive documentation and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p className="text-[1.25rem]">
        <span className="italic">When I'm not coding</span>, I enjoy composing
        music, watching animes, writing stories, and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning Japanese.
      </p>
    </motion.section>
  );
}
