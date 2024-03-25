import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <div className="m-10">
      <Link href="/">
        <button
          className="group flex items-center justify-center 
      gap-2 h-[3rem] w-[8rem]
      rounded-full outline-none transition-all focus:scale-110
      active:scale-105 
      disabled:scale-100 disabled:bg-opacity-65 border
      bg-white bg-opacity-10 text-black shadow-lg
      dark:bg-black/50 dark:text-gray-200 dark:border-white/20
      "
        >
          Back
        </button>
      </Link>
    </div>
  );
}
