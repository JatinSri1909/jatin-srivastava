import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: "Jatin Srivastava",
  title: "Full Stack Developer",
  bio: "I'm a passionate programmer and technology enthusiast who thrives on learning and working with cutting-edge technologies. I'm always exploring new ideas and challenging myself to grow as a developer.",
  location: "New Delhi, India",
  email: "jatinmavrik007@gmail.com",
  socialLinks: {
    github: "https://github.com/JatinSri1909",
    linkedin: "https://www.linkedin.com/in/jatin-srivastava-57a434256",
    twitter: "https://x.com/JatinSriva36542",
  },
  interests: [
    "Web Development: Crafting responsive and efficient web applications",
    "Open Source: Contributing to the community and collaborating on meaningful projects"
  ],
  learning: [
    "Event-Driven Architectures: Exploring how systems communicate efficiently",
    "Kafka & Redis: Diving into message brokering and in-memory data storage",
    "Backend Fundamentals: Building a deeper understanding of backend systems"
  ],
  skills: [
    {
      category: "",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
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
        "Linux",
        "Git",
        "GitHub",
        "Kafka",
        "Redis",
        "Python",
        "C++"
      ]
    }
  ],
  projects: [
    {
      title: "Photofy",
      description: "Developed a cross-platform image editing web app with features like restoration, recoloring, and background elimination for user-uploaded photos. Integrated Cloudinary for efficient image processing and improved overall application performance.",
      technologies: ["TypeScript", "Next.js 14", "Tailwind CSS", "Cloudinary", "Stripe", "Clerk Auth", "MongoDB"],
      imageUrl: "/photofy.png",
      githubUrl: "https://github.com/JatinSri1909/photofy",
      liveUrl: "https://photofy-psi.vercel.app/",
    },
    {
      title: "Chess P2P",
      description: "Built a real-time chess platform with integrated video calling capabilities, supporting up to 100 simultaneous games. Implemented WebRTC for peer-to-peer video communication and Socket.io for real-time game state synchronization, creating an immersive multiplayer experience.",
      technologies: ["Next.js 15", "TypeScript", "Express", "Node", "Socket.io", "WebRTC"],
      imageUrl: "/chess.png",
      githubUrl: "https://github.com/JatinSri1909/chess-p2p",
      liveUrl: "https://chess-p2p.vercel.app/",
    },
    {
      title: "Notebook",
      description: "Created a React Native application for note-taking, featuring offline access, rich text formatting, and synchronization across devices.",
      technologies: ["React Native", "TypeScript", "Expo"],
      imageUrl: "/notebook.png",
      githubUrl: "https://github.com/JatinSri1909/notebook",
      liveUrl: "https://github.com/JatinSri1909/notebook",
    },
    {
      title: "Online Code Compiler",
      description: "Designed intuitive interfaces for an all-in-one coding solution where users could run programs seamlessly in popular languages such as C++ and Python. Established an enhanced task queue with BullMQ for real-time job management.",
      technologies: ["JavaScript", "React", "Express", "Node", "BullMQ", "MongoDB"],
      imageUrl: "/compiler.png",
      githubUrl: "https://github.com/JatinSri1909?tab=repositories&q=online-code-compiler&type=&language=&sort=",
      liveUrl: "https://online-code-compiler-client.vercel.app/",
    }
  ],
  experience: [],
  education: []
};