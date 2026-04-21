import { ParticleBackground } from "@/components/landing/particle-background";
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { DomainSection } from "@/components/landing/domain-section";
import { ArchitectureSection } from "@/components/landing/architecture-section";
import { ComponentsSection } from "@/components/landing/components-section";
import { ResultsSection } from "@/components/landing/results-section";
import { MilestonesSection } from "@/components/landing/milestones-section";
import { DocumentsSection } from "@/components/landing/documents-section";
import { PresentationsSection } from "@/components/landing/presentations-section";
import { TeamSection } from "@/components/landing/team-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">
        {/* Home — Hero + Problem/Solution */}
        <HeroSection />
        <div className="bg-dots">
          <AboutSection />
        </div>

        {/* Domain — Literature, Gap, Problem, Objectives, Methodology, Tech */}
        <DomainSection />

        {/* System Architecture & Components (part of Domain depth) */}
        <ArchitectureSection />
        <div className="bg-grid">
          <ComponentsSection />
        </div>

        {/* Results */}
        <ResultsSection />

        {/* Milestones */}
        <MilestonesSection />

        {/* Documents */}
        <DocumentsSection />

        {/* Presentations / Slides */}
        <PresentationsSection />

        {/* About Us / Team */}
        <TeamSection />

        {/* Contact Us */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
