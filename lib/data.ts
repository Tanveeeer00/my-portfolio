import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import tBlack from "@/public/tBlack.png";
import tWhite from "@/public/tWhite.png";
import login from "@/public/login.png";
import bgSecondsJs from "@/public/bgChangeSecondsJs.png";
import bgPickerJs from "@/public/bgColorPickerJs.png";
import bmiJs from "@/public/bmiJs.png";
import keywordJs from "@/public/keywordJs.png";
import DigitalTimeJs from "@/public/DigitalTimeJs.png";
import numberGuessjs from "@/public/numberGuessJs.jpg";
import passwordGeneratorReact from "@/public/passwordGeneratorReact.png";
import signupReact from "@/public/signupReact.png";
import todoInReduxReact from "@/public/todoInReduxReact.png";
import todosInContextReact from "@/public/todosInContextReact.png";
import colorIndicatorReact from "@/public/colorIndicatorReact.png";
import currencyCounterReact from "@/public/currencyConverterReact.png";
import fetchToggleReact from "@/public/fetchToggoleGithubAPIReact.png";
import homeMega from "@/public/homeMega.png";
import UpdateMega from "@/public/updateEditMega.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Overview",
    hash: "#overview",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  // {
  //   name: "Certificate",
  //   hash: "/certify",
  // },
] as const;

export const overviewData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Mega Blog",
    description:
      "Developed a full-stack web application for blogging using Appwrite as a backend-as-a-service (BaaS) solution and React-Redux toolkit for the frontend. This ReactJS web application lets users create, manage, and share blog content.",
    // tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: tBlack,
    link: "/megablog",
  },
  {
    id: 2,
    title: "JavaScript  ",
    description:
      "Explore my interactive JavaScript projects, showcasing proficiency in front-end development, user interaction, and problem-solving through engaging applications.",
    // tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: login,
    link: "javascript",
  },
  {
    id: 3,
    title: "Music Art",
    description: `Developed an interactive music art experience using Next.js, a modern React framework, for a music art course.
      Utilized AceternityUI`,
    // tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: tWhite,
    link: "musicart",
  },
  {
    id: 4,
    title: "React",
    description:
      " Explore my collection of interactive single-page applications built with React, showcasing my ability to create engaging and dynamic user experiences.",
    // tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: homeMega,
    link: "react",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  // "Python",
  // "Django",
  // "Prisma",
] as const;

export const JavascriptData = [
  {
    id: 1,
    title: "Interactive Color Picker",
    description:
      "Highlights event handling (potentially using addEventListener) to update the background color based on user selection.",
    imageUrl: bgPickerJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/background%20switcher",
  },
  {
    id: 2,
    title: "BMI Calculator",
    description:
      "Demonstrates user input handling (potentially using forms) and basic calculations to determine BMI.",
    imageUrl: bmiJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/body%20mass%20index",
  },
  {
    id: 3,
    title: "Number Guessing Game",
    description:
      "Highlights the use of loops, conditional statements, and potentially DOM manipulation to create an interactive game with user feedback. It's has 10 attempts to choose numbers from 1 to 100, and the output is the confirmation of the correct answer. Take 1 input, show previous guesses and tell how many guesses remain.",
    imageUrl: numberGuessjs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/Guess%20Number",
  },
  {
    id: 4,
    title: "Keyboard Key Visualizer",
    description:
      "Showcases the ability to capture keyboard events (keydown, keyup) and extract key information (key, keycode, character code).",
    imageUrl: keywordJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/keyboard",
  },
  {
    id: 5,
    title: " Dynamic Background Color Changer",
    description:
      "Demonstrates DOM manipulation and the use of setInterval to create a dynamic effect. The background color changes every second.",
    imageUrl: bgSecondsJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/unlimterChanger",
  },
  {
    id: 6,
    title: "Real-time Clock & Date ",
    description:
      "Emphasizes the use of the JavaScript Date object to display current time and date.",
    imageUrl: DigitalTimeJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/Digital%20time",
  },
  {
    id: 7,
    title: "Spotify",
    description:
      "Highlights event handling (potentially using addEventListener) to update the background color based on user selection.",
    imageUrl: bgPickerJs,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/JavaScript/tree/main/Projects/background%20switcher",
  },
] as const;
export const ReactData = [
  {
    id: 1,
    title: "Secure Password Generator",
    description:
      "Generate secure & customizable passwords. Choose length, include numbers & symbols, and copy to clipboard with a click",
    imageUrl: passwordGeneratorReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/passwordGenerator",
  },
  {
    id: 2,
    title: "Currency Converter with Live Rates",
    description:
      "This React application provides a user-friendly currency converter. Fetching live exchange rates from an API, it allows you to convert between various currencies. Select your input and output currencies, then easily swap them with a dedicated button. React component creation, API integration, and user interface design.",
    imageUrl: currencyCounterReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/CurrencyConverter",
  },
  {
    id: 3,
    title: ": Feature-Rich Todo List with context API",
    description: `Effortlessly add new tasks to your to-do list.
    Mark completed tasks for a sense of accomplishment.
    Easily edit or delete existing tasks to keep your list streamlined.
    Enjoy a clear and readable overview of your day's agenda.`,
    imageUrl: todosInContextReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/TodoContext",
  },
  {
    id: 4,
    title: "Color Indicator",
    description:
      " Pick your perfect shade! This React app lets you choose a color from a list, instantly updating the background and displaying the color's name.",
    imageUrl: colorIndicatorReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/colorIndicator",
  },
  {
    id: 5,
    title: "Task Management with React Redux",
    description:
      "This React application provides a comprehensive and user-friendly todo list experience, leveraging the power of Redux for state management. Key functionalities include: Add new tasks to your list with ease. Modify existing tasks to ensure accuracy. Remove completed tasks to keep your list streamlined. View all your tasks in a single, organized location.",
    imageUrl: todoInReduxReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/reduxTodo",
  },
  {
    id: 6,
    title: " Dynamic GitHub User Card with Dark Mode Toggle",
    description:
      "This React application fetches user data from the GitHub API, displaying username, name, avatar, followers, and following information. It leverages Context API to implement a seamless dark mode toggle, allowing users to switch between light and dark themes for a personalized viewing experience.",
    imageUrl: fetchToggleReact,
    alter: "no-picture",
    git: "https://github.com/Tanveeeer00/react/tree/main/ThemeSwitcher",
  },
] as const;
export const MegaBlogData = [
  {
    id: 1,
    description: `Developed a full-stack web application for blogging using Appwrite as a backend-as-a-service (BaaS) solution and React-Redux toolkit for the frontend.
    This ReactJS web application lets users create, manage, and share blog content.
    Designed and implemented a user-friendly interface featuring:
    Login and signup functionalities with secure authentication. Built with a focus on security and user experience, 
    A dynamic home page displaying all blog posts.
    Pages for creating, editing, and deleting posts.
    Integrated a rich text editor (TinyMCE) for creating compelling content.
    `,
    tags: [
      "Tailwind CSS",
      "Appwrite BaaS",
      "React Redux Toolkit",
      "TinyMce",
      "html-react-parser",
      "react-hook-form",
      "React-router-dom",
    ],
    git: "https://github.com/Tanveeeer00/Mega-Blog",
  },
];
export const MusicArtData = [
  {
    id: 1,
    description: `Developed an interactive music art experience using Next.js, a modern React framework, for a music art course.
      Utilized AceternityUI, a then-immature UI component library, requiring extensive customization through Tailwind CSS configuration.
      Successfully tackled challenges in integrating and customizing the library, demonstrating strong problem-solving and adaptation skills.
      Gained valuable knowledge in working with cutting-edge frontend technologies and UI component libraries.`,
    tags: ["NextJs", "ReactJs"],
    imageUrl: [login],
  },
];
export const projectlink = [
  {
    link: "/javascript",
  },
  {
    link: "/react",
  },
  {
    link: "/megablog",
  },
  {
    link: "/musicart",
  },
];
