"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { homePageImages, BRAND_COLORS } from "@/data";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Play } from "lucide-react";

// 로테이션 키워드 설정 - DX, AX만
const ROTATION_KEYWORDS = [
  { key: "DX", label: { ko: "DX?", en: "DX?" }, description: { ko: "디지털 전환", en: "Digital Transformation" } },
  { key: "AX", label: { ko: "AX?", en: "AX?" }, description: { ko: "AI 전환", en: "AI Transformation" } },
];

// 타이핑 + 지우기 애니메이션 컴포넌트 (한 글자씩 지우고 쓰는 효과)
function TypewriterText({ 
  texts,
  className,
}: { 
  texts: string[];
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // 2초 대기 후 삭제 시작
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 100); // 삭제 속도
        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentFullText.length) {
        const typeTimer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 150); // 타이핑 속도
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    }
  }, [displayText, isDeleting, isPaused, currentIndex, texts]);

  return (
    <div className="flex flex-col items-center">
      <span className={className}>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] sm:w-[4px] md:w-[6px] h-[0.8em] bg-current ml-1 align-middle"
        />
      </span>
    </div>
  );
}

interface HeroHomeSectionProps {
  id?: string;
  className?: string;
}

export function HeroHomeSection({ id = "hero-section", className }: HeroHomeSectionProps) {
  const { t, lang } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id={id}
      ref={heroRef}
      className={`relative h-screen w-full overflow-hidden bg-white dark:bg-gray-950 ${className || ""}`}
    >
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <Image
          src={homePageImages.hero}
          alt="Digital Transformation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 dark:from-gray-950/70 dark:via-gray-950/50 dark:to-gray-950/90" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16"
        style={{ opacity: heroOpacity }}
      >
        {/* 로테이션 키워드 - 타이핑 효과 (한 글자씩 지우고 쓰기) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8 md:mb-10 relative"
        >
          <TypewriterText
            texts={ROTATION_KEYWORDS.map(k => k.label[lang as 'ko' | 'en'])}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black bg-gradient-to-r ${BRAND_COLORS.gradient} bg-clip-text text-transparent`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            {t("hero.title")}
            <br />
            <span
              className={`bg-gradient-to-r ${BRAND_COLORS.gradient} bg-clip-text text-transparent`}
            >
              {t("hero.highlight")}
            </span>
          </h1>
          <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            {t("hero.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
        >
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className={`bg-gradient-to-r ${BRAND_COLORS.gradient} text-white hover:opacity-90 gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full font-bold shadow-2xl shadow-blue-600/20 border-0 transition-all duration-300`}
            >
              {t("hero.cta.primary")}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full font-bold shadow-xl transition-all duration-300"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
