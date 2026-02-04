"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Layout Components
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

// UI Components
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { getPortfolioById, portfolios } from "@/data/portfolios";
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Code2, 
  Target, 
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Layers,
  Sparkles
} from "lucide-react";

// 배경 패턴 컴포넌트
function GeometricBackground({ variant = "default" }: { variant?: "default" | "muted" | "accent" }) {
  const baseOpacity = variant === "accent" ? 0.15 : 0.08;
  const circleOpacity = variant === "accent" ? 0.12 : 0.06;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 격자 패턴 */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(13,79,139,${baseOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(13,79,139,${baseOpacity}) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* 원형 그라데이션 */}
      <div 
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ 
          background: `radial-gradient(circle, rgba(13,79,139,${circleOpacity}) 0%, transparent 70%)` 
        }}
      />
      <div 
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ 
          background: `radial-gradient(circle, rgba(62,207,142,${circleOpacity}) 0%, transparent 70%)` 
        }}
      />
      
      {/* 장식 원 */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#3ecf8e]/10 rounded-full" />
      
      {/* 도트 패턴 */}
      <div className="absolute top-1/4 right-20 grid grid-cols-4 gap-4 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
        ))}
      </div>
      <div className="absolute bottom-1/4 left-20 grid grid-cols-3 gap-3 opacity-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
        ))}
      </div>
    </div>
  );
}

export default function WorkDetailPage() {
  const params = useParams();
  const { lang } = useI18n();
  const id = Number(params.id);
  
  const portfolio = getPortfolioById(id);
  
  // 이전/다음 프로젝트
  const currentIndex = portfolios.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? portfolios[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolios.length - 1 ? portfolios[currentIndex + 1] : null;

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/works" className="text-primary hover:underline">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const langKey = (lang as 'ko' | 'en') || 'ko';

  return (
    <div className="relative overflow-hidden bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,79,139,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(62,207,142,0.08),transparent_50%)]" />
        
        {/* 기하학적 배경 패턴 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 원형 패턴 */}
          <div className="absolute top-20 left-10 w-64 h-64 border border-primary/15 rounded-full animate-pulse" />
          <div className="absolute top-40 left-20 w-32 h-32 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/10 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-primary/8 rounded-full" />
          
          {/* 그라데이션 원 */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#3ecf8e]/6 to-transparent rounded-full blur-3xl" />
          
          {/* 격자 패턴 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* 도트 패턴 */}
          <div className="absolute top-1/4 right-10 grid grid-cols-5 gap-3 opacity-15">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/60" />
            ))}
          </div>
        </div>

        <Container className="relative">
          {/* 뒤로가기 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>{langKey === 'ko' ? '목록으로' : 'Back to List'}</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* 텍스트 영역 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* 카테고리 & 기술 */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5">
                  {portfolio.category[langKey].split(' · ')[0]}
                </Badge>
                {portfolio.related_technology && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                    <Code2 className="h-3.5 w-3.5" />
                    {portfolio.related_technology}
                  </span>
                )}
              </div>

              {/* 제목 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {portfolio.title[langKey]}
              </h1>

              {/* 고객사 */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {langKey === 'ko' ? '고객사' : 'Client'}
                  </p>
                  <p className="font-semibold">{portfolio.customer[langKey]}</p>
                </div>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2">
                {portfolio.tags[langKey].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-gradient-to-r from-primary/10 to-[#3ecf8e]/10 text-primary rounded-full border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 이미지 영역 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <Image
                src={portfolio.image}
                alt={portfolio.title[langKey]}
                fill
                className="object-cover"
                priority
              />
              {/* 이미지 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 프로젝트 소개 */}
      <section className="relative py-16 bg-muted/30">
        <GeometricBackground variant="muted" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {langKey === 'ko' ? '프로젝트 소개' : 'Project Overview'}
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolio.details.intro[langKey]}
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 프로젝트 범위 & 주요 업무 */}
      <section className="relative py-16 bg-background">
        <GeometricBackground />
        <Container className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 프로젝트 범위 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {langKey === 'ko' ? '프로젝트 범위' : 'Project Scope'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {portfolio.details.scope[langKey].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#3ecf8e] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 주요 업무 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:border-[#3ecf8e]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#3ecf8e]/20 to-[#3ecf8e]/5 group-hover:from-[#3ecf8e]/30 group-hover:to-[#3ecf8e]/10 transition-colors">
                    <Code2 className="h-5 w-5 text-[#3ecf8e]" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {langKey === 'ko' ? '주요 업무' : 'Main Tasks'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {portfolio.details.mainTasks[langKey].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 핵심 포인트 */}
      {portfolio.details.focus && (
        <section className="relative py-16 bg-gradient-to-br from-muted/40 to-muted/20">
          <GeometricBackground variant="accent" />
          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5">
                  <Lightbulb className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold">
                  {langKey === 'ko' ? '핵심 포인트' : 'Key Focus'}
                </h2>
              </div>
              <div className="space-y-4">
                {portfolio.details.focus[langKey].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/30 shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Sparkles className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* 추가 콘텐츠 */}
      {portfolio.details.additionalContent && (
        <section className="relative py-16 bg-background">
          <GeometricBackground />
          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5">
                  <Layers className="h-6 w-6 text-violet-500" />
                </div>
                <h2 className="text-2xl font-bold">
                  {langKey === 'ko' ? '주요 기능' : 'Key Features'}
                </h2>
              </div>
              <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-violet-500/10 shadow-lg">
                <p className="text-muted-foreground leading-relaxed">
                  {portfolio.details.additionalContent[langKey]}
                </p>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* 캠페인 링크 */}
      {portfolio.details.campaigns && portfolio.details.campaigns.length > 0 && (
        <section className="relative py-16 bg-muted/30">
          <GeometricBackground variant="muted" />
          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-500/5">
                  <ExternalLink className="h-6 w-6 text-rose-500" />
                </div>
                <h2 className="text-2xl font-bold">
                  {langKey === 'ko' ? '관련 캠페인' : 'Related Campaigns'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {portfolio.details.campaigns.map((campaign, i) => (
                  <motion.a
                    key={i}
                    href={campaign.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-rose-500/10 hover:border-rose-500/30 hover:bg-rose-500/5 shadow-lg transition-all duration-300 group"
                  >
                    <span className="font-medium">{campaign.title}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-rose-500 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* 이전/다음 프로젝트 네비게이션 */}
      <section className="relative py-16 bg-gradient-to-b from-background to-muted/20">
        <GeometricBackground />
        <Container className="relative">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {langKey === 'ko' ? '다른 프로젝트 둘러보기' : 'Explore More Projects'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* 이전 프로젝트 */}
            {prevProject ? (
              <Link href={`/works/${prevProject.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02, x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm">{langKey === 'ko' ? '이전 프로젝트' : 'Previous'}</span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
                    {prevProject.title[langKey]}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                    {prevProject.customer[langKey]}
                  </p>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            {/* 다음 프로젝트 */}
            {nextProject ? (
              <Link href={`/works/${nextProject.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-muted-foreground mb-3">
                    <span className="text-sm">{langKey === 'ko' ? '다음 프로젝트' : 'Next'}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
                    {nextProject.title[langKey]}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                    {nextProject.customer[langKey]}
                  </p>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
