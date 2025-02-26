import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { ServicePlans } from "./components/Service Plans"
import { Support } from "./components/Support"
import { Projects } from "./components/Projects"
import { TechStack } from "./components/TechStack"
import { Team } from "./components/Team"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen  bg-[#FFFFFF] text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicePlans/>
        <Support />
        <Projects />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

