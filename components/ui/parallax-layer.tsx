'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // -1 ~ 1 (음수: 느리게, 양수: 빠르게)
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className,
  direction = 'vertical',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [`${speed * -50}%`, `${speed * 50}%`] : ['0%', '0%']
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'horizontal' ? [`${speed * -50}%`, `${speed * 50}%`] : ['0%', '0%']
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y, x }}>{children}</motion.div>
    </div>
  );
}

// 배경 이미지용 패럴랙스
interface ParallaxBackgroundProps {
  src: string;
  alt?: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
}

export function ParallaxBackground({
  src,
  alt = '',
  speed = 0.3,
  className,
  overlay = false,
  overlayColor = 'bg-black/30',
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -30}%`, `${speed * 30}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={cn('absolute inset-0 overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="h-[120%] w-full object-cover"
      />
      {overlay && <div className={cn('absolute inset-0', overlayColor)} />}
    </div>
  );
}
