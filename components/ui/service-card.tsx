"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface ServiceCardProps {
  /**
   * 순번 표시
   */
  number?: string | number;
  /**
   * 카드 제목
   */
  title: string;
  /**
   * 카드 설명
   */
  description: string;
  /**
   * 강조 텍스트 (예: "무료", "2주")
   */
  highlight?: string;
  /**
   * 배지 라벨들
   */
  badges?: string[];
  /**
   * 이미지
   */
  image?: string | ReactNode;
  /**
   * 추가 콘텐츠
   */
  children?: ReactNode;
  className?: string;
}

/**
 * 서비스/프로세스를 단계별로 표시하는 카드 컴포넌트
 * 
 * @example
 * ```tsx
 * <ServiceCard
 *   number="01"
 *   title="무료 컨설팅"
 *   highlight="무료"
 *   description="전문가의 AI 도입 컨설팅을 통해, 내 회사에 알맞는 AI 상품이 무엇인지 무료로 알아보세요."
 *   badges={["빠른 상담", "맞춤 추천"]}
 * />
 * ```
 */
export function ServiceCard({
  number,
  title,
  description,
  highlight,
  badges,
  image,
  children,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      {number && (
        <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
          {number}
        </div>
      )}
      
      <CardHeader className={cn(number && "pt-20")}>
        <div className="space-y-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {highlight && (
            <div className="inline-block">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {highlight}
              </span>
            </div>
          )}
        </div>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      {(badges || image || children) && (
        <CardContent className="space-y-4">
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          
          {image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                image
              )}
            </div>
          )}
          
          {children}
        </CardContent>
      )}
    </Card>
  );
}
