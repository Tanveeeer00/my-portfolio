import React from "react";

export default function ProjectCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-2 max-w-[100%] m-3 p-3 border border-black/5 rounded-lg h-full shadow-xl dark:border-white/25 dark:shadow-slate-700">
      {children}
    </div>
  );
}
