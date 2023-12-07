import React from 'react';
import NavBar from './components/NavBar';
import MyAvatar from './components/MyAvatar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PortFolio from './components/PortFolio';
import Neko from './components/Neko';

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <section id='portfolio'>
        <PortFolio />
      </section>
      <section id='neko'>
        <Neko />
      </section>
    </>
  );
}

export default App;
