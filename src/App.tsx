import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navbar } from './components/navigation/Navbar';
import { Dock } from './components/navigation/Dock';
import { resumeData } from './data/resume';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar />
      <div className="pt-12 md:pt-16 pb-24">
        <Header 
          data={{
            name: resumeData.name,
            title: resumeData.title,
            bio: resumeData.bio,
            location: resumeData.location
          }}
        />
        <main className="space-y-16">
          <section id="about" className="scroll-mt-12 md:scroll-mt-16">
            <About 
              interests={resumeData.interests}
              learning={resumeData.learning}
            />
          </section>
          <section id="skills" className="scroll-mt-12 md:scroll-mt-16">
            <Skills skills={resumeData.skills} />
          </section>
          <section id="projects" className="scroll-mt-12 md:scroll-mt-16">
            <Projects projects={resumeData.projects} />
          </section>
          <section id="contact" className="scroll-mt-12 md:scroll-mt-16">
            <Contact />
          </section>
        </main>
      </div>
      <Dock 
        socialLinks={resumeData.socialLinks}
        email={resumeData.email}
      />
    </div>
  );
}