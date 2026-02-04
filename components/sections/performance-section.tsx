"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { ReactNode } from "react";

interface PerformanceItem {
  value: string | number;
  unit?: string;
  label: string;
  description?: string;
}

interface PerformanceSectionProps {
  /**
   * 섹션 제목
   */
  title?: ReactNode;
  /**
   * 섹션 설명
   */
  description?: ReactNode;
  /**
   * 실적 데이터 배열
   */
  items: PerformanceItem[];
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
 * 비즈니스 성과/실적을 표시하는 섹션
 * 
 * @example
 * ```tsx
 * <PerformanceSection
 *   title="DALPHA AI 도입으로 만들어낸"
 *   description="다양한 비즈니스 임팩트"
 *   items={[
 *     {
 *       value: "370만",
 *       unit: "개",
 *       label: "서비스 확대",
 *       description: "동일 상품 매칭 AI로 370만개 상품을 한번에 분류"
 *     },
 *     {
 *       value: 35,
 *       unit: "%",
 *       label: "업무 자동화",
 *       description: "숏폼 영상 편집 업무의 35%를 영상 분석 AI로 자동화"
 *     }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export function PerformanceSection({
  title,
  description,
  items,
  columns = 3,
  variant = "default",
  className,
}: PerformanceSectionProps) {
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
            <StatCard
              key={index}
              value={item.value}
              unit={item.unit}
              label={item.label}
              description={item.description}
              variant="primary"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
