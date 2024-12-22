import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: "Jatin Srivastava",
  title: "Full Stack Developer",
  bio: "I'm a passionate programmer and technology enthusiast who thrives on learning and working with cutting-edge technologies. I'm always exploring new ideas and challenging myself to grow as a developer.",
  location: "New Delhi,India",
  email: "jatin.srivastaval1909@gmail.com",
  socialLinks: {
    github: "https://github.com/JatinSri1909",
    linkedin: "https://www.linkedin.com/in/jatin-srivastava-57a434256",
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
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode support and a clean, minimalist design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2424",
      githubUrl: "https://github.com/JatinSri1909"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather information using OpenWeatherMap API, featuring a clean UI and detailed weather forecasts.",
      technologies: ["JavaScript", "HTML", "CSS", "REST API"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2424",
      githubUrl: "https://github.com/JatinSri1909"
    }
  ],
  experience: [],
  education: []
};