"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /**
   * 섹션의 배경색 변형
   * @default "default"
   */
  variant?: "default" | "muted" | "accent";
  /**
   * 섹션 내부 패딩
   * @default "default"
   */
  padding?: "none" | "sm" | "default" | "lg";
}

const VARIANTS = {
  default: "",
  muted: "bg-muted/30",
  accent: "bg-accent/10",
} as const;

const PADDING = {
  none: "py-0",
  sm: "py-8 md:py-12",
  default: "py-12 md:py-16 lg:py-24",
  lg: "py-16 md:py-24 lg:py-32",
} as const;

/**
 * 홈페이지 섹션 컴포넌트
 * 
 * @example
 * ```tsx
 * <Section variant="muted" padding="lg">
 *   <Container>
 *     <h2>섹션 제목</h2>
 *   </Container>
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  variant = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section className={cn(VARIANTS[variant], PADDING[padding], className)}>
      {children}
    </section>
  );
}
