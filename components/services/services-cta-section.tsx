"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionWrapper, HoverScale } from "@/components/ui/motion";
import { Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { openFloatingContact } from "@/components/floating-contact";

// 기본 콘텐츠
const defaultContent = {
  ko: {
    title: "지금 바로 시작하세요",
    subtitle: "무료 상담을 통해 최적의 솔루션을 찾아보세요",
    primary: "무료 상담 신청",
    secondary: "적용사례 보기",
  },
  en: {
    title: "Get Started Now",
    subtitle: "Find the optimal solution through free consultation",
    primary: "Request Free Consultation",
    secondary: "View Case Studies",
  },
};

const DEFAULT_CTA_IMAGE = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80";

interface ServicesCTASectionProps {
  content?: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  ctaImage?: string;
}

export function ServicesCTASection({ content, ctaImage }: ServicesCTASectionProps) {
  const { lang } = useI18n();
  const displayContent = content || defaultContent[lang as 'ko' | 'en'];
  const displayImage = ctaImage || DEFAULT_CTA_IMAGE;
  return (
    <Section variant="default" padding="lg" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={displayImage}
          alt="CTA Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4f8b]/90 to-[#3ecf8e]/80" />
      </div>

      <Container className="relative">
        <MotionWrapper variant="fadeInUp" className="text-center text-white py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{displayContent.title}</h2>
          <p className="text-xl text-white/80 mb-8">{displayContent.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HoverScale>
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2"
                onClick={() => openFloatingContact()}
              >
                <Mail className="h-4 w-4" />
                {displayContent.primary}
              </Button>
            </HoverScale>
            <HoverScale>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/works">{displayContent.secondary}</Link>
              </Button>
            </HoverScale>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
