"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { portfolios, categoryFilters, type Portfolio } from "@/data/portfolios";
import { ArrowRight, Building2 } from "lucide-react";

// 카테고리 매핑 함수 - category와 tags, title을 모두 확인
function getCategoryType(portfolio: Portfolio, lang: 'ko' | 'en'): string {
  const category = portfolio.category[lang] || portfolio.category.ko;
  const tags = portfolio.tags?.[lang] || portfolio.tags?.ko || [];
  const title = portfolio.title[lang] || portfolio.title.ko;
  
  // ERP 관련 키워드 확인 (title, category, tags에서)
  const erpKeywords = ["ERP", "CRM", "전사자원관리", "고객관리", "Enterprise Resource"];
  const isERP = erpKeywords.some(keyword => 
    category.includes(keyword) || 
    title.includes(keyword) || 
    tags.some(tag => tag.includes(keyword))
  );
  if (isERP) return "ERP";
  
  // 이커머스 확인
  if (
    category.includes("커머스") ||
    category.includes("쇼핑몰") ||
    category.includes("Commerce") ||
    tags.some(tag => tag.includes("커머스") || tag.includes("쇼핑몰") || tag.includes("입점몰"))
  )
    return "이커머스";
  
  // 앱 확인
  if (
    category.includes("앱") ||
    category.includes("Android") ||
    category.includes("iOS") ||
    category.includes("App")
  )
    return "앱";
  
  // 웹 확인
  if (category.includes("웹") || category.includes("Web")) return "웹";
  
  return "시스템 통합";
}

// 포트폴리오 카드 컴포넌트
function PortfolioCard({
  portfolio,
  index,
  lang,
  isHovered,
  onHover,
  onLeave,
}: {
  portfolio: Portfolio;
  index: number;
  lang: "ko" | "en";
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/works/${portfolio.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-card border hover:border-primary/30 transition-all duration-500">
          {/* 이미지 */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={portfolio.image}
              alt={portfolio.title[lang]}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* 호버 시 보이는 화살표 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-gray-900" />
            </motion.div>
          </div>

          {/* 콘텐츠 */}
          <div className="p-5 space-y-3">
            {/* 카테고리 뱃지 */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs font-medium">
                {portfolio.category[lang]}
              </Badge>
              {portfolio.customer && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {portfolio.customer[lang]}
                </span>
              )}
            </div>

            {/* 제목 */}
            <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {portfolio.title[lang]}
            </h3>

            {/* 설명 */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {portfolio.description[lang]}
            </p>

            {/* 태그 */}
            {portfolio.tags && portfolio.tags[lang] && portfolio.tags[lang].length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                {portfolio.tags[lang].slice(0, 3).map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-muted rounded text-[10px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {portfolio.tags[lang].length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] text-muted-foreground">
                    +{portfolio.tags[lang].length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function WorksGridSection() {
  const { lang } = useI18n();
  const [activeFilter, setActiveFilter] = useState("전체");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filters = categoryFilters[lang as "ko" | "en"] || categoryFilters.ko;

  // 필터링된 포트폴리오
  const filteredPortfolios = useMemo(() => {
    if (activeFilter === "전체" || activeFilter === "All") {
      return portfolios;
    }
    return portfolios.filter((p) => {
      const categoryType = getCategoryType(p, lang as "ko" | "en");
      return (
        categoryType === activeFilter ||
        (activeFilter === "E-commerce" && categoryType === "이커머스") ||
        (activeFilter === "App" && categoryType === "앱") ||
        (activeFilter === "System Integration" && categoryType === "시스템 통합")
      );
    });
  }, [activeFilter, lang]);

  return (
    <Section variant="default" padding="lg">
      <Container>
        {/* 필터 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] text-white shadow-lg shadow-primary/25"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* 포트폴리오 그리드 */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((portfolio, index) => (
              <PortfolioCard
                key={portfolio.id}
                portfolio={portfolio}
                index={index}
                lang={lang as "ko" | "en"}
                isHovered={hoveredId === portfolio.id}
                onHover={() => setHoveredId(portfolio.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 결과 없음 */}
        {filteredPortfolios.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              {lang === "ko"
                ? "해당 카테고리의 프로젝트가 없습니다."
                : "No projects found in this category."}
            </p>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
