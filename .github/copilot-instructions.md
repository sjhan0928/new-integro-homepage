# Integro Homepage 개발 가이드

> **📚 추가 참조**: `.github/skills/` 폴더의 가이드 문서들을 함께 참고하세요.
> - `homepage-content-reference.md` - 콘텐츠 구조 및 데이터 가이드
> - `homepage-sections-guide.md` - 섹션 컴포넌트 사용 가이드
> - `web-design-guidelines` - 웹 디자인 가이드라인
> - `next-best-practices` - Next.js 베스트 프랙티스
> - `vercel-react-best-practices` - React 베스트 프랙티스

---

## 📌 프로젝트 개요

**인테그로(Integro) 홈페이지** - DX(디지털 전환) 전문 기업 웹사이트

### 핵심 서비스
**DX (Digital Transformation)** - 디지털 전환
- **컨설팅**: 기업 맞춤형 DX 전략 수립
- **맞춤형 개발**: AI 기반 빠르고 효율적인 시스템 구축
- **데모 테스트**: 도입 전 실제 환경 테스트 제공
- **서비스 도입**: 안정적인 시스템 마이그레이션 및 운영

**AX (AI Transformation)** - AI 전환
- **AI 컨설팅**: 비즈니스 프로세스에 AI 적용 전략 수립
- **AI 솔루션 개발**: LLM, 컴퓨터 비전, 자연어 처리 등 맞춤형 AI 모델 개발
- **AI 자동화**: 반복 업무 자동화, 데이터 분석 자동화
- **AI 통합**: 기존 시스템에 AI 기능 통합 및 연동

### 타겟 고객
- 중소기업 / 중견기업
- 구 시스템(레거시) 현대화가 필요한 기업
- DX 전환을 고려하는 기업

---

## 🌐 다국어 지원

기본 언어: **한국어 (ko)** / **영어 (en)** 전환 지원

```typescript
// 다국어 텍스트 작성 시 항상 ko/en 버전 모두 작성
const text = {
  ko: "디지털 전환의 시작",
  en: "Start of Digital Transformation"
};
```

---

## 🎨 디자인 시스템

### 디자인 컨셉
- **깔끔함 (Clean)**: 미니멀하고 정돈된 레이아웃
- **신뢰감 (Trustworthy)**: 전문적이고 안정적인 느낌
- **표현방법**: 고품질 사진 이미지 활용

### 주요 색상 팔레트 (Integro Blue)

```css
:root {
  /* Primary Blue - 인테그로 메인 컬러 */
  --integro-blue-50: #EFF6FF;
  --integro-blue-100: #DBEAFE;
  --integro-blue-200: #BFDBFE;
  --integro-blue-300: #93C5FD;
  --integro-blue-400: #60A5FA;
  --integro-blue-500: #3B82F6;  /* 메인 컬러 */
  --integro-blue-600: #2563EB;
  --integro-blue-700: #1D4ED8;
  --integro-blue-800: #1E40AF;
  --integro-blue-900: #1E3A8A;
  
  /* Logo "G" Gradient - 로고 G 그라데이션 */
  --integro-gradient-start: #3B82F6;   /* Blue */
  --integro-gradient-mid: #06B6D4;     /* Cyan */
  --integro-gradient-end: #10B981;     /* Emerald */
  
  /* Neutral Colors */
  --integro-gray-50: #F9FAFB;
  --integro-gray-100: #F3F4F6;
  --integro-gray-800: #1F2937;
  --integro-gray-900: #111827;
}
```

### 그라데이션 사용법

```css
/* 로고 G 스타일 그라데이션 */
.integro-gradient {
  background: linear-gradient(135deg, 
    var(--integro-gradient-start) 0%, 
    var(--integro-gradient-mid) 50%, 
    var(--integro-gradient-end) 100%
  );
}

/* 텍스트 그라데이션 */
.integro-text-gradient {
  background: linear-gradient(135deg, #3B82F6, #06B6D4, #10B981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 버튼/CTA 그라데이션 */
.integro-button-gradient {
  background: linear-gradient(90deg, #3B82F6, #2563EB);
}
```

### Tailwind CSS 클래스 가이드

```typescript
// Primary 색상
"bg-blue-500"      // 메인 배경
"text-blue-600"    // 메인 텍스트
"border-blue-500"  // 메인 테두리

// 그라데이션 (로고 G 스타일)
"bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500"

// 호버 효과
"hover:bg-blue-600"
"hover:from-blue-600 hover:via-cyan-600 hover:to-emerald-600"
```

---

## 📁 프로젝트 폴더 구조

```
integro-homepage/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 메인 홈페이지
│   ├── globals.css              # 전역 스타일
│   ├── company/                 # 회사 소개 페이지
│   │   └── page.tsx
│   ├── services/                # 서비스 소개 페이지
│   │   └── page.tsx
│   └── works/                   # 포트폴리오 페이지
│       ├── page.tsx
│       └── [id]/                # 동적 포트폴리오 상세
│           └── page.tsx
│
├── components/                   # 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   │   ├── header.tsx          # 헤더/네비게이션
│   │   ├── footer.tsx          # 푸터
│   │   └── full-page-scroll.tsx # 풀페이지 스크롤
│   │
│   ├── sections/                # 섹션 컴포넌트
│   │   ├── hero-section.tsx    # 히어로 섹션
│   │   ├── services-section.tsx # 서비스 섹션
│   │   ├── features-section.tsx # 특징 섹션
│   │   ├── showcase-section.tsx # 쇼케이스 섹션
│   │   ├── stats-grid-section.tsx # 통계 섹션
│   │   ├── process-section.tsx  # 프로세스 섹션
│   │   ├── testimonials-section.tsx # 고객 후기
│   │   └── cta-section.tsx     # CTA 섹션
│   │
│   ├── ui/                      # UI 컴포넌트
│   │   ├── button.tsx          # 버튼
│   │   ├── card.tsx            # 카드
│   │   ├── container.tsx       # 컨테이너
│   │   ├── section.tsx         # 섹션 래퍼
│   │   ├── motion.tsx          # 모션 컴포넌트
│   │   └── ...                 # 기타 UI 요소
│   │
│   ├── floating-contact.tsx    # 플로팅 문의 버튼
│   ├── mode-toggle.tsx         # 다크모드 토글
│   ├── providers.tsx           # 프로바이더 래퍼
│   └── theme-provider.tsx      # 테마 프로바이더
│
├── data/                        # 데이터 파일
│   ├── i18n.ts                 # 다국어 텍스트
│   ├── company.ts              # 회사 정보
│   └── portfolios.ts           # 포트폴리오 데이터
│
├── hooks/                       # 커스텀 훅
│   ├── use-mobile.ts           # 모바일 감지
│   └── use-reduced-motion.ts   # 모션 감소 감지
│
├── lib/                         # 유틸리티
│   ├── utils.ts                # 공통 유틸
│   ├── animations.ts           # 애니메이션 설정
│   ├── gsap.ts                 # GSAP 설정
│   └── i18n.tsx                # 다국어 컨텍스트
│
├── public/                      # 정적 파일
│   └── images/
│       ├── hero_candidates/    # 히어로 이미지
│       ├── partners/           # 파트너사 로고
│       └── portfolio/          # 포트폴리오 이미지
│
└── docs/                        # 문서
```

---

## 💻 코딩 컨벤션

### 컴포넌트 작성 규칙

```typescript
// 1. "use client" 지시어 (필요시)
"use client";

// 2. Import 순서: React → 외부 라이브러리 → 내부 모듈
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 3. Props 인터페이스 정의
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

// 4. 컴포넌트 정의
export function Component({ title, description, className }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {/* 컨텐츠 */}
    </div>
  );
}
```

### 다국어 텍스트 작성

```typescript
// data/i18n.ts에 모든 텍스트 정의
export const texts = {
  hero: {
    title: {
      ko: "디지털 전환의 파트너",
      en: "Your Partner in Digital Transformation"
    },
    subtitle: {
      ko: "AI 기반 맞춤형 솔루션",
      en: "AI-Powered Custom Solutions"
    }
  }
};

// 컴포넌트에서 사용
import { useLanguage } from "@/lib/i18n";
import { texts } from "@/data/i18n";

function HeroSection() {
  const { language } = useLanguage();
  return <h1>{texts.hero.title[language]}</h1>;
}
```

---

## 🎯 핵심 메시지 가이드

### DX 전환 강조 문구

```typescript
const dxMessages = {
  ko: {
    main: "레거시 시스템을 현대적 디지털 자산으로",
    sub: "AI와 함께하는 빠르고 효율적인 DX 전환",
    cta: "무료 컨설팅 신청"
  },
  en: {
    main: "Transform Legacy Systems into Modern Digital Assets",
    sub: "Fast & Efficient DX Transformation with AI",
    cta: "Request Free Consultation"
  }
};
```

### 서비스 섹션 키워드

1. **컨설팅** - 현황 분석, 전략 수립, 로드맵 제시
2. **맞춤형 개발** - AI 활용, 빠른 구축, 최적화
3. **데모 테스트** - 실환경 테스트, 리스크 최소화
4. **서비스 도입** - 안정적 마이그레이션, 운영 지원

---

## ⚡ 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

---

## 📝 체크리스트

새 컴포넌트/페이지 작성 시:
- [ ] 한국어/영어 텍스트 모두 작성
- [ ] Integro Blue 색상 팔레트 사용
- [ ] 반응형 디자인 적용
- [ ] 다크모드 지원
- [ ] 접근성 고려 (ARIA 속성)
- [ ] 애니메이션 reduced-motion 지원
- pnpm dev skip