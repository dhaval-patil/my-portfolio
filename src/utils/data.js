import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaMailBulk,
    
  } from "react-icons/fa";
  import { BiLogoBootstrap, BiLogoFigma, BiLogoFirebase, BiLogoGit, BiLogoGithub, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoVisualStudio, BiSolidSpeaker } from "react-icons/bi";
  
  import { SiCanva, SiEclipseadoptium, SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
  import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
  } from "react-icons/vsc";
  import { FaGitAlt, FaXTwitter, FaDribbble, FaMessage } from "react-icons/fa6";
  import { MdGroups3 } from "react-icons/md";
  
  import PROJECT_IMG_1 from "../assets/images/project-1.png";
  import PROJECT_IMG_2 from "../assets/images/project-2.png";

  export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "About Me", offset: -80, to: "about" },
    { id: "02", label: "Education", offset: -80, to: "education" },
    { id: "03", label: "Skills", offset: -80, to: "skills" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
  ];
  
  export const STATS = [
    { id: "01", count: "2", label: "Internship \nExperience" },
    { id: "02", count: "7", label: "Certifications \nEarned" },
    { id: "03", count: "200+", label: "Leetcode Problem \nSolved" },
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
      icon: FaReact,
      skill: "React JS",
      progress: 95,
      type: "frontend",
      description:
        "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management and hooks.",
    },
    {
      id: "02",
      icon: FaHtml5,
      skill: "HTML",
      progress: 99,
      type: "backend",
      description:
        "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization.",
    },
    {
      id: "03",
      icon: FaCss3,
      skill: "CSS",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "04",
      icon: BiLogoJavascript,
      skill: "JavaScript",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "05",
      icon: BiLogoJava,
      skill: "Java",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "06",
      icon: BiLogoPython,
      skill: "Python",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "07",
      icon: SiMysql,
      skill: "MySQL",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "08",
      icon: BiLogoMongodb,
      skill: "MongoDB",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "09",
      icon: BiLogoNodejs,
      skill: "NodeJS",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "10",
      icon: BiLogoTailwindCss,
      skill: "Tailwind CSS",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "11",
      icon: BiLogoBootstrap,
      skill: "BootStrap",
      progress: 65,
      type: "frontend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "12",
      icon: BiLogoVisualStudio,
      skill: "VS Code",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "13",
      icon: BiLogoGit,
      skill: "Git",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "14",
      icon: BiLogoGithub,
      skill: "GitHub",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "15",
      icon: BiLogoFigma,
      skill: "Figma",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "16",
      icon: BiLogoFirebase,
      skill: "FireBase",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "17",
      icon: BiLogoPhp,
      skill: "Php",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "18",
      icon: SiExpress,
      skill: "Express",
      progress: 65,
      type: "backend",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "19",
      icon: SiCanva,
      skill: "Canva",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "20",
      icon: SiEclipseadoptium,
      skill: "Eclipse",
      progress: 65,
      type: "tools",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    {
      id: "21",
      icon: MdGroups3,
      skill: "Communication",
      progress: 65,
      type: "soft-skills",
      description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
    },
    
  ];

  export const ABOUT_ME = {
    content: "Hi, I'm Dhaval Patil, a Full-Stack Developer and Software Developer, passionate about building dynamic, user-centric web applications. With expertise in Data Structures and Algorithms, I enjoy solving complex problems and creating scalable solutions.",
    
    socialLinks: [
      { id: "01", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/dhaval-patill/" },
      { id: "02", label: "Github", icon: FaGithub, link: "https://github.com/dhaval-patil" },
      { id: "03", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/dhaval.patil_/" },
      { id: "04", label: "Twitter", icon: FaXTwitter, link: "https://x.com/dhavalpatil8" },
      { id: "05", label: "Facebook", icon: FaMailBulk, link: "mailto:dhavalpatil365@gmail.com" },
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
      id: 3,
      title: "Hostel Addmission System",
      image: PROJECT_IMG_2,
      tags: ["HTML", "CSS", "PHP", "MySql"],
      github: "https://github.com/dhaval-patil/Hostel-Addmission-System/tree/main/hostel",
      live: "#",
    },
    
  ];
  
  export const EDUCATION = [
    {
      id: 1,
      degree: "Bachelor of Technology in Information Technology",
      institution: "ChanduBhai S Patel Institute of Technolgy",
      year: "2022 - 2025",
      grade: "7.61 CGPA",
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Daman",
      year: "2019 - 2022",
      grade: "7.32 CGPA",
    },
    
  ];
  