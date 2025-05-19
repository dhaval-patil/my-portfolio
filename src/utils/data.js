import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import ReactIcon from "../assets/icons/react.png";
import NodeIcon from "../assets/icons/nodejs.png";
import SqlIcon from "../assets/icons/sql.png";
import AwsIcon from "../assets/icons/aws.png";
import Canva from "../assets/icons/canva.png";
import Css from "../assets/icons/css.png";
import Express from "../assets/icons/expressjs.webp";
import Figma from "../assets/icons/figma.png";
import Git from "../assets/icons/git.png";
import Github from "../assets/icons/github.png";
import Java from "../assets/icons/java.png";
import JavaScript from "../assets/icons/javascript.png";
import MongoDB from "../assets/icons/mongodb.png";
import PhotoShop from "../assets/icons/photoshop.png";
import Tailwind from "../assets/icons/tailwind.png";
import Python from "../assets/icons/python.png";
import Php from "../assets/icons/php.png";
import Html from "../assets/icons/html.png";
import TS from "../assets/icons/typescript.png";
import VS from "../assets/icons/visual-studio-code.png";
import FireBase from "../assets/icons/firebase.svg";
import BootStrap from "../assets/icons/bootstrap-framework.png";

import { FaXTwitter, FaMessage } from "react-icons/fa6";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -600, to: "hero" },

  { id: "03", label: "Education", offset: -80, to: "education" },
  { id: "04", label: "Skills", offset: -80, to: "skills" },
  { id: "05", label: "Projects", offset: -80, to: "projects" },
  { id: "06", label: "Contact", offset: -80, to: "contact" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    image: ReactIcon,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management and hooks.",
  },
  {
    id: "02",
    image: NodeIcon,
    skill: "NodeJS",
    progress: 99,
    type: "backend",
    description:
      "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization.",
  },
  {
    id: "03",
    image: Css,
    skill: "CSS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "04",
    image: JavaScript,
    skill: "JavaScript",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "05",
    image: Java,
    skill: "Java",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "06",
    image: Python,
    skill: "Python",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "07",
    image: SqlIcon,
    skill: "MySQL",
    progress: 65,
    type: "backend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "08",
    image: MongoDB,
    skill: "MongoDB",
    progress: 65,
    type: "backend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "09",
    image: Html,
    skill: "Html",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "10",
    image: Tailwind,
    skill: "Tailwind CSS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "11",
    image: BootStrap,
    skill: "BootStrap",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "12",
    image: VS,
    skill: "VS Code",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "13",
    image: Git,
    skill: "Git",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "14",
    image: Github,
    skill: "GitHub",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "15",
    image: Figma,
    skill: "Figma",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "16",
    image: TS,
    skill: "TypeScript",
    progress: 65,
    type: "backend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "17",
    image: Php,
    skill: "Php",
    progress: 65,
    type: "backend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "18",
    image: Express,
    skill: "Express",
    progress: 65,
    type: "backend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "19",
    image: Canva,
    skill: "Canva",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "20",
    image: FireBase,
    skill: "FireBase",
    progress: 65,
    type: "tools",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "21",
    image: PhotoShop,
    skill: "PhotoShop",
    progress: 65,
    type: "soft-skills",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
];

export const ABOUT_ME = {
  content:
    "Hi, I'm Dhaval Patil, a Full-Stack Developer and Software Developer, passionate about building dynamic, user-centric web applications. With expertise in Data Structures and Algorithms, I enjoy solving complex problems and creating scalable solutions.",

  socialLinks: [
    {
      id: "01",
      label: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/dhaval-patill/",
    },
    {
      id: "02",
      label: "Github",
      icon: FaGithub,
      link: "https://github.com/dhaval-patil",
    },
    {
      id: "03",
      label: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/dhaval.patil_/",
    },
    {
      id: "04",
      label: "Twitter",
      icon: FaXTwitter,
      link: "https://x.com/dhavalpatil8",
    },
    {
      id: "05",
      label: "Mail",
      icon: FaMessage,
      link: "mailto:dhavalpatil365@gmail.com",
    },
  ],

  email: "dhavalpatil365@gmail.com",
  phone: "+91 9909069983",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack E-Commerce Web | ShopMate",
    image: PROJECT_IMG_1,
    tags: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/dhaval-patil/ShopMate",
    live: "https://shop-mate.onrender.com/",
  },
  // {
  //   id: 2,
  //   title: "Full Stack Job Portal Website | JobHunt",
  //   image: PROJECT_IMG_1,
  //   tags: ["React", "Tailwind CSS", "Clerk", "Supabase", "Shadcn"],
  //   github: "https://github.com/dhaval-patil/HireNest",
  //   live: "#",
  // },
  {
    id: 2,
    title: "RealTime ChatApp | QuickChat",
    image: PROJECT_IMG_3,
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
    ],
    github: "https://github.com/dhaval-patil/QuickChat",
    live: "https://quickchat-qv8k.onrender.com/",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    image: PROJECT_IMG_4,
    tags: ["Reactjs", "TailwindCSS"],
    github:
      "https://github.com/dhaval-patil/Hostel-Addmission-System/tree/main/hostel",
    live: "#",
  },
  {
    id: 3,
    title: "Hostel Addmission System",
    image: PROJECT_IMG_2,
    tags: ["HTML", "CSS", "PHP", "MySql"],
    github:
      "https://github.com/dhaval-patil/Hostel-Addmission-System/tree/main/hostel",
    live: "#",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "ChanduBhai S Patel Institute of Technolgy",
    year: "2022 - 2025",
    grade: "7.81 CGPA",
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic Daman",
    year: "2019 - 2022",
    grade: "7.32 CGPA",
  },
];
