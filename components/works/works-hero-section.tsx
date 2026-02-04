"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export function WorksHeroSection() {
  const { lang } = useI18n();

  return (
    <Section variant="default" padding="none" className="relative pt-24 pb-16 min-h-[60vh] overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Works Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* 기하학적 배경 패턴 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 원형 패턴 */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 left-20 w-32 h-32 border-2 border-primary/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/15 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-primary/10 rounded-full" />
        
        {/* 그라데이션 원 */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#3ecf8e]/5 to-transparent rounded-full blur-3xl" />
        
        {/* 격자 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* 도트 패턴 */}
        <div className="absolute top-1/4 right-10 grid grid-cols-5 gap-3 opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/50" />
          ))}
        </div>
        
        {/* 추가 도형 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-24 h-24 border border-[#3ecf8e]/20 rotate-45"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/10 to-[#3ecf8e]/10 rounded-lg"
        />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary"
          >
            WORKS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {lang === "ko" ? "우리가 만든" : "Our"}{" "}
            <span className="bg-gradient-to-r from-[#0d4f8b] via-[#1a7ab8] to-[#3ecf8e] bg-clip-text text-transparent">
              {lang === "ko" ? "성공 사례" : "Success Stories"}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {lang === "ko"
              ? "다양한 산업 분야의 고객사와 함께한 IT 솔루션 성공 스토리를 확인하세요."
              : "Explore our IT solution success stories with clients across various industries."}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
