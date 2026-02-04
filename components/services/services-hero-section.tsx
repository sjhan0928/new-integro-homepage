"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Sparkles } from "lucide-react";
import { openFloatingContact } from "@/components/floating-contact";

// 기본 콘텐츠
const defaultContent = {
  ko: {
    badge: "ALL-IN-ONE SOLUTION",
    title: "업무 관리의 모든 것,\n하나의 솔루션으로",
    subtitle: "ERP, 그룹웨어, CRM 등 복잡한 업무를 올인원 솔루션으로 통합하세요.\n숨겨진 비용 없이 비즈니스 성장에만 집중할 수 있습니다.",
    cta: "무료 상담 시작하기",
    stats: [
      { value: "70+", label: "비즈니스 앱" },
      { value: "1,500만+", label: "전 세계 사용자" },
      { value: "99.9%", label: "가동률" },
    ]
  },
  en: {
    badge: "ALL-IN-ONE SOLUTION",
    title: "Everything for Business,\nOne Solution",
    subtitle: "Integrate complex tasks like ERP, groupware, and CRM into one all-in-one solution.\nFocus only on business growth without hidden costs.",
    cta: "Start Free Consultation",
    stats: [
      { value: "70+", label: "Business Apps" },
      { value: "15M+", label: "Global Users" },
      { value: "99.9%", label: "Uptime" },
    ]
  },
};

interface ServicesHeroSectionProps {
  content?: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export function ServicesHeroSection({ content }: ServicesHeroSectionProps) {
  const { lang } = useI18n();
  const langKey = (lang as 'ko' | 'en') || 'ko';
  const displayContent = defaultContent[langKey];

  return (
    <Section variant="default" padding="none" className="relative pt-24 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/hero-services.jpg"
          alt="Services Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      {/* 기하학적 배경 패턴 */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* 격자 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* 원형 패턴 */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/5 rounded-full" />
        
        {/* 그라데이션 구체 */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#3ecf8e]/10 to-transparent rounded-full blur-3xl" />
        
        {/* 도트 패턴 */}
        <div className="absolute top-1/4 right-20 grid grid-cols-4 gap-4 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-primary/30 text-primary bg-primary/5"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {displayContent.badge}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight whitespace-pre-line">
              {displayContent.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl whitespace-pre-line">
              {displayContent.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => openFloatingContact()}
                className="bg-gradient-to-r from-[#0d4f8b] via-[#1a7ab8] to-[#3ecf8e] hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/25"
              >
                {displayContent.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* 통계 */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              {displayContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 오른쪽 빈 공간 (이미지가 배경으로 보임) */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </Section>
  );
}
