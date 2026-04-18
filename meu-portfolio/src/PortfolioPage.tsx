import Header from './components/HeaderNav';
import { SceneBackground } from './components/SceneBackground';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useActiveSection } from './hooks/useActiveSection';

export default function PortfolioPage() {
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen bg-black text-white antialiased">
      <SceneBackground />
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <main className="text-zinc-100">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
