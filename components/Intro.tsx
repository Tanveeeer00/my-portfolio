"use client";
import Image from "next/image";
import React, { useRef } from "react";
import mine from "@/public/mine.jpg";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGitSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={mine}
            alt="Tanveer Shaikh"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="rounded-full h-32 w-32 object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tanveer Shaikh.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> from Mumbai with
        a strong focus on <span className="font-bold"> the MERN stack</span>. I
        enjoy building <span className="italic">sites & apps</span>
        <span> Which solve real problems</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border shadow-xl"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack shadow-xl"
          href="/Arpit_singh(resume).pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack shadow-xl"
          href="https://www.linkedin.com/in/tanveer-shaikh00/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack shadow-xl "
          href="https://github.com/Tanveeeer00"
          target="_blank"
        >
          <FaGitSquare />
        </a>
      </motion.div>
    </section>
  );
}
