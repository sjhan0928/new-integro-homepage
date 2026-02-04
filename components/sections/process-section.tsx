"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  icon?: string;
  image?: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/**
 * 프로세스 단계 안내 섹션
 */
export function ProcessSection({
  title,
  subtitle,
  steps,
  className,
}: ProcessSectionProps) {
  return (
    <Section className={cn("bg-gradient-to-b from-background to-accent/5", className)}>
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

        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative p-6 rounded-2xl border-2 bg-card overflow-hidden",
                    "hover:border-primary hover:shadow-xl transition-all duration-300",
                    "group h-full"
                  )}
                >
                  {/* 배경 이미지 */}
                  {step.image && (
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="relative">
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg"
                      >
                        {step.step}
                      </motion.div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {step.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Check Icon */}
                    <CheckCircle2 className="absolute bottom-0 right-0 w-5 h-5 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all" />
                  </div>
                </motion.div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10"
                  >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-primary/5 border-2 border-primary/20 text-center"
        >
          <p className="text-2xl font-bold">
            이 모든 과정을{" "}
            <motion.span
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-primary text-4xl inline-block"
            >
              2-4주
            </motion.span>{" "}
            안에
          </p>
          <p className="mt-2 text-muted-foreground">
            무료 컨설팅 → 맞춤 설계 → 빠른 구축 → 안정적 운영
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
