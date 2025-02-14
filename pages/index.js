import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FloatingNavbar from "./components/FloatingNavBar";
import MusicPlayer from "./components/MusicPlayer";
import NeuralBackground from "./NeuralBackground";
import Loader from "./components/Loader";

export default function Home() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <title>Krishna Thakur</title>
      <NeuralBackground />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black">
          <FloatingNavbar />
          <MusicPlayer />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EmailSection />
        </main>
      )}
    </div>
  );
}