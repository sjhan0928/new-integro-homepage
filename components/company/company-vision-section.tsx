"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionWrapper, HoverScale } from "@/components/ui/motion";
import { LucideIcon, Monitor, Cpu, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface VisionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// 기본 콘텐츠
const defaultContent = {
  ko: {
    title: "우리의 비전",
    description: "디지털 전환을 통해 기업의 성장을 이끌어갑니다",
    items: [
      {
        icon: Monitor,
        title: "디지털 혁신",
        desc: "최신 기술로 비즈니스 프로세스를 혁신합니다.",
      },
      {
        icon: Cpu,
        title: "스마트 솔루션",
        desc: "AI와 데이터 기반의 스마트 솔루션을 제공합니다.",
      },
      {
        icon: TrendingUp,
        title: "지속 성장",
        desc: "고객과 함께 지속적인 성장을 추구합니다.",
      },
    ],
  },
  en: {
    title: "Our Vision",
    description: "Leading business growth through digital transformation",
    items: [
      {
        icon: Monitor,
        title: "Digital Innovation",
        desc: "Innovating business processes with the latest technology.",
      },
      {
        icon: Cpu,
        title: "Smart Solutions",
        desc: "Providing AI and data-driven smart solutions.",
      },
      {
        icon: TrendingUp,
        title: "Sustainable Growth",
        desc: "Pursuing continuous growth with our clients.",
      },
    ],
  },
};

const DEFAULT_IMAGES = {
  digital: "/images/domain-analytics.jpg",
  smart: "/images/dashboard.jpg",
  growth: "/images/performance-dashboard.jpg",
};

interface CompanyVisionSectionProps {
  content?: {
    title: string;
    description: string;
    items: VisionItem[];
  };
  visionImages?: {
    digital: string;
    smart: string;
    growth: string;
  };
  images?: {
    digital?: string;
    smart?: string;
    growth?: string;
  };
}

export function CompanyVisionSection({ content, visionImages, images: propsImages }: CompanyVisionSectionProps) {
  const { lang } = useI18n();
  const displayContent = content || defaultContent[lang as 'ko' | 'en'];
  const displayImages = visionImages || propsImages || DEFAULT_IMAGES;
  const images = [displayImages.digital || DEFAULT_IMAGES.digital, displayImages.smart || DEFAULT_IMAGES.smart, displayImages.growth || DEFAULT_IMAGES.growth];

  return (
    <Section variant="default" padding="lg" className="relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 그라데이션 원 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#3ecf8e]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-[#3ecf8e]/3 rounded-full blur-3xl" />
        
        {/* 격자 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* 원형 테두리 데코레이션 */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-[#3ecf8e]/10 rounded-full" />
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-primary/15 rounded-full" />
        
        {/* 도트 패턴 */}
        <div className="absolute top-16 right-1/4 grid grid-cols-5 gap-3 opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <MotionWrapper variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{displayContent.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {displayContent.description}
          </p>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {displayContent.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionWrapper key={index} variant="fadeInUp" delay={index * 0.1}>
                <HoverScale>
                  <div className="group relative overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 h-full">
                    {/* 배경 이미지 - 더 잘 보이게 */}
                    <div className="absolute inset-0">
                      <Image
                        src={images[index]}
                        alt={item.title}
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    </div>

                    <div className="relative p-8 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d4f8b] to-[#3ecf8e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </HoverScale>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
