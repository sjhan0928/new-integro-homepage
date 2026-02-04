"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface ShowcaseProduct {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  cta: string;
  image?: string;
}

interface ShowcaseSectionProps {
  title?: string;
  subtitle?: string;
  products?: ShowcaseProduct[];
  className?: string;
}

// 기본 제품 데이터
const DEFAULT_PRODUCTS: ShowcaseProduct[] = [
  {
    id: "1",
    name: "이커머스 솔루션",
    tagline: "상품 관리부터 가격 모니터링까지",
    features: [
      "상품 정보 자동 수집",
      "카테고리 자동 분류",
      "동일상품 매칭",
      "가격 모니터링",
    ],
    cta: "자세히 보기",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    id: "2",
    name: "ERP 솔루션",
    tagline: "맞춤형 ERP로 업무 효율 극대화",
    features: [
      "맞춤형 ERP 구축",
      "재고 관리 자동화",
      "정산 시스템 통합",
      "실시간 대시보드",
    ],
    cta: "자세히 보기",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: "3",
    name: "시스템 통합",
    tagline: "레거시 시스템을 현대화하세요",
    features: [
      "레거시 시스템 연동",
      "API 개발 및 통합",
      "데이터 마이그레이션",
      "실시간 동기화",
    ],
    cta: "자세히 보기",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/**
 * 제품/서비스 쇼케이스 섹션
 */
export function ShowcaseSection({
  title = "솔루션 쇼케이스",
  subtitle = "비즈니스 성장을 위한 맞춤형 IT 솔루션을 만나보세요",
  products = DEFAULT_PRODUCTS,
  className,
}: ShowcaseSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card
                className={cn(
                  "group relative overflow-hidden h-full",
                  "hover:shadow-2xl transition-all duration-500",
                  "border-2 hover:border-primary"
                )}
              >
                {/* 이미지 영역 */}
                {product.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                )}

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 space-y-6">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    variant="outline"
                  >
                    {product.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
