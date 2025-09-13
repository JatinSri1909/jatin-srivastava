export interface ResumeData {
  name: string
  title: string
  bio: string
  location: string
  email: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
  skills: Array<{
    items: string[]
  }>
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
  }>
  experience: Array<{
    company: string
    position: string
    duration: string
    description: string[]
    technologies: string[]
    imgUrl: string
  }>
  education: Array<{
    institution: string
    degree: string
    duration: string
  }>
}
