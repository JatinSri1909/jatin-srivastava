import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { resumeData } from './data/resume';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Header 
        data={{
          name: resumeData.name,
          title: resumeData.title,
          bio: resumeData.bio,
          location: resumeData.location,
          email: resumeData.email,
          socialLinks: resumeData.socialLinks
        }}
      />
      <main>
        <About 
          interests={resumeData.interests}
          learning={resumeData.learning}
        />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Contact />
      </main>
    </div>
  );
}

export default App;