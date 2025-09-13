import Navbar from "../components/clientview/Navbar";
import Hero from "../components/clientview/home";
import Portfolio from "../components/clientview/projects"
import Skills from "../components/clientview/skills"
import Journey from "../components/clientview/journey"
import Pricing from "../components/clientview/pricing"
// import Education from "../components/clientview/education"
import Contact from "../components/clientview/contact"
import Footer from "../components/clientview/footer"
import Projects from "../components/clientview/projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
       <Journey />
      <Projects />
      <Skills />
      <Pricing />
    
      <Contact />
      <Footer />
   


    </main>
  );
}