"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string; // 로고 이미지 경로 (없으면 텍스트로 표시)
}

interface PartnersSectionProps {
  /**
   * 파트너 목록
   */
  partners?: Partner[];
  /**
   * 섹션 변형
   * @default "muted"
   */
  variant?: "default" | "muted" | "accent";
  className?: string;
}

// 기본 파트너사 목록
const DEFAULT_PARTNERS: Partner[] = [
  { name: "케이케이홀딩스", logo: "/images/partners/kk-holdings.png" },
  { name: "케이케이", logo: "/images/partners/kk.png" },
  { name: "아이디스", logo: "/images/partners/idis.png" },
  { name: "동보항공", logo: "/images/partners/dongbo.png" },
  { name: "에어서플라이", logo: "/images/partners/airsupply.svg" },
  { name: "GS25", logo: "/images/partners/gs25.png" },
  { name: "SK에너지", logo: "/images/partners/sk-energy.svg" },
  { name: "롯데정보통신", logo: "/images/partners/lotte-it.svg" },
  { name: "경북산소", logo: "/images/partners/kb-oxygen.png" },
  { name: "틱택", logo: "/images/partners/tictac.svg" },
  { name: "국토부", logo: "/images/partners/molit.png" },
];

/**
 * 파트너사 로고 무한 스크롤 섹션
 * 텍스트나 이미지가 좌에서 우로 자연스럽게 흐르는 애니메이션
 */
export function PartnersSection({
  partners = DEFAULT_PARTNERS,
  variant = "muted",
  className,
}: PartnersSectionProps) {
  // 무한 스크롤을 위해 파트너 목록을 4배로 복제
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];
  const reversedPartners = [...partners].reverse();
  const duplicatedReversed = [...reversedPartners, ...reversedPartners, ...reversedPartners, ...reversedPartners];

  return (
    <Section variant={variant} padding="lg" className={cn("overflow-hidden", className)}>
      {/* 첫 번째 줄 - 왼쪽으로 이동 */}
      <div className="relative mb-8">
        {/* 좌우 페이드 그라데이션 */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [0, -100 * partners.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: partners.length * 4,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <PartnerLogo key={`row1-${index}`} partner={partner} />
          ))}
        </motion.div>
      </div>

      {/* 두 번째 줄 - 오른쪽으로 이동 (반대 방향) */}
      <div className="relative">
        {/* 좌우 페이드 그라데이션 */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [-100 * partners.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: partners.length * 4,
              ease: "linear",
            },
          }}
        >
          {duplicatedReversed.map((partner, index) => (
            <PartnerLogo key={`row2-${index}`} partner={partner} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 1 }}
      className="flex-shrink-0 flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-full w-auto max-w-[160px] object-contain"
          onError={(e) => {
            // 이미지 로드 실패 시 텍스트로 대체
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).classList.remove('hidden');
            }
          }}
        />
      ) : null}
      {/* 이미지가 없거나 로드 실패 시 텍스트 표시 */}
      <span 
        className={cn(
          "text-2xl font-bold text-muted-foreground whitespace-nowrap",
          partner.logo && "hidden"
        )}
      >
        {partner.name}
      </span>
    </motion.div>
  );
}

