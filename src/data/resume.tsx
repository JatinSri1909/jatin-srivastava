import type { ResumeData } from "../types/resume"

export const resumeData: ResumeData = {
  name: "jatin srivastava",
  title: "software engineer",
  bio: "Code is a poetry",
  location: "New Delhi, India",
  email: "jatin.srivastaval1909@gmail.com",
  socialLinks: {
    github: "https://github.com/JatinSri1909",
    linkedin: "https://www.linkedin.com/in/jatin-srivastava-57a434256",
    twitter: "https://x.com/JatinSriva36542",
  },
  skills: [
    {
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "React.js",
        "WebGL",
        "Three.js",
        "Next.js",
        "Node.js",
        "Nest.js",
        "Express.js",
        "WebRTC",
        "WebSockets",
        "BullMQ",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Docker",
        "Jenkins",
        "Redis",
        "Jest",
        "Appium",
        "Playwright",
        "AWS",
        "Linux",
        "Git",
        "GitHub",
        "HTML",
        "CSS",
      ],
    },
  ],
  projects: [
    {
      title: "chess p2p",
      description:
        "built a real-time chess platform with integrated video calling capabilities, supporting up to 100 simultaneous games. Implemented WebRTC for peer-to-peer video communication and socket.io for real-time game state synchronization, creating an immersive multiplayer experience.",
      technologies: ["next.js 15", "typeScript", "express.js", "node.js", "socket.io", "webRTC", "tailwindcss"],
      githubUrl: "https://github.com/JatinSri1909/chess-p2p",
      liveUrl: "https://chess-p2p.vercel.app/",
    },
    {
      title: "road rage",
      description:
        "built a browser-based 3D racing game using Three.js, featuring real-time velocity-vector physics with separate forward/lateral grip for realistic drift mechanics.",
      technologies: ["typeScript", "react.js", "vite", "webGL", "three.js"],
      githubUrl: "https://github.com/JatinSri1909/road-rage",
      liveUrl: "https://road-rage-mu.vercel.app/",
    },
    {
      title: "photofy",
      description:
        "developed an AI image editing web app with features like restoration, recoloring, and background elimination for user-uploaded photos. Integrated Cloudinary for efficient image processing and improved overall application performance.",
      technologies: ["typeScript", "next.js 14", "tailwindcss", "cloudinary", "stripe", "clerk auth", "mongoDB"],
      githubUrl: "https://github.com/JatinSri1909/photofy",
      liveUrl: "https://photofy-psi.vercel.app/",
    },
    {
      title: "preplit",
      description:
        "developed an AI image editing web app with features like restoration, recoloring, and background elimination for user-uploaded photos. Integrated Cloudinary for efficient image processing and improved overall application performance.",
      technologies: ["typeScript", "next.js 16", "tailwindcss", "groq API", "node.js", "express.js", "mongoDB"],
      githubUrl: "https://github.com/JatinSri1909/preplit-app",
      liveUrl: "https://preplit-app.vercel.app/",
    },
    {
      title: "slack connect",
      description:
        "developed a full-stack Slack integration platform connecting workspaces with external applications. Built with React and TypeScript frontend, Express.js backend with RESTful APIs, secure authentication, and real-time message handling for seamless workflow management.",
      technologies: ["typescript", "react.js", "vite", "express.js", "node.js", "slack API"],
      githubUrl: "https://github.com/JatinSri1909?tab=repositories&q=slack-connect&type=&language=&sort=",
      liveUrl: "https://slack-connect-blue.vercel.app/"
    },
    {
      title: "task master",
      description:
        "TaskMaster helps users organize, track, and manage their tasks efficiently, with features like prioritization, time tracking, statistics, and team collaboration. The system is designed for both individual and team use, supporting authentication, real-time updates, and robust data analytics.",
      technologies: ["typescript", "next.js", "express", "node.js", "jwt", "mongoDB", "axios"],
      githubUrl: "https://github.com/JatinSri1909?tab=repositories&q=task+management&type=&language=&sort=",
      liveUrl: "https://task-master-one-zeta.vercel.app/",
    },
    {
      title: "track fast",
      description:
        "TrackFast is a modern, full-stack expense tracking application. Powers the TrackFast expense tracker with a secure, robust REST API for user management, expense CRUD, and analytics.",
      technologies: ["typescript", "next.js", "express", "node.js", "jwt", "mongoDB", "axios", "zod", "winston"],
      githubUrl: "https://github.com/JatinSri1909?tab=repositories&q=task+fast&type=&language=&sort=",
      liveUrl: "https://track-fast-app.vercel.app/",
    },
    {
      title: "online code compiler",
      description:
        "designed intuitive interfaces for an all-in-one coding solution where users could run programs seamlessly in popular languages such as c++ and python. Established an enhanced task queue with bullMQ for real-time job management.",
      technologies: ["javaScript", "react", "express", "node", "bullMQ", "mongoDB"],
      githubUrl: "https://github.com/JatinSri1909?tab=repositories&q=online-code-compiler&type=&language=&sort=",
      liveUrl: "https://online-code-compiler-client.vercel.app/",
    },
    {
      title: "notebook",
      description:
        "created a react native application for note-taking, featuring offline access, rich text formatting, and synchronization across devices.",
      technologies: ["react native", "typeScript", "expo"],
      githubUrl: "https://github.com/JatinSri1909/notebook",
      liveUrl: "https://github.com/JatinSri1909/notebook",
    },
  ],
  experience: [
    {
      company: "Sploot",
      position: "Software Engineer",
      duration: "July, 2025 - September, 2026",
      description: [
        "Improved backend reliability, delivered key features, and migrated the n8n service from Python to TypeScript (Nest.js).",
        "Integrated WebEngage user attributes and events into the backend to track user activity and behavior, powering data-driven marketing campaigns.",
        "Built a pipeline to automate generation of Android APK and AAB builds for both the customer and partner apps, cutting manual release effort.",
        "Set up a Docker-based Jenkins project used to deploy every Sploot service, standardizing and simplifying deployments across the organization.",
      ],
      technologies: ["Remix.js", "TypeScript", "Nest.js", "Jenkins", "Appium", "Jest", "Playwright", "AWS"],
      imgUrl:
        "/sploot.jpeg",
    },
    {
      company: "Sploot",
      position: "Software Engineer Intern",
      duration: "July, 2025 - May, 2026",
      description: [
        "Created an admin dashboard using React, TypeScript, and Nest.js, improving operational efficiency and reducing manual effort.",
        "Wrote Playwright tests for the main website, expediting QA cycles and detecting UI defects more rapidly.",
        "Developed help and support interfaces for partner mobile app, enabling partners to resolve queries faster."
      ],
      technologies: ["React.js", "React Native", "TypeScript", "Nest.js", "Jenkins", "Vite", "Playwright"],
      imgUrl:
        "/sploot.jpeg",
    },
  ],
  education: [
    {
      institution: "KIET Group of Institution, Ghaziabad",
      degree: "B.tech, Computer Science & Engineering",
      duration: "2022-26",
    },
  ],
};
