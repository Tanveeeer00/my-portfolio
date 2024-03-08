"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/ThemeContext";
import { useSectionInView } from "@/lib/hooks";
import { overviewData } from "@/lib/data";

export default function Overview() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Overview");
  return (
    <section id="overview" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Overview</SectionHeading>

      {overviewData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </section>
  );
}
