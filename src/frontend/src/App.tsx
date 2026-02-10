import { HeroSection } from './components/portfolio/sections/HeroSection';
import { AboutSection } from './components/portfolio/sections/AboutSection';
import { ServicesSection } from './components/portfolio/sections/ServicesSection';
import { ExperienceSection } from './components/portfolio/sections/ExperienceSection';
import { SkillsSection } from './components/portfolio/sections/SkillsSection';
import { SiteHeader } from './components/portfolio/SiteHeader';
import { SiteFooter } from './components/portfolio/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
