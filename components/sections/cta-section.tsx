"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CTASectionProps {
  /**
   * 제목
   */
  title: ReactNode;
  /**
   * 설명
   */
  description?: ReactNode;
  /**
   * 액션 버튼들
   */
  actions?: ReactNode;
  /**
   * 배경 이미지 또는 요소
   */
  backgroundImage?: string | ReactNode;
  /**
   * 섹션 변형
   * @default "default"
   */
  variant?: "default" | "primary" | "gradient";
  className?: string;
}

const VARIANTS = {
  default: "bg-muted/50",
  primary: "bg-primary text-primary-foreground",
  gradient: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
} as const;

/**
 * Call-to-Action (CTA) 섹션 컴포넌트
 * 
 * @example
 * ```tsx
 * <CTASection
 *   title="지금 바로 문의하세요"
 *   description="기업의 모든 기술적 문제를 해결해드립니다"
 *   actions={
 *     <>
 *       <Button size="lg">문의하기</Button>
 *       <Button size="lg" variant="outline">더 알아보기</Button>
 *     </>
 *   }
 *   variant="gradient"
 * />
 * ```
 */
export function CTASection({
  title,
  description,
  actions,
  backgroundImage,
  variant = "default",
  className,
}: CTASectionProps) {
  return (
    <Section padding="lg" className={cn("relative overflow-hidden", VARIANTS[variant], className)}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          {typeof backgroundImage === "string" ? (
            <img
              src={backgroundImage}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          ) : (
            backgroundImage
          )}
        </div>
      )}
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg md:text-xl opacity-90">
              {description}
            </p>
          )}
          
          {actions && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
