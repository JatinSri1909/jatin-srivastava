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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <Header 
        data={{
          name: resumeData.name,
          title: resumeData.title,
          bio: resumeData.bio,
          location: resumeData.location
        }}
      />
      <main>
        <section id="about">
          <About 
            interests={resumeData.interests}
            learning={resumeData.learning}
          />
        </section>
        <section id="skills">
          <Skills skills={resumeData.skills} />
        </section>
        <section id="projects">
          <Projects projects={resumeData.projects} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Dock 
        socialLinks={resumeData.socialLinks}
        email={resumeData.email}
      />
    </div>
  );
}