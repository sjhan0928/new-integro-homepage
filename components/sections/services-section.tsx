"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { ReactNode } from "react";

interface ServiceItem {
  number?: string | number;
  title: string;
  description: string;
  highlight?: string;
  badges?: string[];
  image?: string | ReactNode;
}

interface ServicesSectionProps {
  /**
   * 섹션 제목
   */
  title?: ReactNode;
  /**
   * 섹션 설명
   */
  description?: ReactNode;
  /**
   * 서비스 아이템 배열
   */
  items: ServiceItem[];
  /**
   * 그리드 열 개수
   * @default 3
   */
  columns?: 2 | 3 | 4;
  /**
   * 섹션 변형
   * @default "default"
   */
  variant?: "default" | "muted" | "accent";
  className?: string;
}

const COLUMNS = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * 서비스/프로세스를 단계별로 표시하는 섹션
 * 
 * @example
 * ```tsx
 * <ServicesSection
 *   title="AI 스토어"
 *   description="쉽고, 빠르고, 효과적으로 AI를 쇼핑하세요"
 *   items={[
 *     {
 *       number: "01",
 *       title: "무료 컨설팅",
 *       highlight: "무료",
 *       description: "전문가의 AI 도입 컨설팅을 통해...",
 *       badges: ["빠른 상담", "맞춤 추천"]
 *     }
 *   ]}
 * />
 * ```
 */
export function ServicesSection({
  title,
  description,
  items,
  columns = 3,
  variant = "default",
  className,
}: ServicesSectionProps) {
  return (
    <Section variant={variant} className={className}>
      <Container>
        {(title || description) && (
          <div className="mb-12">
            <SectionHeader title={title} description={description} />
          </div>
        )}
        
        <div className={cn("grid gap-6", COLUMNS[columns])}>
          {items.map((item, index) => (
            <ServiceCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              highlight={item.highlight}
              badges={item.badges}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
