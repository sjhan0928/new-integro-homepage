"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  /**
   * 아이콘 컴포넌트 (JSX 요소로 전달)
   */
  icon?: ReactNode;
  /**
   * 카드 제목
   */
  title: string;
  /**
   * 카드 설명
   */
  description: string;
  /**
   * 추가 콘텐츠
   */
  children?: ReactNode;
  /**
   * 카드 변형
   * @default "default"
   */
  variant?: "default" | "bordered" | "elevated";
  className?: string;
}

const VARIANTS = {
  default: "",
  bordered: "border-2 hover:border-primary/50 transition-colors",
  elevated: "shadow-lg hover:shadow-xl transition-shadow",
} as const;

/**
 * 기능/특징을 표시하는 카드 컴포넌트
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={<Zap className="h-6 w-6" />}
 *   title="빠른 도입"
 *   description="평균 2주 만에 AI를 도입할 수 있습니다"
 *   variant="elevated"
 * />
 * ```
 */
export function FeatureCard({
  icon,
  title,
  description,
  children,
  variant = "default",
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn(VARIANTS[variant], className)}>
      <CardHeader>
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
