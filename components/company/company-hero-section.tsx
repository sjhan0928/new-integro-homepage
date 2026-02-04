"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/ui/motion";
import { Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// 기본 콘텐츠
const defaultContent = {
  ko: {
    badge: "ABOUT US",
    title1: "통합으로 성장을 이끌는",
    title2: "IT 전문 기업",
    subtitle: "INTEGRATION FOR GROWS",
    description: "인테그로는 기업의 디지털 전환을 위한 최적의 IT 솔루션 파트너입니다. ERP, 시스템 통합, 맞춤형 개발 등 다양한 서비스를 제공합니다.",
  },
  en: {
    badge: "ABOUT US",
    title1: "Leading Growth",
    title2: "Through Integration",
    subtitle: "INTEGRATION FOR GROWS",
    description: "Integro is the optimal IT solution partner for your company's digital transformation. We provide various services including ERP, system integration, and custom development.",
  },
};

// 실제 존재하는 이미지 사용
const defaultHeroImage = "/images/hero-bright-office.jpg";

interface CompanyHeroSectionProps {
  content?: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    description: string;
  };
  heroImage?: string;
}

export function CompanyHeroSection({ content, heroImage }: CompanyHeroSectionProps) {
  const { lang } = useI18n();
  const displayContent = content || defaultContent[lang as 'ko' | 'en'];
  const displayImage = heroImage || defaultHeroImage;

  return (
    <Section variant="default" padding="none" className="relative min-h-[80vh] overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src={displayImage}
          alt="Office Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      {/* 기하학적 패턴 - 더 풍부하게 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 원형 패턴 */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 left-20 w-32 h-32 border-2 border-primary/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/15 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-primary/10 rounded-full" />
        
        {/* 그라데이션 원 */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#3ecf8e]/5 to-transparent rounded-full blur-3xl" />
        
        {/* 격자 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* 도트 패턴 */}
        <div className="absolute top-1/4 right-10 grid grid-cols-5 gap-3 opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/50" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <div className="flex items-center min-h-[80vh] py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* 텍스트 영역 */}
            <div className="space-y-8">
              <MotionWrapper variant="fadeInUp">
                <Badge variant="secondary" className="gap-2 px-4 py-2">
                  <Building2 className="h-4 w-4" />
                  {displayContent.badge}
                </Badge>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp" delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="text-primary">{displayContent.title1}</span>
                  <br />
                  {displayContent.title2}
                </h1>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp" delay={0.2}>
                <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                  {displayContent.subtitle}
                </p>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp" delay={0.3}>
                <p className="text-lg text-muted-foreground max-w-xl">
                  {displayContent.description}
                </p>
              </MotionWrapper>
            </div>

            {/* 통계/비주얼 영역 */}
            <MotionWrapper variant="slideInRight" delay={0.4} className="hidden lg:block">
              <div className="relative aspect-square max-w-xl xl:max-w-2xl ml-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#3ecf8e]/20 rounded-3xl"
                />
                <Image
                  src={displayImage}
                  alt="Company"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                {/* 플로팅 요소 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#0d4f8b] to-[#1a7ab8] rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xl">10+</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#3ecf8e] to-[#2ab777] rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">100%</span>
                </motion.div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </Section>
  );
}
