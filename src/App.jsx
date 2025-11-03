import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Experience from "./Sections/Experience";

function App() {

  return (
    <>
    <main  className='max-w-7xl mx auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      {/* <Clients/> */}
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App
