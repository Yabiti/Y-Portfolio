import AnimationLayout from "@/layouts/AnimationLayout";
import ContactPage from "./components/contact/contactpage";
import HeroSection from "./components/general/home/hero/Herosection";
import Servicesection from "./components/general/home/services/servicesection";
import ProjectSection from "./components/projects/projectSection";
import ResumeSection from "./components/resume/resumesection";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <Servicesection />
      <ResumeSection />
      <ProjectSection />
      <Skills />
      <ContactPage />
    </AnimationLayout>
  );
}
