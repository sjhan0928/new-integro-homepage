'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  coverColor?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className,
  coverColor = 'bg-primary',
  direction = 'right',
  duration = 0.8,
  delay = 0,
  once = true,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const getOrigin = () => {
    switch (direction) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'top':
        return 'top';
      case 'bottom':
        return 'bottom';
      default:
        return 'right';
    }
  };

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {/* 커버 (reveal effect) */}
      <motion.div
        className={cn('absolute inset-0 z-10', coverColor)}
        initial={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        animate={
          isInView
            ? isHorizontal
              ? { scaleX: 0 }
              : { scaleY: 0 }
            : isHorizontal
            ? { scaleX: 1 }
            : { scaleY: 1 }
        }
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        style={{ transformOrigin: getOrigin() }}
      />

      {/* 이미지 */}
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : { scale: 1.3 }}
        transition={{
          duration: duration * 1.5,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      />
    </div>
  );
}

// Next.js Image 컴포넌트와 함께 사용하는 버전
interface ImageRevealNextProps {
  children: React.ReactNode;
  className?: string;
  coverColor?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function ImageRevealContainer({
  children,
  className,
  coverColor = 'bg-primary',
  direction = 'right',
  duration = 0.8,
  delay = 0,
  once = true,
}: ImageRevealNextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const getOrigin = () => {
    switch (direction) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'top':
        return 'top';
      case 'bottom':
        return 'bottom';
      default:
        return 'right';
    }
  };

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {/* 커버 (reveal effect) */}
      <motion.div
        className={cn('absolute inset-0 z-10', coverColor)}
        initial={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        animate={
          isInView
            ? isHorizontal
              ? { scaleX: 0 }
              : { scaleY: 0 }
            : isHorizontal
            ? { scaleX: 1 }
            : { scaleY: 1 }
        }
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        style={{ transformOrigin: getOrigin() }}
      />

      {/* 이미지 컨테이너 */}
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : { scale: 1.3 }}
        transition={{
          duration: duration * 1.5,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 마스크 기반 이미지 reveal (더 부드러운 효과)
interface MaskRevealProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function MaskReveal({
  src,
  alt,
  className,
  duration = 1.2,
  delay = 0,
  once = true,
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="h-full w-full"
        initial={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        }}
        animate={
          isInView
            ? {
                clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
              }
            : {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
              }
        }
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{
            duration: duration * 1.2,
            delay,
            ease: [0.33, 1, 0.68, 1],
          }}
        />
      </motion.div>
    </div>
  );
}
