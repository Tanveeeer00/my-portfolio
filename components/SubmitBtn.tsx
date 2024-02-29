import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center 
      gap-2 h-[3rem] w-[8rem]
      rounded-full outline-none transition-all focus:scale-110
      active:scale-105 
      bg-white bg-opacity-10 text-black
      disabled:scale-100 disabled:bg-opacity-65
      shadow-lg"
      disabled={pending}
    >
      {/* //  bg-gray-900 text-white  */}
      {/* //  hover:bg-gray-950  */}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
