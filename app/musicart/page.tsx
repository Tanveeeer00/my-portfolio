import React from "react";
import { JavascriptData } from "@/lib/data";
import { FaGitSquare } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import Zoomed from "@/components/Zoomed";

type javascriptProps = (typeof JavascriptData)[number];

export default function page({
  title,
  description,
  id,
  imageUrl,
  alter,
}: javascriptProps) {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="flex justify-center items-center flex-col">
        <span
          className="font-bold text-4xl mb-4 p-3 rounded-full
      border border-black/10 shadow-lg text-gray-600 bg-slate-50
      dark:border-white/20 dark:bg-transparent dark:text-sky-300"
        >
          Music Art
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4 mb-16 md:max-w-full">
          {JavascriptData.map((data) => (
            <ProjectCard key={data.id}>
              <div>
                {/* <Image
                src={data.imageUrl}
                alt="Javascript Project"
                quality={95}
                className="p-3"
              /> */}
                <Zoomed src={data.imageUrl} alt={data.alter} />
                <h3 className="font-bold text-2xl antialiased flex justify-center items-center mt-2">
                  {data.title}
                </h3>
                <p className="text-lg">{data.description}</p>
                <div className="flex justify-center items-center mt-3 mb-0">
                  <a
                    className="bg-white p-2 text-gray-700 
                  flex items-center text-[1.35rem] rounded-full w-10 
                  cursor-pointer borderBlack shadow-2xl dark:bg-transparent
                  dark:hover:text-sky-400 dark:text-white dark:border-white/70 "
                    href="https://github.com/Tanveeeer00"
                    target="_blank"
                  >
                    <FaGitSquare />
                  </a>
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </main>
  );
}
