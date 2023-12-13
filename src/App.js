import Background from './components/Background';
import HomePage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <section id="home">
        <Background />
        <Sidebar />
        <HomePage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
    </div>
  );
}

export default App;
