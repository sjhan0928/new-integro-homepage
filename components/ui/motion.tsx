"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  once?: boolean;
}

const variantMap: Record<string, Variants> = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
};

/**
 * 스크롤 기반 애니메이션 래퍼 컴포넌트
 */
export function MotionWrapper({
  children,
  className,
  variant = "fadeInUp",
  delay = 0,
  once = true,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const selectedVariant = variantMap[variant];
  const modifiedVariant: Variants = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={modifiedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

/**
 * 자식 요소들을 순차적으로 애니메이션하는 컨테이너
 */
export function StaggerWrapper({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerWrapper 내부에서 사용하는 아이템 컴포넌트
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/**
 * 숫자 카운트업 애니메이션 컴포넌트
 */
export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// useState import 추가
import { useState } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * 패럴랙스 효과 컴포넌트
 */
export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      style={{ y: 0 }}
      whileInView={{
        y: [0, -20 * speed],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

/**
 * 호버 시 스케일 업 애니메이션
 */
export function HoverScale({
  children,
  scale = 1.05,
  className,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}

/**
 * 플로팅 애니메이션 (지속적인 위아래 움직임)
 */
export function Floating({
  children,
  duration = 3,
  distance = 10,
  className,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
