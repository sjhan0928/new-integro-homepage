"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionWrapper, HoverScale } from "@/components/ui/motion";
import { CheckCircle, LucideIcon, Database, Cpu, Globe, Cog } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface CategoryItem {
  id: string;
  title: string;
  problem: string;
  solutions: string[];
  icon: LucideIcon;
}

// 기본 콘텐츠
const defaultContent = {
  ko: {
    title: "서비스 영역",
    subtitle: "기업의 다양한 디지털 전환 니즈에 맞춰 최적의 솔루션을 제공합니다.",
    categories: [
      {
        id: "erp",
        title: "ERP 솔루션",
        problem: "기업 자원 관리의 통합이 필요한 기업",
        solutions: ["재고 관리", "회계 시스템", "인사 관리", "생산 관리"],
        icon: Database,
      },
      {
        id: "ai",
        title: "AI 솔루션",
        problem: "AI를 통한 업무 자동화가 필요한 기업",
        solutions: ["챗봇 개발", "데이터 분석", "예측 모델", "자동화 시스템"],
        icon: Cpu,
      },
      {
        id: "web",
        title: "웹/앱 개발",
        problem: "디지털 플랫폼 구축이 필요한 기업",
        solutions: ["반응형 웹", "모바일 앱", "PWA", "API 개발"],
        icon: Globe,
      },
      {
        id: "system",
        title: "시스템 통합",
        problem: "기존 시스템 연동이 필요한 기업",
        solutions: ["레거시 연동", "API 통합", "데이터 마이그레이션", "클라우드 전환"],
        icon: Cog,
      },
    ],
  },
  en: {
    title: "Service Areas",
    subtitle: "We provide optimal solutions tailored to various digital transformation needs of enterprises.",
    categories: [
      {
        id: "erp",
        title: "ERP Solutions",
        problem: "Companies needing integrated resource management",
        solutions: ["Inventory Management", "Accounting System", "HR Management", "Production Management"],
        icon: Database,
      },
      {
        id: "ai",
        title: "AI Solutions",
        problem: "Companies needing AI-powered automation",
        solutions: ["Chatbot Development", "Data Analysis", "Predictive Models", "Automation Systems"],
        icon: Cpu,
      },
      {
        id: "web",
        title: "Web/App Development",
        problem: "Companies needing digital platform development",
        solutions: ["Responsive Web", "Mobile Apps", "PWA", "API Development"],
        icon: Globe,
      },
      {
        id: "system",
        title: "System Integration",
        problem: "Companies needing legacy system integration",
        solutions: ["Legacy Integration", "API Integration", "Data Migration", "Cloud Migration"],
        icon: Cog,
      },
    ],
  },
};

interface ServicesCategoriesSectionProps {
  content?: {
    title: string;
    subtitle: string;
    categories: CategoryItem[];
  };
}

export function ServicesCategoriesSection({ content }: ServicesCategoriesSectionProps) {
  const { lang } = useI18n();
  const displayContent = content || defaultContent[lang as 'ko' | 'en'];

  return (
    <Section variant="muted" padding="lg">
      <Container>
        <MotionWrapper variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayContent.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {displayContent.subtitle}
          </p>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {displayContent.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <MotionWrapper key={category.id} variant="fadeInUp" delay={index * 0.1}>
                <HoverScale scale={1.02}>
                  <div className="group h-full bg-card rounded-2xl border hover:border-primary/50 overflow-hidden transition-all duration-300">
                    <div className="p-8 space-y-6">
                      {/* 헤더 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d4f8b] to-[#3ecf8e] flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {category.problem}
                          </p>
                        </div>
                      </div>

                      {/* 솔루션 리스트 */}
                      <div className="space-y-3 pt-4 border-t">
                        <p className="text-sm font-medium text-primary">제공 솔루션</p>
                        <div className="grid grid-cols-2 gap-2">
                          {category.solutions.map((solution, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-[#3ecf8e] flex-shrink-0" />
                              <span>{solution}</span>
                            </motion.div>
                          ))}
                        </div>
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
