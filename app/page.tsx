"use client";

// Layout Components
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/floating-contact";

// Home Page Sections
import {
  HeroHomeSection,
  PerformanceScrollSection,
  PartnersMarquee,
  CTAHomeSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="relative bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section with DX/AX/CX/IX rotation */}
      <HeroHomeSection />

      {/* Performance -> Domain -> Custom integrated scroll section */}
      <PerformanceScrollSection />

      {/* Partners Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900/50">
        <PartnersMarquee />
      </section>

      {/* CTA Section */}
      <CTAHomeSection />

      {/* Footer */}
      <Footer />

      <FloatingContact />
    </div>
  );
}
