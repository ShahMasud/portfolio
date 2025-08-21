import Navigation from './components/Navigation';
import { Hero, AboutMe, Experience, Skills, Projects, Contact, Footer } from './sections';
import './App.css';
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
      <Footer />

    </main>
  );
}

export default App;
