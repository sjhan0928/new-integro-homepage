'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 기본 애니메이션 설정
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});

// ScrollTrigger 기본 설정
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 80%',
  end: 'bottom 20%',
});

export { gsap, ScrollTrigger };
