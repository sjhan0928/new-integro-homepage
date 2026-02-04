"use client";

// Layout Components
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

// Works Section Components
import {
  WorksHeroSection,
  WorksGridSection,
  WorksCTASection,
} from "@/components/works";

export default function WorksPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <WorksHeroSection />

      {/* Filter & Portfolio Grid */}
      <WorksGridSection />

      {/* CTA Section */}
      <WorksCTASection />

      <Footer />
    </div>
  );
}

