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
  hero: "/images/company/hero.jpg",
  about: "/images/company/about.jpg",
  team: "/images/company/team.jpg",
  office: "/images/company/office.jpg",
  tech: "/images/company/tech.jpg",
  vision: {
    digital: "/images/company/digital.jpg",
    smart: "/images/company/smart.jpg",
    growth: "/images/company/growth.jpg",
  },
  values: {
    customer: "/images/company/customer.jpg",
    innovation: "/images/company/innovation.jpg",
    trust: "/images/company/trust.jpg",
  },
  cta: "/images/company/customer.jpg",
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

