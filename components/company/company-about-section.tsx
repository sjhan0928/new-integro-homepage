"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionWrapper, HoverScale } from "@/components/ui/motion";
import { Users, Lightbulb, Target, LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface CompanyAboutSectionProps {
  content?: {
    title: string;
    description: string;
    features: FeatureItem[];
  };
  aboutImage?: string;
  images?: {
    about?: string;
    [key: string]: string | undefined;
  };
}

// 기본 데이터
const DEFAULT_CONTENT = {
  title: "통합으로 성장을 이끄는\nIT 전문 기업",
  description: "인테그로는 DX(디지털 전환)와 AX(AI 전환)를 통해 고객사의 비즈니스 성장을 지원하는 IT 전문 기업입니다. 맞춤형 컨설팅부터 솔루션 개발, 도입까지 원스톱 서비스를 제공합니다.",
  features: [
    {
      icon: Users,
      title: "고객 중심",
      desc: "고객의 비즈니스 목표를 최우선으로 생각합니다.",
    },
    {
      icon: Lightbulb,
      title: "혁신적 기술",
      desc: "최신 기술과 AI를 활용한 혁신적인 솔루션을 제공합니다.",
    },
    {
      icon: Target,
      title: "맞춤형 솔루션",
      desc: "각 기업의 특성에 맞는 맞춤형 솔루션을 설계합니다.",
    },
  ],
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80";

export function CompanyAboutSection({ content, aboutImage, images }: CompanyAboutSectionProps) {
  // content가 없으면 기본값 사용
  const displayContent = content || DEFAULT_CONTENT;
  // aboutImage 또는 images.about 또는 기본값 사용
  const displayImage = aboutImage || images?.about || DEFAULT_IMAGE;
  return (
    <Section variant="muted" padding="lg" className="relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 그라데이션 원 */}
        <div className="absolute -top-20 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3ecf8e]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-64 h-64 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-2xl" />
        
        {/* 격자 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* 원형 데코레이션 */}
        <div className="absolute top-32 right-20 w-40 h-40 border border-primary/10 rounded-full" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-[#3ecf8e]/15 rounded-full" />
        
        {/* 도트 패턴 */}
        <div className="absolute bottom-20 right-10 grid grid-cols-4 gap-2 opacity-15">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 이미지 */}
          <MotionWrapper variant="slideInLeft">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={displayImage}
                alt="About Integro"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              {/* 플로팅 장식 */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#0d4f8b] to-[#3ecf8e] rounded-2xl opacity-80" />
            </div>
          </MotionWrapper>

          {/* 콘텐츠 */}
          <div className="space-y-8">
            <MotionWrapper variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
                {displayContent.title}
              </h2>
            </MotionWrapper>

            <MotionWrapper variant="fadeInUp" delay={0.1}>
              <p className="text-lg text-muted-foreground">
                {displayContent.description}
              </p>
            </MotionWrapper>

            <div className="grid gap-6">
              {displayContent.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <MotionWrapper key={index} variant="fadeInUp" delay={0.2 + index * 0.1}>
                    <HoverScale>
                      <div className="flex gap-4 p-4 rounded-xl bg-background hover:bg-primary/5 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    </HoverScale>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
