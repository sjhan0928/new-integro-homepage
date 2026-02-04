'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  overlayColor?: string;
  /** overlayColor의 alias */
  overlayClassName?: string;
  className?: string;
  /** 접근성: 감소된 모션 선호 시 비디오 대신 정적 이미지 표시 */
  respectReducedMotion?: boolean;
}

export function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayColor,
  overlayClassName,
  className,
  respectReducedMotion = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // overlayClassName을 우선 사용, 없으면 overlayColor 사용
  const effectiveOverlayColor = overlayClassName || overlayColor || 'bg-black/50';

  useEffect(() => {
    // 모바일 감지 (성능 최적화를 위해 모바일에서는 이미지만 표시)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 모바일이거나 감소된 모션 선호 시 poster 이미지만 표시
  const showStaticImage = (isMobile || (respectReducedMotion && prefersReducedMotion)) && poster;
  
  if (showStaticImage) {
    return (
      <div className={cn('absolute inset-0 overflow-hidden', className)}>
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover"
        />
        {overlay && <div className={cn('absolute inset-0', effectiveOverlayColor)} />}
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {/* 로딩 플레이스홀더 */}
      {!isLoaded && poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* 비디오 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <source src={src} type="video/mp4" />
        {/* WebM 포맷 지원 */}
        {src.endsWith('.mp4') && (
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        )}
      </video>

      {/* 오버레이 */}
      {overlay && <div className={cn('absolute inset-0', effectiveOverlayColor)} />}
    </div>
  );
}
