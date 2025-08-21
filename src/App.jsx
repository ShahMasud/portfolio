import React from 'react';
import Navigation from './components/Navigation';
import { Hero, AboutMe, Experience, Skills, Projects, Contact, Footer } from './sections';
import './App.css';
import { CardList } from './components/CardList';
import CustomHero from './components/customHero';

function App() {
  return (
    <main>
      <Navigation />

      {/* <Hero />   */}
      <CustomHero/>

      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />


      {/* <CardList /> */}
      <Footer />

    </main>
  );
}

export default App;
