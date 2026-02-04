'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Thumbs,
  FreeMode,
} from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// 기본 이미지 캐러셀
interface ImageCarouselProps {
  images: { src: string; alt: string; title?: string; description?: string }[];
  autoplay?: boolean;
  effect?: 'slide' | 'fade' | 'coverflow';
  loop?: boolean;
  className?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
}

export function ImageCarousel({
  images,
  autoplay = true,
  effect = 'slide',
  loop = true,
  className,
  showNavigation = true,
  showPagination = true,
  slidesPerView = 1,
  spaceBetween = 30,
}: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      autoplay={
        autoplay ? { delay: 5000, disableOnInteraction: false } : false
      }
      effect={effect}
      loop={loop}
      className={cn('h-full w-full', className)}
      coverflowEffect={
        effect === 'coverflow'
          ? {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }
          : undefined
      }
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
            {(image.title || image.description) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center text-white">
                  {image.title && (
                    <h3 className="text-4xl font-bold">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="mt-2 text-lg">{image.description}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// 썸네일이 있는 갤러리
interface GalleryCarouselProps {
  images: { src: string; alt: string; thumb?: string }[];
  className?: string;
}

export function GalleryCarousel({ images, className }: GalleryCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* 메인 슬라이더 */}
      <Swiper
        modules={[Navigation, Thumbs, EffectFade]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        effect="fade"
        loop
        className="aspect-video w-full overflow-hidden rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 슬라이더 */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="h-20 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer opacity-50 transition-opacity [&.swiper-slide-thumb-active]:opacity-100"
          >
            <img
              src={image.thumb || image.src}
              alt={image.alt}
              className="h-full w-full rounded-md object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// 카드 캐러셀 (여러 개 보이는 형태)
interface CardCarouselProps {
  children: React.ReactNode[];
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
}

export function CardCarousel({
  children,
  className,
  slidesPerView = 3,
  spaceBetween = 24,
  autoplay = false,
}: CardCarouselProps) {
  return (
    <div className={cn('relative', className)}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{ clickable: true }}
        autoplay={
          autoplay ? { delay: 4000, disableOnInteraction: false } : false
        }
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
        className="!pb-12"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 */}
      <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur transition-all hover:bg-background">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur transition-all hover:bg-background">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

// 히어로 배경용 풀스크린 슬라이더
interface HeroSliderProps {
  slides: {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
    cta?: { text: string; href: string };
  }[];
  className?: string;
  autoplayDelay?: number;
}

export function HeroSlider({
  slides,
  className,
  autoplayDelay = 6000,
}: HeroSliderProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className={cn('h-screen w-full', className)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            {/* 배경 이미지 */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

            {/* 콘텐츠 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                {slide.title && (
                  <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                    {slide.title}
                  </h1>
                )}
                {slide.subtitle && (
                  <p className="mb-8 text-xl md:text-2xl">{slide.subtitle}</p>
                )}
                {slide.cta && (
                  <a
                    href={slide.cta.href}
                    className="inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:scale-105"
                  >
                    {slide.cta.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
