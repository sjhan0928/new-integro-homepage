"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { ReactNode } from "react";

interface FeatureItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  /**
   * 섹션 제목
   */
  title?: ReactNode;
  /**
   * 섹션 설명
   */
  description?: ReactNode;
  /**
   * 기능 아이템 배열
   */
  items: FeatureItem[];
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
  /**
   * 카드 변형
   * @default "default"
   */
  cardVariant?: "default" | "bordered" | "elevated";
  className?: string;
}

const COLUMNS = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * 제품 기능/특징을 표시하는 섹션
 * 
 * @example
 * ```tsx
 * <FeaturesSection
 *   title="Domain"
 *   description="모든 분야의 AI를 이미 보유하고 있습니다"
 *   items={[
 *     {
 *       icon: <ShoppingCart className="h-6 w-6" />,
 *       title: "이커머스",
 *       description: "상품 DB 관리에 많은 시간을 쓰고 있지 않으신가요?"
 *     }
 *   ]}
 *   columns={3}
 *   cardVariant="elevated"
 * />
 * ```
 */
export function FeaturesSection({
  title,
  description,
  items,
  columns = 3,
  variant = "default",
  cardVariant = "default",
  className,
}: FeaturesSectionProps) {
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
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant={cardVariant}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
