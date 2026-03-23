import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/Hero';
import ProfileSection from './components/Profile';
import ExperienceSection from './components/Experience';
import AwardHighlight from './components/AwardHighlight';
import StatsGrid from './components/StatsGrid';
import SkillsSection from './components/Skills';
import EducationSection from './components/Education';
import BentoLinks from './components/BentoLinks';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-ink">
      <ThemeToggle />
      <main>
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <AwardHighlight />
        <StatsGrid />
        <SkillsSection />
        <EducationSection />
        <BentoLinks />
      </main>
      <FooterCTA />
    </div>
  )
}

export default App
