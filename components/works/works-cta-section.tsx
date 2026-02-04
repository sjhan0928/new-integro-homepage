"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { MessageSquare, ArrowRight } from "lucide-react";
import { openFloatingContact } from "@/components/floating-contact";

export function WorksCTASection() {
  const { lang } = useI18n();

  return (
    <Section variant="muted" padding="lg">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d4f8b] to-[#3ecf8e] mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {lang === "ko"
              ? "비슷한 프로젝트를 진행하고 싶으신가요?"
              : "Want to start a similar project?"}
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {lang === "ko"
              ? "인테그로의 전문가 팀이 귀사의 비즈니스에 최적화된 솔루션을 제안해 드립니다."
              : "Our expert team will propose solutions optimized for your business."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openFloatingContact}
              className="bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] text-white hover:opacity-90"
            >
              {lang === "ko" ? "무료 상담 신청" : "Free Consultation"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                {lang === "ko" ? "서비스 둘러보기" : "Explore Services"}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
