
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero'
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <main className="relative ">
      <Navbar/>

      {/* Hero section  */}
      <Hero />

      {/* About section  */}
      <About/>

      {/* Projects section */}
      <Projects/>
      
      {/* Contact section */}
      <Contact/>
    </main>
  );
}
