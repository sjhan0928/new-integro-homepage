"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { getAppBySlug, type BusinessApp } from "@/data/apps";
import { openFloatingContact } from "@/components/floating-contact";

interface AppDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const resolvedParams = use(params);
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      <Header />
      <AppDetailContent app={app} />
      <Footer />
    </div>
  );
}

function AppDetailContent({ app }: { app: BusinessApp }) {
  const { lang } = useI18n();
  const langKey = (lang as "ko" | "en") || "ko";

  const getText = (text: { ko: string; en: string }) => text[langKey];

  const handleConsult = () => {
    openFloatingContact();
  };

  return (
    <main className="pt-20 relative">
      {/* 전역 배경 장식 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* 그라데이션 블롭들 */}
        <div 
          className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
          style={{ background: `linear-gradient(135deg, ${app.color}, transparent)` }}
        />
        <div 
          className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: app.color }}
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.06]"
          style={{ background: `linear-gradient(45deg, #3B82F6, ${app.color})` }}
        />
        
        {/* 그리드 패턴 */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(${app.color} 1px, transparent 1px),
              linear-gradient(90deg, ${app.color} 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* 섹션별 배경 장식 */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: app.color }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
            style={{ background: app.color }}
          />
          {/* 도트 패턴 */}
          <div 
            className="absolute top-10 left-10 w-32 h-32 opacity-20"
            style={{
              backgroundImage: `radial-gradient(${app.color} 2px, transparent 2px)`,
              backgroundSize: '12px 12px'
            }}
          />
          <div 
            className="absolute bottom-20 right-20 w-40 h-40 opacity-15"
            style={{
              backgroundImage: `radial-gradient(${app.color} 2px, transparent 2px)`,
              backgroundSize: '16px 16px'
            }}
          />
        </div>

        <Container className="relative">
          {/* 뒤로가기 */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{langKey === "ko" ? "서비스로 돌아가기" : "Back to Services"}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 텍스트 영역 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 아이콘 + 타이틀 */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: app.bgColor }}
                >
                  <app.icon className="w-8 h-8" style={{ color: app.color }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {getText(app.title)}
                </h1>
              </div>

              {/* 태그라인 */}
              <p
                className="text-xl md:text-2xl font-medium mb-4"
                style={{ color: app.color }}
              >
                {getText(app.tagline)}
              </p>

              {/* 설명 */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {getText(app.description)}
              </p>

              {/* CTA 버튼 - 상담하기만 */}
              <Button 
                size="lg" 
                onClick={handleConsult}
                className="shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: app.color }}
              >
                {langKey === "ko" ? "상담하기" : "Contact Us"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* 히어로 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border">
                <Image
                  src={app.heroImage}
                  alt={getText(app.title)}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* 장식 요소 */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ backgroundColor: app.bgColor }}
              />
              <div
                className="absolute -top-3 -left-3 w-16 h-16 rounded-xl -z-10 opacity-60"
                style={{ backgroundColor: app.bgColor }}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        {/* 배경 */}
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-0 pointer-events-none">
          {/* 대각선 패턴 */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${app.color},
                ${app.color} 1px,
                transparent 1px,
                transparent 20px
              )`
            }}
          />
          {/* 원형 장식 */}
          <div 
            className="absolute top-10 right-[20%] w-64 h-64 rounded-full border-2 opacity-10"
            style={{ borderColor: app.color }}
          />
          <div 
            className="absolute bottom-10 left-[10%] w-48 h-48 rounded-full border opacity-10"
            style={{ borderColor: app.color }}
          />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {langKey === "ko" ? "주요 기능" : "Key Features"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {langKey === "ko"
                ? "업무 효율을 극대화하는 핵심 기능들"
                : "Core features to maximize work efficiency"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {app.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: app.bgColor }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: app.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {getText(feature.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {getText(feature.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-20 overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-[0.08]"
            style={{ background: `linear-gradient(90deg, transparent, ${app.color}, transparent)` }}
          />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {langKey === "ko" ? "화면 미리보기" : "Screenshots"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {langKey === "ko"
                ? "직관적이고 깔끔한 인터페이스"
                : "Intuitive and clean interface"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {app.screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border mb-4 group-hover:shadow-2xl transition-shadow">
                  <Image
                    src={screenshot.image}
                    alt={getText(screenshot.caption)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* 오버레이 */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ background: `linear-gradient(135deg, ${app.color}, transparent)` }}
                  />
                </div>
                <p className="text-center text-sm font-medium text-muted-foreground">
                  {getText(screenshot.caption)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        {/* 배경 */}
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-0 pointer-events-none">
          {/* 육각형 패턴 느낌 */}
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10" viewBox="0 0 100 100">
            <polygon 
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
              fill="none" 
              stroke={app.color} 
              strokeWidth="1"
            />
          </svg>
          <svg className="absolute left-10 bottom-10 w-32 h-32 opacity-10" viewBox="0 0 100 100">
            <polygon 
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
              fill="none" 
              stroke={app.color} 
              strokeWidth="1"
            />
          </svg>
        </div>

        <Container size="sm" className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText(app.benefits.title)}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border shadow-lg"
          >
            <ul className="space-y-4">
              {app.benefits.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                    style={{ backgroundColor: app.bgColor }}
                  >
                    <Check className="w-4 h-4" style={{ color: app.color }} />
                  </div>
                  <span className="text-lg">{getText(item)}</span>
                </motion.li>
              ))}
            </ul>

            {/* 하단 CTA */}
            <div className="mt-8 pt-8 border-t text-center">
              <Button 
                size="lg" 
                onClick={handleConsult}
                className="shadow-lg"
                style={{ backgroundColor: app.color }}
              >
                {langKey === "ko" ? "상담하기" : "Contact Us"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
