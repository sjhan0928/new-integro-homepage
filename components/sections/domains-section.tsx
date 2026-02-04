"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DomainCategory {
  id: string;
  title: string;
  problem: string;
  solutions: string[];
  image?: string;
}

interface DomainsSectionProps {
  title: string;
  subtitle?: string;
  categories: DomainCategory[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/**
 * 서비스 도메인별 솔루션 섹션
 */
export function DomainsSection({
  title,
  subtitle,
  categories,
  className,
}: DomainsSectionProps) {
  return (
    <Section className={cn("bg-accent/5", className)}>
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group relative p-8 rounded-2xl border-2 bg-card overflow-hidden",
                "hover:border-primary hover:shadow-xl transition-all duration-300"
              )}
            >
              {/* 배경 이미지 */}
              {category.image && (
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <h3 className="text-2xl font-bold mt-2">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-2 text-base">{category.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3 text-muted-foreground">
                      Solutions
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {category.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm",
                            "bg-primary/5 border border-primary/20",
                            "hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer"
                          )}
                        >
                          {solution}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="mt-6 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  자세히 보기
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
