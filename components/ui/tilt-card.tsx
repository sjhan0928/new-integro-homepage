'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // 최대 틸트 각도 (도)
  scale?: number; // 호버 시 스케일
  perspective?: number; // 원근법 값
  glare?: boolean; // 글레어 효과 여부
  glareOpacity?: number; // 글레어 투명도
}

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  glareOpacity = 0.3,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // 스프링 애니메이션 적용
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    rotateX.set((y - 0.5) * -maxTilt * 2);
    rotateY.set((x - 0.5) * maxTilt * 2);

    // 글레어 위치 업데이트
    glareX.set(x * 100);
    glareY.set(y * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className)}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ scale: isHovered ? scale : 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full w-full"
      >
        {children}

        {/* 글레어 효과 */}
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

// 3D 플립 카드
interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  flipDirection?: 'horizontal' | 'vertical';
}

export function FlipCard({
  front,
  back,
  className,
  flipDirection = 'horizontal',
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn('relative cursor-pointer', className)}
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: flipDirection === 'horizontal' ? (isFlipped ? 180 : 0) : 0,
          rotateX: flipDirection === 'vertical' ? (isFlipped ? 180 : 0) : 0,
        }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* 앞면 */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* 뒷면 */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backfaceVisibility: 'hidden',
            transform:
              flipDirection === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

// 호버 시 3D 효과가 있는 카드
interface Hover3DCardProps {
  children: ReactNode;
  className?: string;
  depth?: number; // 3D 깊이 효과
}

export function Hover3DCard({
  children,
  className,
  depth = 20,
}: Hover3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / width;
    const y = (clientY - (top + height / 2)) / height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className)}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateY: isHovered ? mousePosition.x * 10 : 0,
        rotateX: isHovered ? -mousePosition.y * 10 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* 그림자 레이어 */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] bg-black/20 blur-xl"
        animate={{
          x: isHovered ? mousePosition.x * depth : 0,
          y: isHovered ? mousePosition.y * depth : 0,
          scale: isHovered ? 0.95 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
