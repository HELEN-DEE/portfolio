
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero'
import About from "@/components/About"
import Projects from "@/components/Projects"


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
    </main>
  );
}
