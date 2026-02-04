'use client';

import { useState, useEffect } from 'react';

/**
 * 사용자의 'prefers-reduced-motion' 미디어 쿼리 설정을 감지하는 훅
 * 
 * 접근성을 위해 모션/애니메이션 감소 선호 설정을 존중합니다.
 * 
 * @returns {boolean} true면 애니메이션 감소 선호, false면 일반 애니메이션 허용
 * 
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 * 
 * return (
 *   <motion.div
 *     animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
 *   >
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export function useReducedMotion(): boolean {
  // 초기값을 함수로 설정하여 SSR 안전하게 처리
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    // SSR 환경 체크
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 변경 리스너
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // 이벤트 리스너 등록
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * 애니메이션 설정을 조건부로 반환하는 유틸리티
 * 
 * @param normalAnimation - 일반 애니메이션 설정
 * @param reducedAnimation - 축소된 애니메이션 설정 (기본값: 빈 객체)
 * @param prefersReducedMotion - 축소된 모션 선호 여부
 * @returns 적절한 애니메이션 설정
 */
export function getAnimationSettings<T>(
  normalAnimation: T,
  reducedAnimation: T | Record<string, never> = {} as T,
  prefersReducedMotion: boolean
): T | Record<string, never> {
  return prefersReducedMotion ? reducedAnimation : normalAnimation;
}
