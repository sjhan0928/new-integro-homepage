"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  /**
   * 섹션 제목
   */
  title: ReactNode;
  /**
   * 섹션 설명
   */
  description?: ReactNode;
  /**
   * 상단 배지/라벨
   */
  badge?: ReactNode;
  /**
   * 정렬
   * @default "center"
   */
  align?: "left" | "center";
  className?: string;
}

const ALIGN = {
  left: "text-left",
  center: "text-center mx-auto",
} as const;

/**
 * 섹션 헤더 컴포넌트 (제목, 설명)
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   badge="Performance"
 *   title="DALPHA AI 도입으로 만들어낸"
 *   description="다양한 비즈니스 임팩트"
 *   align="center"
 * />
 * ```
 */
export function SectionHeader({
  title,
  description,
  badge,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 max-w-3xl", ALIGN[align], className)}>
      {badge && (
        <div className={cn(align === "center" ? "flex justify-center" : "")}>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
