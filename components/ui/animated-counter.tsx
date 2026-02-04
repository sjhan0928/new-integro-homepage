'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
  once = true,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (once && hasAnimated) return;

    const timeout = setTimeout(() => {
      let startTime: number;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const currentValue = startValue + (end - startValue) * easeOut;
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, end, duration, once, hasAnimated, delay]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    // 천 단위 콤마 추가
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={cn('tabular-nums', className)}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.span>
  );
}

// 여러 숫자를 함께 표시하는 Stats 컴포넌트
interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

interface AnimatedStatsProps {
  items: StatItemProps[];
  className?: string;
}

export function AnimatedStats({ items, className }: AnimatedStatsProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8', className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-primary">
            <AnimatedCounter
              end={item.value}
              suffix={item.suffix}
              prefix={item.prefix}
              decimals={item.decimals}
              delay={index * 0.1}
            />
          </div>
          <p className="mt-2 text-muted-foreground">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
