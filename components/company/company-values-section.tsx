"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionWrapper, HoverScale } from "@/components/ui/motion";
import { useI18n } from "@/lib/i18n";
import { Heart, Lightbulb, Handshake } from "lucide-react";

interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

// 기본 콘텐츠
const defaultContent = {
  ko: {
    title: "우리의 핵심 가치",
    items: [
      {
        num: "01",
        title: "고객 중심",
        desc: "고객의 성공이 곧 우리의 성공입니다. 모든 의사결정에서 고객의 이익을 최우선으로 생각합니다.",
      },
      {
        num: "02",
        title: "기술 혁신",
        desc: "최신 기술 트렌드를 선도하며, 지속적인 연구개발을 통해 혁신적인 솔루션을 제공합니다.",
      },
      {
        num: "03",
        title: "신뢰와 협력",
        desc: "투명한 소통과 책임감 있는 업무 수행으로 신뢰를 구축하고, 파트너와의 협력을 강화합니다.",
      },
    ],
  },
  en: {
    title: "Our Core Values",
    items: [
      {
        num: "01",
        title: "Customer First",
        desc: "Customer success is our success. We prioritize customer benefits in all decisions.",
      },
      {
        num: "02",
        title: "Tech Innovation",
        desc: "We lead technology trends and provide innovative solutions through continuous R&D.",
      },
      {
        num: "03",
        title: "Trust & Collaboration",
        desc: "We build trust through transparent communication and responsible work, strengthening partnerships.",
      },
    ],
  },
};

const VALUE_ICONS = [Heart, Lightbulb, Handshake];

interface CompanyValuesSectionProps {
  content?: {
    title: string;
    items: ValueItem[];
  };
  valuesImages?: {
    customer: string;
    innovation: string;
    trust: string;
  };
  images?: {
    customer?: string;
    innovation?: string;
    trust?: string;
  };
}

export function CompanyValuesSection({ content }: CompanyValuesSectionProps) {
  const { lang } = useI18n();
  const displayContent = content || defaultContent[lang as 'ko' | 'en'];

  return (
    <Section variant="muted" padding="lg" className="relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 그라데이션 원 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#3ecf8e]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-primary/8 to-transparent rounded-full blur-2xl" />
        
        {/* 도트 패턴 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(13,79,139,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* 원형 데코레이션 */}
        <div className="absolute top-16 right-16 w-28 h-28 border border-primary/10 rounded-full" />
        <div className="absolute bottom-24 left-24 w-36 h-36 border border-[#3ecf8e]/10 rounded-full" />
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-primary/15 rounded-full animate-pulse" />
        
        {/* 도트 그룹 */}
        <div className="absolute bottom-12 right-20 grid grid-cols-3 gap-2 opacity-15">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#3ecf8e]/60" />
          ))}
        </div>
        <div className="absolute top-20 left-1/3 grid grid-cols-4 gap-3 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <MotionWrapper variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{displayContent.title}</h2>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {displayContent.items.map((item, index) => {
            const Icon = VALUE_ICONS[index];
            return (
              <MotionWrapper key={index} variant="fadeInUp" delay={index * 0.15}>
                <HoverScale scale={1.02}>
                  <div className="group relative h-full">
                    {/* 카드 */}
                    <div className="relative overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 p-8 h-full">
                      {/* 배경 그라데이션 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#3ecf8e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* 번호 배지 */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#0d4f8b] to-[#3ecf8e] rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white font-bold text-lg">{item.num}</span>
                      </motion.div>
                      
                      <div className="relative space-y-6">
                        {/* 아이콘 */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d4f8b]/10 to-[#3ecf8e]/10 flex items-center justify-center group-hover:from-[#0d4f8b]/20 group-hover:to-[#3ecf8e]/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>

                        {/* 콘텐츠 */}
                        <div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        
                        {/* 하단 장식 라인 */}
                        <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] transition-all duration-500 rounded-full" />
                      </div>
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
