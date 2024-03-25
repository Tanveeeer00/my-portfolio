import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-medium capitalize mb-8 text-center dark:text-sky-400">
      {children}
    </h2>
  );
}
