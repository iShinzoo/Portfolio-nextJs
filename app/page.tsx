import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import GamesSection from "@/components/games-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <GamesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
