'use client';

import { useState, useRef, useCallback, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  component: ReactNode;
}

interface FullPageScrollProps {
  sections: Section[];
  className?: string;
  showIndicator?: boolean;
  indicatorPosition?: 'left' | 'right';
  transitionDuration?: number;
  enableKeyboard?: boolean;
  enableTouch?: boolean;
}

export function FullPageScroll({
  sections,
  className,
  showIndicator = true,
  indicatorPosition = 'right',
  transitionDuration = 0.8,
  enableKeyboard = true,
  enableTouch = true,
}: FullPageScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 이동 함수
  const goToSection = useCallback(
    (index: number) => {
      if (isScrolling.current) return;
      if (index < 0 || index >= sections.length) return;

      isScrolling.current = true;
      setCurrentIndex(index);

      setTimeout(() => {
        isScrolling.current = false;
      }, transitionDuration * 1000 + 100);
    },
    [sections.length, transitionDuration]
  );

  // 휠 이벤트 핸들러
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        goToSection(currentIndex + 1);
      } else if (e.deltaY < 0) {
        goToSection(currentIndex - 1);
      }
    },
    [currentIndex, goToSection]
  );

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!enableTouch) return;
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSection(currentIndex + 1);
        } else {
          goToSection(currentIndex - 1);
        }
      }
    },
    [currentIndex, enableTouch, goToSection]
  );

  // 키보드 이벤트 핸들러
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSection(currentIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSection(currentIndex - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSection(sections.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, enableKeyboard, goToSection, sections.length]);

  return (
    <div
      ref={containerRef}
      className={cn('h-screen overflow-hidden', className)}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            duration: transitionDuration,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="h-full"
        >
          {sections[currentIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* 섹션 인디케이터 */}
      {showIndicator && (
        <div
          className={cn(
            'fixed top-1/2 z-50 -translate-y-1/2',
            indicatorPosition === 'right' ? 'right-8' : 'left-8'
          )}
        >
          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={cn(
                  'group relative h-3 w-3 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'scale-125 bg-primary'
                    : 'bg-white/50 hover:bg-white/80'
                )}
                aria-label={`Go to section ${index + 1}`}
              >
                {/* 호버 시 레이블 표시 */}
                <span
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-background/90 px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100',
                    indicatorPosition === 'right'
                      ? 'right-full mr-3'
                      : 'left-full ml-3'
                  )}
                >
                  {section.id}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 현재 섹션 표시 (디버그용, 선택적) */}
      {/* <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
        {currentIndex + 1} / {sections.length}
      </div> */}
    </div>
  );
}

// 개별 풀스크린 섹션 컴포넌트
interface FullPageSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
  overlayColor?: string;
}

export function FullPageSection({
  children,
  className,
  backgroundImage,
  backgroundColor,
  overlay = false,
  overlayColor = 'bg-black/50',
}: FullPageSectionProps) {
  return (
    <section
      className={cn(
        'relative flex h-screen w-full items-center justify-center',
        backgroundColor,
        className
      )}
    >
      {/* 배경 이미지 */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* 오버레이 */}
      {overlay && <div className={cn('absolute inset-0', overlayColor)} />}

      {/* 콘텐츠 */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}

// 일반 스크롤 + 스냅 방식 (CSS Scroll Snap 활용)
interface ScrollSnapContainerProps {
  children: ReactNode[];
  className?: string;
  snapType?: 'mandatory' | 'proximity';
}

export function ScrollSnapContainer({
  children,
  className,
  snapType = 'mandatory',
}: ScrollSnapContainerProps) {
  return (
    <div
      className={cn(
        'h-screen overflow-y-auto',
        snapType === 'mandatory' ? 'snap-y snap-mandatory' : 'snap-y snap-proximity',
        className
      )}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="min-h-screen snap-start snap-always"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
