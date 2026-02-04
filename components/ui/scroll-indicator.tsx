'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface ScrollIndicatorProps {
  className?: string;
  variant?: 'arrow' | 'mouse' | 'text';
  text?: string;
  color?: string;
}

export function ScrollIndicator({
  className,
  variant = 'arrow',
  text = 'Scroll',
  color = 'text-white/70',
}: ScrollIndicatorProps) {
  const prefersReducedMotion = useReducedMotion();
  
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // 감소된 모션 선호 시 애니메이션 비활성화
  const bounceAnimation = prefersReducedMotion 
    ? {} 
    : { y: [0, 10, 0] };
  
  const bounceTransition = prefersReducedMotion 
    ? undefined
    : { repeat: Infinity, duration: 1.5, ease: 'easeInOut' as const };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        'absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer',
        color,
        className
      )}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: prefersReducedMotion ? 0 : 1, duration: prefersReducedMotion ? 0 : 0.5 }}
      aria-label="아래로 스크롤하기"
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={bounceAnimation}
        transition={bounceTransition}
      >
        {variant === 'text' && (
          <span className="text-sm font-medium tracking-wider uppercase">
            {text}
          </span>
        )}

        {variant === 'arrow' && (
          <>
            <span className="text-sm font-medium tracking-wider uppercase">
              {text}
            </span>
            <ChevronDown className="h-6 w-6" />
          </>
        )}

        {variant === 'mouse' && (
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-10 w-6 rounded-full border-2 border-current">
              <motion.div
                className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-current"
                animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={prefersReducedMotion ? {} : {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <span className="text-xs font-medium tracking-wider uppercase">
              {text}
            </span>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}
