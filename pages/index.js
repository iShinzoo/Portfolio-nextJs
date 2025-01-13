import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FloatingNavbar from "./components/FloatingNavBar";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <FloatingNavbar />
      <MusicPlayer />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}