"use client";

import Image from "next/image";
import { partners } from "@/data";

export function PartnersMarquee() {
  const row1 = partners.slice(0, 5);
  const row2 = partners.slice(5, 10);
  const row3 = partners.slice(10, 14);

  // 마키 아이템 렌더링 함수
  const renderMarqueeItems = (items: typeof partners) => (
    <>
      {items.map((partner, index) => (
        <div
          key={`original-${index}`}
          className="flex-shrink-0 mx-6 md:mx-10 lg:mx-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          {partner.logo ? (
            <div className="h-10 md:h-12 lg:h-14 w-[120px] md:w-[150px] lg:w-[180px] relative flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={56}
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </div>
          ) : (
            <span className="text-gray-400 font-medium text-xl">{partner.name}</span>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="space-y-6 overflow-hidden py-8">
      {/* 첫 번째 줄 - 왼쪽으로 */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {renderMarqueeItems(row1)}
          {renderMarqueeItems(row1)}
        </div>
        <div className="flex animate-marquee-left whitespace-nowrap" aria-hidden="true">
          {renderMarqueeItems(row1)}
          {renderMarqueeItems(row1)}
        </div>
      </div>

      {/* 두 번째 줄 - 오른쪽으로 */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {renderMarqueeItems(row2)}
          {renderMarqueeItems(row2)}
        </div>
        <div className="flex animate-marquee-right whitespace-nowrap" aria-hidden="true">
          {renderMarqueeItems(row2)}
          {renderMarqueeItems(row2)}
        </div>
      </div>

      {/* 세 번째 줄 - 왼쪽으로 (느리게) */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-left-slow whitespace-nowrap">
          {renderMarqueeItems(row3)}
          {renderMarqueeItems(row3)}
          {renderMarqueeItems(row3)}
        </div>
        <div className="flex animate-marquee-left-slow whitespace-nowrap" aria-hidden="true">
          {renderMarqueeItems(row3)}
          {renderMarqueeItems(row3)}
          {renderMarqueeItems(row3)}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes marquee-left-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
        .animate-marquee-left-slow {
          animation: marquee-left-slow 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
