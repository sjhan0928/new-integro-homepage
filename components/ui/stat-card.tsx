"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  /**
   * 통계 수치 또는 값 (ReactNode로 AnimatedCounter 등도 허용)
   */
  value: ReactNode;
  /**
   * 단위 (%, 개, 명 등)
   */
  unit?: string;
  /**
   * 통계 라벨
   */
  label: string;
  /**
   * 추가 설명
   */
  description?: string;
  /**
   * 아이콘 또는 이미지
   */
  icon?: ReactNode;
  /**
   * 카드 변형
   * @default "default"
   */
  variant?: "default" | "primary" | "accent";
  className?: string;
}

const VARIANTS = {
  default: "bg-card",
  primary: "bg-primary/5 border-primary/20",
  accent: "bg-accent/50",
} as const;

/**
 * 통계/수치를 강조하여 표시하는 카드 컴포넌트
 * 
 * @example
 * ```tsx
 * <StatCard
 *   value="370만"
 *   unit="개"
 *   label="서비스 확대"
 *   description="동일 상품 매칭 AI로 370만개 상품을 한번에 분류"
 *   variant="primary"
 * />
 * ```
 */
export function StatCard({
  value,
  unit,
  label,
  description,
  icon,
  variant = "default",
  className,
}: StatCardProps) {
  return (
    <Card className={cn(VARIANTS[variant], className)}>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {icon && (
            <div className="inline-flex h-10 w-10 items-center justify-center">
              {icon}
            </div>
          )}
          
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold tracking-tight">
                {value}
              </span>
              {unit && (
                <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  {unit}
                </span>
              )}
            </div>
            
            <p className="text-lg font-semibold">{label}</p>
            
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
