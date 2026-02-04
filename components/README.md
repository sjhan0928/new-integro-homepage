# 컴포넌트 구조

이 프로젝트는 재사용 가능한 홈페이지 컴포넌트 라이브러리를 제공합니다.
[dalpha.so](https://dalpha.so/ko)의 디자인 패턴을 참고하여 구조화되었습니다.

## 📁 디렉토리 구조

```
components/
├── sections/          # 섹션별 컴포넌트 (페이지 단위 블록)
│   ├── hero-section.tsx
│   ├── performance-section.tsx
│   ├── partners-section.tsx
│   ├── services-section.tsx
│   ├── features-section.tsx
│   ├── cta-section.tsx
│   └── index.ts
│
├── ui/                # 공통 UI 컴포넌트
│   ├── container.tsx
│   ├── section.tsx
│   ├── section-header.tsx
│   ├── stat-card.tsx
│   ├── feature-card.tsx
│   ├── service-card.tsx
│   ├── card.tsx
│   ├── button.tsx
│   └── badge.tsx
│
├── mode-toggle.tsx
└── theme-provider.tsx
```

## 🎯 컴포넌트 분류

### Sections (섹션 컴포넌트)
페이지의 큰 블록을 구성하는 컴포넌트들입니다. 각 섹션은 독립적으로 사용 가능합니다.

- **HeroSection**: 메인 히어로 영역 (타이틀, 서브타이틀, CTA 버튼)
- **PerformanceSection**: 비즈니스 성과/실적 표시
- **PartnersSection**: 파트너/고객사 로고 그리드
- **ServicesSection**: 서비스/프로세스 단계별 설명
- **FeaturesSection**: 제품 기능/특징 나열
- **CTASection**: Call-to-Action 섹션

### UI Components (공통 컴포넌트)
여러 섹션에서 재사용되는 기본 UI 컴포넌트들입니다.

- **Container**: 콘텐츠 너비 제한 및 중앙 정렬
- **Section**: 섹션 래퍼 (배경, 패딩 설정)
- **SectionHeader**: 섹션 제목 및 설명
- **StatCard**: 통계/수치 강조 카드
- **FeatureCard**: 기능/특징 카드
- **ServiceCard**: 서비스/프로세스 카드

## 🚀 사용 예시

### 1. Hero Section

```tsx
import { HeroSection } from "@/components/sections";
import { Button } from "@/components/ui/button";

<HeroSection
  title="쉽고, 빠르고, 효과적으로 AI를 쇼핑하세요"
  subtitle="AI Store"
  variant="gradient"
  actions={
    <>
      <Button size="lg">시작하기</Button>
      <Button size="lg" variant="outline">더 알아보기</Button>
    </>
  }
/>
```

### 2. Performance Section

```tsx
import { PerformanceSection } from "@/components/sections";

<PerformanceSection
  title="검증된 비즈니스 임팩트"
  description="실제 고객사들이 만들어낸 성과"
  items={[
    {
      value: "370만",
      unit: "개",
      label: "서비스 확대",
      description: "동일 상품 매칭 AI로 370만개 상품을 한번에 분류"
    },
    {
      value: 35,
      unit: "%",
      label: "업무 자동화",
      description: "영상 편집 업무의 35%를 AI로 자동화"
    }
  ]}
  columns={3}
/>
```

### 3. Features Section

```tsx
import { FeaturesSection } from "@/components/sections";
import { Zap, Clock, TrendingDown } from "lucide-react";

<FeaturesSection
  title="왜 선택해야 할까요?"
  items={[
    {
      icon: <Zap className="h-6 w-6" />,
      title: "빠른 도입",
      description: "평균 2주 만에 솔루션을 도입할 수 있습니다"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "시간 절약",
      description: "자동화된 프로세스로 업무 시간을 대폭 단축"
    }
  ]}
  columns={3}
  cardVariant="elevated"
/>
```

### 4. Services Section

```tsx
import { ServicesSection } from "@/components/sections";

<ServicesSection
  title="맞춤형 솔루션을 제공합니다"
  items={[
    {
      number: "01",
      title: "무료 컨설팅",
      highlight: "무료",
      description: "전문가의 맞춤 컨설팅을 통해...",
      badges: ["빠른 상담", "맞춤 추천"]
    }
  ]}
  columns={4}
  variant="muted"
/>
```

### 5. Partners Section

```tsx
import { PartnersSection } from "@/components/sections";

<PartnersSection
  title="함께하는 파트너사"
  logos={[
    { name: "Company A", image: "/logo-a.png", link: "https://..." },
    { name: "Company B", image: "/logo-b.png" }
  ]}
  columns={5}
  size="md"
/>
```

### 6. CTA Section

```tsx
import { CTASection } from "@/components/sections";
import { Button } from "@/components/ui/button";

<CTASection
  title="지금 바로 시작하세요"
  description="전문가와 상담하고 최적의 솔루션을 찾아보세요"
  actions={
    <>
      <Button size="lg">무료 상담 신청</Button>
      <Button size="lg" variant="outline">더 알아보기</Button>
    </>
  }
  variant="gradient"
/>
```

## 🎨 스타일 변형

대부분의 컴포넌트는 다양한 스타일 변형을 지원합니다:

### Section Variants
- `default`: 기본 배경
- `muted`: 연한 회색 배경
- `accent`: 액센트 색상 배경

### Card Variants
- `default`: 기본 카드
- `bordered`: 강조된 테두리
- `elevated`: 그림자 효과
- `primary`: 기본 색상 배경

### Padding Options
- `none`: 패딩 없음
- `sm`: 작은 패딩
- `default`: 기본 패딩
- `lg`: 큰 패딩

## 💡 설계 원칙

1. **섹션별 분리**: 각 섹션은 독립적으로 작동하며 쉽게 조합 가능
2. **재사용성**: 공통 UI 컴포넌트는 여러 섹션에서 활용
3. **유연성**: props를 통해 다양한 스타일과 레이아웃 지원
4. **타입 안전성**: TypeScript로 모든 props 타입 정의
5. **접근성**: 시맨틱 HTML과 ARIA 속성 사용

## 📝 데모

전체 컴포넌트 데모는 `/components-showcase` 페이지에서 확인할 수 있습니다.

## 🔧 개발 가이드

### 새로운 섹션 추가하기

1. `components/sections/` 에 새 파일 생성
2. 섹션 컴포넌트 구현
3. `components/sections/index.ts` 에 export 추가
4. 사용 예시를 showcase 페이지에 추가

### 새로운 UI 컴포넌트 추가하기

1. `components/ui/` 에 새 파일 생성
2. 컴포넌트 구현 (variants, props 정의)
3. JSDoc 주석으로 사용 예시 추가
4. 필요시 여러 섹션에서 재사용

## 참고 자료

- [dalpha.so](https://dalpha.so/ko) - 디자인 참고
- [shadcn/ui](https://ui.shadcn.com/) - UI 컴포넌트 기반
- [Tailwind CSS](https://tailwindcss.com/) - 스타일링
