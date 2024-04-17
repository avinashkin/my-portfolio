import HomePage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Background from './components/Background';
import ContactMe from './components/ContactMe';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App bg-neutral-950">
      {/* <Navbar /> */}
      <section id='home'>
        <Background />
        <HomePage />
      </section>
    </div>
  );
}

export default App;
