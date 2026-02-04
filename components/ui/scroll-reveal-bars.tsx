"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealBarsProps {
  children: React.ReactNode;
  className?: string;
  barColor?: string;
  barCount?: number;
  /**
   * ��ũ�� ����/�� offset
   * @default ["start end", "center center"]
   */
  scrollOffset?: ["start end" | "center center" | "start start" | "end end", "start end" | "center center" | "start start" | "end end"];
}

// ���� �� ������Ʈ
function RevealBar({
  bar,
  scrollYProgress,
  barColor,
}: {
  bar: { id: number; startOffset: number; endOffset: number; top: string; height: string; skewY: number; translateX: string };
  scrollYProgress: MotionValue<number>;
  barColor: string;
}) {
  const scaleX = useTransform(
    scrollYProgress,
    [bar.startOffset, Math.min(bar.endOffset, 0.95)],
    [1, 0]
  );

  return (
    <motion.div
      className={cn("absolute left-0 right-0 z-10", barColor)}
      style={{
        top: bar.top,
        height: bar.height,
        scaleX,
        transformOrigin: bar.id % 2 === 0 ? "right" : "left",
        transform: `skewY(${bar.skewY}deg) translateX(${bar.translateX})`,
      }}
    />
  );
}

/**
 * ��ũ�ѽ� �Ķ��� �ٵ��� ���� �پ��鼭 �̹����� �巯���� ȿ��
 * �Ｚ���ﺴ�� ��Ÿ���� reveal �ִϸ��̼�
 */
export function ScrollRevealBars({
  children,
  className,
  barColor = "bg-blue-600",
  barCount = 8,
  scrollOffset = ["start end", "center center"],
}: ScrollRevealBarsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset,
  });

  // �� ������ ���� (useTransform ���� ���� �����͸�)
  // Math.random 대신 인덱스 기반 고정 값 사용
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, i) => {
      const startOffset = i * 0.05;
      const endOffset = 0.6 + i * 0.03;
      // 인덱스 기반 pseudo-random 값 (일관된 결과)
      const pseudoRandom = ((i * 7) % 10) / 10;

      return {
        id: i,
        startOffset,
        endOffset,
        top: `${(i * 100) / barCount + pseudoRandom * 2}%`,
        height: `${100 / barCount + 2}%`,
        skewY: (pseudoRandom - 0.5) * 4,
        translateX: i % 2 === 0 ? "-5%" : "5%",
      };
    });
  }, [barCount]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* ���� ������ (�̹���) */}
      {children}

      {/* �������� �ٵ� */}
      {bars.map((bar) => (
        <RevealBar
          key={bar.id}
          bar={bar}
          scrollYProgress={scrollYProgress}
          barColor={barColor}
        />
      ))}
    </div>
  );
}

/**
 * �� ������ �� ������ reveal ȿ��
 * ���Ī���̰� �پ��� ũ���� �ٵ�
 */
interface ScrollRevealBarsAdvancedProps {
  children: React.ReactNode;
  className?: string;
  barColor?: string;
  scrollOffset?: ["start end" | "center center" | "start start" | "end end" | "start 0.8" | "center 0.3", "start end" | "center center" | "start start" | "end end" | "start 0.8" | "center 0.3"];
}

// ���� ���� �� ������Ʈ
function AdvancedRevealBar({
  bar,
  index,
  scrollYProgress,
  barColor,
}: {
  bar: { top: string; height: string; width: string; left: string; delay: number };
  index: number;
  scrollYProgress: MotionValue<number>;
  barColor: string;
}) {
  const scaleX = useTransform(
    scrollYProgress,
    [bar.delay, Math.min(bar.delay + 0.5, 0.95)],
    [1, 0]
  );

  return (
    <motion.div
      className={cn("absolute z-10", barColor)}
      style={{
        top: bar.top,
        height: bar.height,
        width: bar.width,
        left: bar.left,
        scaleX,
        transformOrigin: index % 2 === 0 ? "right" : "left",
      }}
    />
  );
}

export function ScrollRevealBarsAdvanced({
  children,
  className,
  barColor = "bg-blue-600",
  scrollOffset = ["start end", "center center"],
}: ScrollRevealBarsAdvancedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset as ["start end", "center center"],
  });

  // �� �پ��� �� ���� ����
  const barPatterns = useMemo(
    () => [
      { top: "5%", height: "8%", width: "40%", left: "55%", delay: 0 },
      { top: "12%", height: "6%", width: "60%", left: "35%", delay: 0.02 },
      { top: "20%", height: "10%", width: "50%", left: "45%", delay: 0.04 },
      { top: "28%", height: "5%", width: "35%", left: "10%", delay: 0.06 },
      { top: "35%", height: "12%", width: "70%", left: "25%", delay: 0.08 },
      { top: "45%", height: "7%", width: "55%", left: "40%", delay: 0.1 },
      { top: "52%", height: "9%", width: "45%", left: "5%", delay: 0.12 },
      { top: "60%", height: "6%", width: "65%", left: "30%", delay: 0.14 },
      { top: "68%", height: "11%", width: "50%", left: "45%", delay: 0.16 },
      { top: "78%", height: "8%", width: "60%", left: "20%", delay: 0.18 },
      { top: "85%", height: "7%", width: "40%", left: "55%", delay: 0.2 },
      { top: "92%", height: "9%", width: "55%", left: "10%", delay: 0.22 },
    ],
    []
  );

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* ���� ������ (�̹���) */}
      {children}

      {/* �������� �ٵ� */}
      {barPatterns.map((bar, index) => (
        <AdvancedRevealBar
          key={index}
          bar={bar}
          index={index}
          scrollYProgress={scrollYProgress}
          barColor={barColor}
        />
      ))}
    </div>
  );
}
