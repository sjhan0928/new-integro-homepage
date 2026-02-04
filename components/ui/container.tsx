"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * 컨테이너 크기
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "full";
}

const SIZES = {
  sm: "max-w-5xl",
  default: "max-w-[1920px]",
  lg: "max-w-[2560px]",
  full: "max-w-full",
} as const;

/**
 * 컨텐츠 너비를 제한하고 중앙 정렬하는 컨테이너 컴포넌트
 * 큰 화면(32인치+)에서도 적절한 여백과 콘텐츠 배치
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>내용</h1>
 * </Container>
 * ```
 */
export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto w-full",
      "px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24",
      SIZES[size],
      className
    )}>
      {children}
    </div>
  );
}
