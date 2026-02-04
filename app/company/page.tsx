"use client";

// Layout Components
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

// Company Section Components
import {
  CompanyHeroSection,
  CompanyAboutSection,
  CompanyVisionSection,
  CompanyValuesSection,
  CompanyCTASection,
} from "@/components/company";

// Partner Section Component (main 페이지와 동일하게 PartnersMarquee 사용)
import { PartnersMarquee } from "@/components/home";

// 회사소개 페이지 이미지
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  vision: {
    digital: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    smart: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    growth: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  values: {
    customer: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    innovation: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    trust: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
  cta: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
};

export default function CompanyPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <CompanyHeroSection />
      
      {/* About Section */}
      <CompanyAboutSection aboutImage={IMAGES.about} />
      
      {/* Vision Section */}
      <CompanyVisionSection images={IMAGES.vision} />
      
      {/* Values Section */}
      <CompanyValuesSection images={IMAGES.values} />
      
      {/* Partners Section - main 페이지와 동일 */}
      <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900/50">
        <PartnersMarquee />
      </section>
      
      {/* CTA Section */}
      <CompanyCTASection backgroundImage={IMAGES.cta} />

      <Footer />
    </div>
  );
}

