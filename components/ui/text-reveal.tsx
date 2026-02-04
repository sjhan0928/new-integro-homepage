'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

// 단어 단위로 나타나는 텍스트 Reveal
export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

// 글자 단위로 나타나는 텍스트 Reveal
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function CharReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: CharRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const chars = text.split('');

  return (
    <div ref={ref} className={className}>
      {chars.map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + index * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

// 라인 단위로 나타나는 텍스트 Reveal
interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export function LineReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: '100%' };
      case 'down':
        return { y: '-100%' };
      case 'left':
        return { x: '100%' };
      case 'right':
        return { x: '-100%' };
      default:
        return { y: '100%' };
    }
  };

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? { x: 0, y: 0 } : getInitialPosition()}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 페이드 인 with blur 효과
interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: boolean;
  once?: boolean;
}

export function FadeReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  blur = true,
  once = true,
}: FadeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 30,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
          : {
              opacity: 0,
              y: 30,
              filter: blur ? 'blur(10px)' : 'blur(0px)',
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// 스태거 컨테이너 (자식 요소들이 순차적으로 나타남)
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// 스태거 아이템
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
