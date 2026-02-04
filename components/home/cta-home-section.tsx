"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND_COLORS } from "@/data";
import { useI18n } from "@/lib/i18n";
import { MessageSquare } from "lucide-react";
import { openFloatingContact } from "@/components/floating-contact";

// 애니메이션 섹션 래퍼
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CTAHomeSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* 다크모드 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-gray-100 to-teal-100/30 dark:from-blue-900/30 dark:via-gray-900 dark:to-teal-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] bg-gradient-to-r from-blue-400/10 to-teal-400/10 dark:from-blue-600/10 dark:to-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-6 sm:mb-8 inline-flex"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${BRAND_COLORS.gradient} flex items-center justify-center shadow-2xl shadow-[#0d4f8b]/30`}
            >
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            {t("cta.title")}
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r ${BRAND_COLORS.gradient} bg-clip-text text-transparent`}
          >
            {t("cta.highlight")}
          </p>
          <p className="text-gray-600 dark:text-white/60 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto whitespace-pre-line px-4">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={openFloatingContact}
                className={`bg-gradient-to-r ${BRAND_COLORS.gradient} text-white hover:opacity-90 gap-2 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full font-semibold shadow-2xl shadow-blue-600/30 border-0`}
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                {t("cta.button.primary")}
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 text-gray-500 dark:text-white/40 text-xs sm:text-sm"
          >
            {t("cta.hours")}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
