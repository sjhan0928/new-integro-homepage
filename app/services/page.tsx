"use client";

// Layout Components
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

// Services Section Components
import {
  ServicesHeroSection,
  ServicesAppsGrid,
  ServicesCategoriesSection,
  ServicesCTASection,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section - Odoo 스타일 */}
      <ServicesHeroSection />

      {/* Apps Grid - Odoo 스타일 아이콘 그리드 */}
      <ServicesAppsGrid />

      {/* Domain Categories */}
      <ServicesCategoriesSection />

      {/* CTA Section */}
      <ServicesCTASection />

      <Footer />
    </div>
  );
}

