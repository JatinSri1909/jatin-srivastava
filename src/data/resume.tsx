import type { ResumeData } from "../types/resume"

export const resumeData: ResumeData = {
  name: "jatin srivastava",
  title: "software engineer",
  bio: "one commit a day, keeps the bug away",
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
        "C++",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "WebRTC",
        "WebSockets",
        "BullMQ",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Docker",
        "Kafka",
        "Redis",
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
      title: "ecommerce app",
      description:
        "built a full-stack e-commerce platform with Next.js and TypeScript featuring product listings, secure authentication, and optimized performance. Integrated MongoDB with SWR for efficient data caching, implemented image optimization, and deployed with Vercel for scalability.",
      technologies: ["next.js 15", "typeScript", "express.js", "mongoDB", "swr", "next auth", "authorize", "tailwindcss"],
      githubUrl: "private",
      liveUrl: "https://shop.raizadafuel.com/",
    },
    {
      title: "photofy",
      description:
        "developed a cross-platform image editing web app with features like restoration, recoloring, and background elimination for user-uploaded photos. Integrated Cloudinary for efficient image processing and improved overall application performance.",
      technologies: ["typeScript", "next.js 14", "tailwindcss", "cloudinary", "stripe", "clerk auth", "mongoDB"],
      githubUrl: "https://github.com/JatinSri1909/photofy",
      liveUrl: "https://photofy-psi.vercel.app/",
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
      position: "Software Engineer Intern",
      duration: "July, 2025 - { still_going_on }",
      description: [
        /*
        "created a full-featured admin dashboard that manages blogs, users, subscriptions, discounts, and support queries on the platform.",
        "streamlined internal operations for 10+ teams by centralizing workflows, reducing manual overhead by 50%.",
        "implemented modern development practices including CI/CD pipelines and automated testing"
        */
      ],
      technologies: ["React.js", "TypeScript", "Nest.js", "Jenkins", "Vite", "Playwright"],
      imgUrl:
        "https://static-asset.inc42.com/logo/sploot-1.png",
    },
  ],
  education: [
    {
      institution: "KIET Group of Institution, Ghaziabad",
      degree: "B.tech, Computer Science & Engineering",
      duration: "2022-26",
    },
  ],
}
