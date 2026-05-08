/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import ReadmeSection from './components/ReadmeSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Skills, Experience } from './components/ContentSections';
import { Projects, Contact, Footer } from './components/ProjectSections';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ReadmeSection />  
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

