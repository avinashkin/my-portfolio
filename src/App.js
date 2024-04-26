import React from 'react';
import AboutMe from './components/AboutMe';
import Background from './components/Background';
import ContactMe from './components/ContactMe';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkillsScroll from './components/Scroll';
import Skills from './components/Skills';
import Project from './components/Projects';
import Experience from './components/Experience';

function App() {
  
  return (
    <div className="App bg-neutral-950">
      {/* <Navbar /> */}
      <section id='home'>
        <Background />
      </section>
      <section id='about'>
        <AboutMe />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='project'>
        <Project />
      </section>
      <section id='experience'>
        <Experience />
      </section>      
      <SkillsScroll />
      <section id="contact">
        <ContactMe />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
