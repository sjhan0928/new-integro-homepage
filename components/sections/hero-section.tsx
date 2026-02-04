"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { VideoBackground, ScrollIndicator, TextReveal, CharReveal, FadeReveal } from "@/components/ui";

interface HeroSectionProps {
  /**
   * 섹션 ID (헤더 스크롤 감지용)
   */
  id?: string;
  /**
   * 메인 타이틀
   */
  title: ReactNode;
  /**
   * 타이틀이 텍스트일 경우 reveal 애니메이션 적용
   */
  titleText?: string;
  /**
   * 서브 타이틀 또는 설명
   */
  subtitle?: ReactNode;
  /**
   * 액션 버튼들
   */
  actions?: ReactNode;
  /**
   * 추가 콘텐츠 (이미지, 통계 등)
   */
  children?: ReactNode;
  /**
   * 배경 변형
   * @default "default"
   */
  variant?: "default" | "gradient" | "video" | "fullscreen";
  /**
   * 배경 이미지 URL
   */
  backgroundImage?: string;
  /**
   * 배경 비디오 URL (variant가 video일 때)
   */
  videoSrc?: string;
  /**
   * 비디오 폴백 이미지 (모바일용)
   */
  videoPoster?: string;
  /**
   * 스크롤 인디케이터 표시 여부
   */
  showScrollIndicator?: boolean;
  /**
   * 애니메이션 타입
   */
  animation?: "none" | "text-reveal" | "char-reveal" | "fade";
  className?: string;
}

const VARIANTS = {
  default: "bg-background",
  gradient: "bg-gradient-to-b from-background via-accent/5 to-background",
  video: "bg-black",
  fullscreen: "bg-background",
} as const;

/**
 * 홈페이지 히어로 섹션 컴포넌트
 * 
 * @example
 * ```tsx
 * // 기본 사용
 * <HeroSection
 *   title="AI를 쇼핑하세요"
 *   subtitle="쉽고, 빠르고, 효과적으로"
 *   actions={
 *     <>
 *       <Button size="lg">시작하기</Button>
 *       <Button size="lg" variant="outline">더 알아보기</Button>
 *     </>
 *   }
 * />
 * 
 * // 비디오 배경 + 애니메이션
 * <HeroSection
 *   titleText="기업의 디지털 혁신을 선도합니다"
 *   variant="video"
 *   videoSrc="/videos/hero.mp4"
 *   animation="text-reveal"
 *   showScrollIndicator
 * />
 * ```
 */
export function HeroSection({
  id,
  title,
  titleText,
  subtitle,
  actions,
  children,
  variant = "default",
  backgroundImage,
  videoSrc,
  videoPoster,
  showScrollIndicator = false,
  animation = "none",
  className,
}: HeroSectionProps) {
  const isFullscreen = variant === "video" || variant === "fullscreen";
  const minHeight = isFullscreen ? "min-h-screen" : "min-h-[80vh]";

  // 타이틀 렌더링 함수
  const renderTitle = () => {
    if (titleText && animation !== "none") {
      const textClassName = "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight";
      
      switch (animation) {
        case "text-reveal":
          return <TextReveal text={titleText} className={textClassName} />;
        case "char-reveal":
          return <CharReveal text={titleText} className={textClassName} />;
        case "fade":
          return (
            <FadeReveal blur>
              <h1 className={textClassName}>{titleText}</h1>
            </FadeReveal>
          );
        default:
          return <h1 className={textClassName}>{titleText}</h1>;
      }
    }
    
    return (
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
        {title}
      </h1>
    );
  };

  return (
    <section id={id} className={cn("relative overflow-hidden", minHeight, VARIANTS[variant], className)}>
      {/* 비디오 배경 */}
      {variant === "video" && videoSrc && (
        <VideoBackground
          src={videoSrc}
          poster={videoPoster}
          className="absolute inset-0"
          overlayClassName="bg-black/50"
        />
      )}
      
      {/* 배경 이미지 */}
      {backgroundImage && variant !== "video" && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
      )}
      
      <Container className={cn(
        "relative z-10 flex items-center",
        isFullscreen ? "min-h-screen py-20" : "py-16 md:py-24 lg:py-32"
      )}>
        <div className={cn(
          "flex flex-col w-full",
          isFullscreen ? "items-center text-center" : "items-center text-center"
        )}>
          <div className="space-y-4 max-w-4xl">
            {subtitle && (
              <FadeReveal delay={0.2}>
                <p className={cn(
                  "text-base md:text-lg font-medium",
                  variant === "video" ? "text-white/80" : "text-muted-foreground"
                )}>
                  {subtitle}
                </p>
              </FadeReveal>
            )}
            
            <div className={variant === "video" ? "text-white" : ""}>
              {renderTitle()}
            </div>
          </div>
          
          {actions && (
            <FadeReveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {actions}
              </div>
            </FadeReveal>
          )}
          
          {children && (
            <FadeReveal delay={0.6}>
              <div className="mt-12 w-full">
                {children}
              </div>
            </FadeReveal>
          )}
        </div>
      </Container>
      
      {/* 스크롤 인디케이터 */}
      {showScrollIndicator && (
        <ScrollIndicator
          variant="mouse"
          className={variant === "video" ? "text-white" : "text-foreground"}
        />
      )}
    </section>
  );
}
