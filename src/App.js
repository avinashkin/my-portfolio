import HomePage from './components/Homepage';
import AboutMe from './components/AboutMe';
import ParticleBackground from './components/ParticleBackground';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <section id="home">
        <ParticleBackground />
        <HomePage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id='contact-me'>
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
