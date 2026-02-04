"use client";

// Layout Components
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

// Services Section Components
import {
  ServicesHeroSection,
  ServicesAppsGrid,
  ServicesCTASection,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section - Odoo 스타일 */}
      <ServicesHeroSection />

      {/* 다양한 비즈니스 앱 제공 */}
      <ServicesAppsGrid />

      {/* CTA Section */}
      <ServicesCTASection />

      <Footer />
    </div>
  );
}

