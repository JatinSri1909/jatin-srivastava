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
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "WebRTC", "WebSockets", "BullMQ"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Linux", "Git", "GitHub"]
    },
    {
      category: "Message Brokering",
      items: ["Kafka", "Redis"]
    },
    {
      category: "Languages",
      items: ["Python", "C++"]
    }
  ],
  projects: [
    {
      title: "Photofy",
      description: "Developed a cross-platform image editing web app with features like restoration, recoloring, and background elimination for user-uploaded photos. Integrated Cloudinary for efficient image processing and improved overall application performance.",
      technologies: ["TypeScript", "Next.js 14", "Tailwind CSS", "Cloudinary", "Stripe", "Clerk Auth", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2424",
      githubUrl: "https://github.com/JatinSri1909",
      liveUrl: "https://photofy.example.com",
    },
    {
      title: "Notes API",
      description: "Constructed a comprehensive RESTful API for handling user notes with advanced token-based authentication strategies. Implemented intuitive API routes for create, read, update, and delete operations.",
      technologies: ["JavaScript", "Express", "Node", "MongoDB", "JWT", "Bcrypt", "RESTful API"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2424",
      githubUrl: "https://github.com/JatinSri1909",
      liveUrl: "https://notes-api.example.com",
    },
    {
      title: "Multiplayer Chess Game",
      description: "Developed a real-time chess platform that accommodated up to 100 simultaneous games without user login. Established real-time communication among players by implementing Socket.io.",
      technologies: ["JavaScript", "React", "Express", "Node", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2424",
      githubUrl: "https://github.com/JatinSri1909",
      liveUrl: "https://chess-game.example.com",
    },
    {
      title: "Online Code Compiler",
      description: "Designed intuitive interfaces for an all-in-one coding solution where users could run programs seamlessly in popular languages such as C++ and Python. Established an enhanced task queue with BullMQ for real-time job management.",
      technologies: ["JavaScript", "React", "Express", "Node", "BullMQ", "MongoDB"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGlsZXJ8ZW58MHx8MHx8fDA%3D",
      githubUrl: "https://github.com/JatinSri1909",
      liveUrl: "https://chess-game.example.com",
    }
  ],
  experience: [],
  education: []
};