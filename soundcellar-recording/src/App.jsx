import Header from "./components/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import Services from "./components/Sections/Services/Services";
import GearList from "./components/Sections/GearList/GearList";
import AudioExamples from "./components/Sections/AudioExamples/AudioExamples";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <GearList />
        <AudioExamples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
