"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { AnimatedCounter, FadeReveal, TextReveal, TiltCard } from "@/components/ui";
import { cn } from "@/lib/utils";

interface StatsItem {
  metric: string;
  /** 애니메이션 카운터를 위한 숫자 값 */
  value?: number;
  /** 숫자 뒤에 붙는 접미사 (+, %, 만+ 등) */
  suffix?: string;
  /** 소수점 자릿수 */
  decimals?: number;
  label: string;
  description: string;
}

interface StatsGridSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatsItem[];
  /** 카운트업 애니메이션 사용 여부 */
  animated?: boolean;
  /** 3D 틸트 효과 사용 여부 */
  tiltEffect?: boolean;
  className?: string;
}

/**
 * 통계 및 성과 그리드 섹션
 * 
 * @example
 * ```tsx
 * // 기본 사용
 * <StatsGridSection
 *   title="인테그로가 만들어낸 비즈니스 임팩트"
 *   stats={[
 *     { metric: "50%", label: "업무 효율 향상", description: "..." },
 *   ]}
 * />
 * 
 * // 애니메이션 카운터 사용
 * <StatsGridSection
 *   title="비즈니스 임팩트"
 *   animated
 *   stats={[
 *     { value: 50, suffix: "%", label: "업무 효율 향상", description: "..." },
 *     { value: 370, suffix: "만+", label: "관리되는 거래", description: "..." },
 *   ]}
 * />
 * ```
 */
export function StatsGridSection({
  title,
  subtitle,
  stats,
  animated = false,
  tiltEffect = false,
  className,
}: StatsGridSectionProps) {
  const renderStatCard = (stat: StatsItem, index: number) => {
    const card = (
      <StatCard
        key={index}
        value={
          animated && stat.value !== undefined ? (
            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix || ''}
              decimals={stat.decimals || 0}
              duration={2}
            />
          ) : (
            stat.metric
          )
        }
        label={stat.label}
        description={stat.description}
        className={cn(
          "transition-all duration-300",
          !tiltEffect && "hover:scale-105"
        )}
      />
    );

    if (tiltEffect) {
      return (
        <TiltCard key={index} maxTilt={10}>
          {card}
        </TiltCard>
      );
    }

    return card;
  };

  return (
    <Section className={cn("bg-accent/5", className)}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12 space-y-4">
            {title && (
              <FadeReveal>
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
              </FadeReveal>
            )}
            {subtitle && (
              <FadeReveal delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {subtitle}
                </p>
              </FadeReveal>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeReveal key={index} delay={0.1 * index}>
              {renderStatCard(stat, index)}
            </FadeReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
