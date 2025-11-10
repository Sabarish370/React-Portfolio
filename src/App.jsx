import React from 'react';

import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroMain from './components/subHeroSection/SubHeroMain';
import AboutMain from './components/aboutMeSection/AboutMain';
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillsSection/SkillsMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      {/* <SubHeroMain /> */}
      <AboutMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
