"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { homePageImages, BRAND_COLORS } from "@/data";
import { useI18n } from "@/lib/i18n";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CheckCircle2, ShoppingCart, Database, Workflow, Settings } from "lucide-react";

// 도메인 아이콘 매핑
const DOMAIN_ICONS = {
  ecommerce: ShoppingCart,
  erp: Database,
  integration: Workflow,
  custom: Settings,
} as const;

export function PerformanceScrollSection() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 섹션 데이터: Performance → Domain → Custom
  const scrollSections = useMemo(() => [
    {
      id: "performance",
      label: t("performance.label") || "Performance",
      title: t("performance.intro.title") || "INTEGRO와 함께한",
      highlight: t("performance.intro.highlight") || "성공 스토리",
      image: homePageImages.performance,
    },
    {
      id: "domain",
      label: t("domain.label") || "Domain",
      title: t("domain.title") || "모든 분야의 솔루션을",
      highlight: t("domain.highlight") || "이미 보유하고 있습니다",
      image: homePageImages.domain,
    },
    {
      id: "custom",
      label: t("custom.label") || "Custom",
      title: t("custom.title") || "나만의 솔루션이 필요하다면,",
      highlight: t("custom.highlight") || "맞춤 제작해 보세요!",
      image: homePageImages.custom,
    },
  ], [t]);

  // 성과 지표 데이터
  const performanceStats = useMemo(() => [
    { value: 370, suffix: "만 개", label: t("performance.stat1.label") || "서비스 확대", description: t("performance.stat1.desc") || "동일 상품 매칭으로 370만개 상품을 한번에 분류" },
    { value: 35, suffix: "%", label: t("performance.stat2.label") || "업무 자동화", description: t("performance.stat2.desc") || "숏폼 영상 편집 업무의 35%를 영상 분석 AI로 자동화" },
    { value: 50, suffix: "%", label: t("performance.stat3.label") || "비용 절감", description: t("performance.stat3.desc") || "자료 가공 자동화로, 기존 수작업 대비 50% 비용 절감" },
  ], [t]);

  // 도메인 솔루션 데이터
  const domainSolutions = useMemo(() => [
    { id: "ecommerce", title: t("domain.ecommerce.title") || "이커머스", solutions: [t("domain.ecommerce.solution1") || "상품 정보 자동 수집", t("domain.ecommerce.solution2") || "카테고리 자동 분류"] },
    { id: "erp", title: t("domain.erp.title") || "ERP 솔루션", solutions: [t("domain.erp.solution1") || "맞춤형 ERP 구축", t("domain.erp.solution2") || "재고 관리 자동화"] },
    { id: "integration", title: t("domain.integration.title") || "시스템 통합", solutions: [t("domain.integration.solution1") || "레거시 시스템 연동", t("domain.integration.solution2") || "API 개발 및 통합"] },
    { id: "custom", title: t("domain.custom.title") || "맞춤형 개발", solutions: [t("domain.custom.solution1") || "맞춤형 솔루션 제작", t("domain.custom.solution2") || "기술 컨설팅"] },
  ], [t]);

  // 맞춤 제작 프로세스 데이터
  const customProcess = useMemo(() => [
    { num: "01", title: t("custom.process1.title") || "DX 컨설팅", desc: t("custom.process1.desc") || "최고의 IT 전문가와 컨설턴트가 비즈니스에 최적화된 솔루션을 기획합니다." },
    { num: "02", title: t("custom.process2.title") || "맞춤형 개발", desc: t("custom.process2.desc") || "2주간 전문 엔지니어링 팀이 최고 성능의 시스템을 맞춤형으로 제작합니다." },
    { num: "03", title: t("custom.process3.title") || "데모 테스트", desc: t("custom.process3.desc") || "고객사의 데이터, 업무 방식에 맞게 제작된 데모를 제공해드립니다." },
    { num: "04", title: t("custom.process4.title") || "서비스 도입", desc: t("custom.process4.desc") || "합리적인 가격으로 도입을 도와드리며, 꼼꼼한 사후관리를 약속합니다." },
  ], [t]);

  // 스크롤 구간별 active section 변경
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveSection(0);
    } else if (latest < 0.5) {
      setActiveSection(0);
    } else if (latest < 0.75) {
      setActiveSection(1);
    } else {
      setActiveSection(2);
    }
  });

  // 인트로 텍스트 (중앙 상단)
  const introTextOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const introTextY = useTransform(scrollYProgress, [0.08, 0.15], [0, -40]);

  // 이미지: 더 아래에서 시작하여 텍스트와 겹치지 않게
  const imageWidth = useTransform(scrollYProgress, [0, 0.15], ["55%", "100%"]);
  const imageHeight = useTransform(scrollYProgress, [0, 0.15], ["55%", "100%"]);
  const imageLeft = useTransform(scrollYProgress, [0, 0.15], ["22.5%", "0%"]);
  const imageTop = useTransform(scrollYProgress, [0, 0.15], ["42%", "0%"]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 1.1]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 0.12], [12, 0]);

  // 오버레이 (콘텐츠 나올 때) - 화이트모드에서 더 밝게
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.28], [0, 0.45]);

  // 콘텐츠 등장 (바가 사라지면서)
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.32], [0, 1]);

  // 파란색 바 패턴
  const barPatterns = useMemo(() => [
    { top: "8%", height: "5%", width: "25%", left: "70%", delay: 0 },
    { top: "15%", height: "6%", width: "40%", left: "55%", delay: 0.01 },
    { top: "23%", height: "4%", width: "30%", left: "15%", delay: 0.02 },
    { top: "30%", height: "7%", width: "50%", left: "45%", delay: 0.03 },
    { top: "40%", height: "5%", width: "35%", left: "60%", delay: 0.04 },
    { top: "48%", height: "6%", width: "45%", left: "10%", delay: 0.05 },
    { top: "56%", height: "5%", width: "30%", left: "65%", delay: 0.06 },
    { top: "64%", height: "4%", width: "55%", left: "25%", delay: 0.07 },
    { top: "72%", height: "6%", width: "35%", left: "55%", delay: 0.08 },
    { top: "80%", height: "5%", width: "40%", left: "20%", delay: 0.09 },
    { top: "88%", height: "7%", width: "45%", left: "50%", delay: 0.10 },
  ], []);

  // 이미지 전환
  const image1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.52], [1, 1, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.45, 0.52, 0.7, 0.78], [0, 1, 1, 0]);
  const image3Opacity = useTransform(scrollYProgress, [0.7, 0.78, 1], [0, 1, 1]);
  const imageOpacities = [image1Opacity, image2Opacity, image3Opacity];

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-gray-950">
        {/* 인트로 텍스트 (중앙 상단) */}
        <motion.div
          className="absolute inset-x-0 top-0 z-20 pt-16 sm:pt-18 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8"
          style={{ opacity: introTextOpacity, y: introTextY }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 leading-tight"
            >
              {t("performance.intro.title") || "INTEGRO와 함께한"}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                {t("performance.intro.highlight") || "성공 스토리"}
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block text-sm xl:text-base text-gray-600 dark:text-gray-400 mt-3 max-w-lg mx-auto leading-relaxed"
            >
              {t("performance.intro.description") || "DX 전환으로 비즈니스 성과를 극대화한 고객사들의 이야기를 확인하세요"}
            </motion.p>
          </div>
        </motion.div>

        {/* 이미지 컨테이너 */}
        <motion.div
          className="absolute overflow-hidden z-10 shadow-2xl"
          style={{
            width: imageWidth,
            height: imageHeight,
            left: imageLeft,
            top: imageTop,
            borderRadius: imageBorderRadius,
          }}
        >
          {/* 배경 이미지들 */}
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            {scrollSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="absolute inset-0"
                style={{ opacity: imageOpacities[index] }}
              >
                <Image src={section.image} alt={section.title} fill className="object-cover" priority={index === 0} />
              </motion.div>
            ))}
          </motion.div>

          {/* 파란색 바들 */}
          {barPatterns.map((bar, index) => (
            <BarAnimation
              key={index}
              bar={bar}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* 어두운 오버레이 */}
          <motion.div
            className="absolute inset-0 bg-gray-950 z-20"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* 콘텐츠 영역 */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center"
          style={{ opacity: contentOpacity }}
        >
          <div className="w-full max-w-[2560px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
              >
                {/* 섹션 라벨 */}
                <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-semibold tracking-wider uppercase mb-3 2xl:mb-4 text-[#3ecf8e]">
                  {scrollSections[activeSection].label}
                </p>

                {/* 타이틀 */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 2xl:mb-6 leading-tight">
                  {activeSection === 0 ? (t("performance.title") || "INTEGRO DX 도입으로 만들어낸") : scrollSections[activeSection].title}
                  <br />
                  <span className={`bg-gradient-to-r ${BRAND_COLORS.gradient} bg-clip-text text-transparent`}>
                    {activeSection === 0 ? (t("performance.highlight") || "다양한 비즈니스 임팩트") : scrollSections[activeSection].highlight}
                  </span>
                </h2>

                {/* Performance Stats */}
                {activeSection === 0 && (
                  <div className="space-y-2 2xl:space-y-4 mt-4 2xl:mt-6">
                    {performanceStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 2xl:gap-4 bg-white/10 backdrop-blur-md rounded-lg 2xl:rounded-xl p-3 sm:p-4 2xl:p-6 border border-white/10"
                      >
                        <div className={`text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-black bg-gradient-to-r ${BRAND_COLORS.gradient} bg-clip-text text-transparent min-w-[70px] sm:min-w-[90px] 2xl:min-w-[120px]`}>
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-xs sm:text-sm 2xl:text-base mb-0.5 2xl:mb-1">{stat.label}</h4>
                          <p className="text-white/60 text-[10px] sm:text-xs 2xl:text-sm leading-relaxed line-clamp-2">{stat.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Domain Solutions */}
                {activeSection === 1 && (
                  <div className="mt-4 2xl:mt-6">
                    <p className="text-white/70 text-xs sm:text-sm 2xl:text-base mb-4 2xl:mb-6 leading-relaxed">
                      {t("domain.description") || "이커머스, ERP, 시스템 통합 등 다양한 IT 솔루션을 보유하고 있습니다."}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 2xl:gap-4">
                      {domainSolutions.map((domain, index) => {
                        const Icon = DOMAIN_ICONS[domain.id as keyof typeof DOMAIN_ICONS];
                        return (
                          <motion.div
                            key={domain.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="bg-white/10 backdrop-blur-md rounded-lg 2xl:rounded-xl p-3 sm:p-4 2xl:p-6 border border-white/10"
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 mb-2 2xl:mb-3 text-[#3ecf8e]" />
                            <h4 className="font-bold text-white text-xs sm:text-sm 2xl:text-base mb-1 2xl:mb-2">{domain.title}</h4>
                            <ul className="space-y-1 2xl:space-y-2">
                              {domain.solutions.map((solution, idx) => (
                                <li key={idx} className="text-white/60 text-[10px] sm:text-xs 2xl:text-sm flex items-center gap-1 2xl:gap-2">
                                  <CheckCircle2 className="w-3 h-3 2xl:w-4 2xl:h-4 text-[#3ecf8e] flex-shrink-0" />
                                  <span className="truncate">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Custom Process */}
                {activeSection === 2 && (
                  <div className="mt-4 2xl:mt-6">
                    <p className="text-white/70 text-xs sm:text-sm 2xl:text-base mb-4 2xl:mb-6 leading-relaxed">
                      {t("custom.description") || "맞춤형 솔루션이 필요할 경우, 전문적인 컨설팅을 통해 비즈니스에 필요한 시스템을 만들어 드립니다."}
                    </p>
                    <div className="flex flex-col lg:flex-row gap-4 2xl:gap-6">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 2xl:gap-4 flex-1">
                        {customProcess.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="bg-white/10 backdrop-blur-md rounded-lg 2xl:rounded-xl p-3 sm:p-4 2xl:p-6 border border-white/10"
                          >
                            <span className="text-base sm:text-lg 2xl:text-xl font-black bg-gradient-to-r from-[#3ecf8e] to-[#1a7ab8] bg-clip-text text-transparent">
                              {item.num}
                            </span>
                            <h4 className="text-xs sm:text-sm 2xl:text-base font-bold text-white mt-1 mb-0.5 2xl:mt-2 2xl:mb-1">{item.title}</h4>
                            <p className="text-white/60 text-[10px] sm:text-xs 2xl:text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* 2주 강조 */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center justify-center lg:min-w-[180px] 2xl:min-w-[240px] bg-gradient-to-br from-[#3ecf8e]/20 via-white/5 to-[#0d4f8b]/20 rounded-xl 2xl:rounded-2xl p-4 sm:p-6 2xl:p-8 border border-white/20"
                      >
                        <span className="text-white/60 text-xs 2xl:text-sm mb-1 2xl:mb-2">{t("custom.duration.prefix") || "이 모든걸"}</span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black bg-gradient-to-r from-[#3ecf8e] via-white to-[#3ecf8e] bg-clip-text text-transparent">
                          {t("custom.duration.value") || "2주"}
                        </span>
                        <span className="text-white/60 text-xs 2xl:text-sm mt-1 2xl:mt-2">{t("custom.duration.suffix") || "안에"}</span>
                        <div className="mt-2 2xl:mt-4 px-3 2xl:px-4 py-1 2xl:py-2 bg-[#3ecf8e]/20 rounded-full">
                          <span className="text-[#3ecf8e] text-[10px] sm:text-xs 2xl:text-sm font-semibold">⚡ 빠른 개발</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40">
          <div className="flex flex-col gap-3 sm:gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl px-3 py-4 sm:px-4 sm:py-5 shadow-lg border border-gray-200/50 dark:border-white/10">
            {scrollSections.map((section, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 shadow-sm ${
                    activeSection === index
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  animate={{ scale: activeSection === index ? 1.2 : 1 }}
                />
                <motion.span
                  className={`text-xs sm:text-sm font-semibold transition-colors duration-300 hidden sm:block ${
                    activeSection === index
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {section.label}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 바 애니메이션 컴포넌트 (useTransform을 올바르게 사용하기 위해 분리)
interface BarAnimationProps {
  bar: { top: string; height: string; width: string; left: string; delay: number };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function BarAnimation({ bar, index, scrollYProgress }: BarAnimationProps) {
  const scaleX = useTransform(
    scrollYProgress,
    [0.06 + bar.delay, 0.14 + bar.delay, 0.22 + bar.delay * 0.5, 0.28 + bar.delay * 0.5],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute bg-blue-600 z-10"
      style={{
        top: bar.top,
        height: bar.height,
        width: bar.width,
        left: bar.left,
        scaleX,
        transformOrigin: index % 2 === 0 ? "right" : "left",
      }}
    />
  );
}
