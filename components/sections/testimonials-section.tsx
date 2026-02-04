"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  company: string;
  industry: string;
  quote: string;
  author: string;
  result: string;
  logo?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 0.1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

/**
 * 고객 후기 섹션
 * 
 * @example
 * ```tsx
 * <TestimonialsSection
 *   title="고객사의 성공 스토리"
 *   testimonials={[...]}
 * />
 * ```
 */
export function TestimonialsSection({
  title,
  subtitle,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <Section className={cn("bg-accent/5 overflow-hidden", className)}>
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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={cn(
                  "relative p-8 hover:shadow-xl transition-all duration-300 h-full",
                  "border-2 hover:border-primary group"
                )}
              >
                {/* Quote Icon */}
                <motion.div
                  variants={quoteVariants}
                  className="absolute top-6 right-6"
                >
                  <Quote className="w-12 h-12 text-primary group-hover:text-primary/20 transition-colors" />
                </motion.div>

                <div className="relative space-y-6">
                  {/* Company Badge with Avatar */}
                  <div className="flex items-center gap-4">
                    {testimonial.avatar && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20"
                      >
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{testimonial.company}</h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.industry}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i + 0.5 }}
                        >
                          <Star
                            className={cn(
                              "w-4 h-4",
                              i < testimonial.rating!
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/30"
                            )}
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-sm leading-relaxed text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <p className="text-xs font-medium">{testimonial.author}</p>

                  {/* Result Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 border-t"
                  >
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      ✓ {testimonial.result}
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
