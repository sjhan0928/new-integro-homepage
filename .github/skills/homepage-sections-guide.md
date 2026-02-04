# Homepage Sections 가이드

이 문서는 dalpha.so의 섹션 구조를 분석하여 인테그로 홈페이지에 적용한 내용을 정리합니다.

## 적용된 섹션들

### 1. Hero Section (기존 개선)
- **위치**: 페이지 최상단
- **특징**: 강력한 헤드라인, 통계 카드, CTA 버튼
- **컴포넌트**: 기존 hero-section.tsx 개선

### 2. StatsGridSection (신규)
- **파일**: `components/sections/stats-grid-section.tsx`
- **용도**: 비즈니스 성과 및 주요 지표 표시
- **특징**: 
  - 3열 그리드 레이아웃
  - 호버 애니메이션 (scale-105)
  - metric, label, description 구조

**사용 예시**:
```tsx
<StatsGridSection
  title="인테그로가 만들어낸 비즈니스 임팩트"
  stats={[
    {
      metric: "50%",
      label: "업무 효율 향상",
      description: "ERP 도입으로 기존 수작업 대비 50% 시간 절감"
    }
  ]}
/>
```

### 3. ShowcaseSection (신규)
- **파일**: `components/sections/showcase-section.tsx`
- **용도**: 제품/서비스 쇼케이스
- **특징**:
  - 카드 형태의 제품 소개
  - 체크리스트 형태의 기능 목록
  - 그라데이션 배경 호버 효과

**사용 예시**:
```tsx
<ShowcaseSection
  title="인테그로의 핵심 솔루션"
  products={[
    {
      id: "isod-erp",
      name: "ISOD ERP",
      tagline: "정유 유통 산업 특화 ERP",
      features: ["주유소 통합 관리", "실시간 재고 관리"],
      cta: "자세히 보기"
    }
  ]}
/>
```

### 4. DomainsSection (신규)
- **파일**: `components/sections/domains-section.tsx`
- **용도**: 서비스 도메인별 솔루션 소개
- **특징**:
  - Problem-Solution 구조
  - 2열 그리드 레이아웃
  - 번호 배지와 함께 제시

**사용 예시**:
```tsx
<DomainsSection
  title="모든 산업의 IT 솔루션을 보유하고 있습니다"
  categories={[
    {
      id: "erp",
      title: "ERP 솔루션",
      problem: "복잡한 유통 프로세스 관리에 어려움을 겪고 계신가요?",
      solutions: ["정유 유통 ERP", "재고 관리 시스템"]
    }
  ]}
/>
```

### 5. ProcessSection (신규)
- **파일**: `components/sections/process-section.tsx`
- **용도**: 도입 프로세스 단계별 안내
- **특징**:
  - 4단계 프로세스
  - 화살표로 연결된 단계
  - 소요 시간 배지 표시
  - 하단에 전체 소요 기간 요약

**사용 예시**:
```tsx
<ProcessSection
  title="쉽고 빠른 IT 솔루션 도입"
  steps={[
    {
      step: "01",
      title: "무료 컨설팅",
      description: "전문가의 IT 컨설팅...",
      duration: "무료"
    }
  ]}
/>
```

### 6. TestimonialsSection (신규)
- **파일**: `components/sections/testimonials-section.tsx`
- **용도**: 고객 후기 및 성공 사례
- **특징**:
  - Quote 아이콘
  - 회사명, 산업, 후기, 작성자
  - 결과 배지

**사용 예시**:
```tsx
<TestimonialsSection
  title="고객사의 성공 스토리"
  testimonials={[
    {
      company: "경북광유",
      industry: "정유 유통",
      quote: "ISOD ERP 도입으로...",
      author: "운영팀 팀장",
      result: "재고 관리 효율 50% 향상"
    }
  ]}
/>
```

## 페이지 구성 순서

1. **Hero Section** - 강력한 첫인상
2. **Features Section** - 핵심 가치 제안
3. **StatsGridSection** - 비즈니스 임팩트
4. **ShowcaseSection** - 제품 소개
5. **DomainsSection** - 도메인별 솔루션
6. **ProcessSection** - 도입 프로세스
7. **Performance Section** - 성과 지표
8. **Services Section** - 서비스 목록
9. **Partners Section** - 파트너사
10. **TestimonialsSection** - 고객 후기
11. **CTA Section** - 마무리 행동 유도

## 디자인 패턴

### 공통 패턴
- **그리드 레이아웃**: 1/2/3/4열 반응형 그리드
- **카드 디자인**: border-2, rounded-2xl, hover:shadow-xl
- **호버 효과**: scale-105, border-primary 전환
- **배지**: rounded-full, bg-primary/10
- **그라데이션**: from-primary/5 to-transparent

### 색상 시스템
- **Primary**: 강조 요소, CTA 버튼
- **Muted**: 보조 텍스트
- **Accent**: 배경 강조
- **Card**: 카드 배경

### 애니메이션
- **Transition**: transition-all duration-300
- **Scale**: hover:scale-105
- **Opacity**: opacity-0 group-hover:opacity-100

## JSON 데이터 구조

전체 섹션 데이터는 [`content/homepage-sections.json`](../content/homepage-sections.json)에 정리되어 있습니다.

각 섹션 타입별로 integroContent 필드에 실제 사용할 콘텐츠가 포함되어 있습니다.

## 다음 단계

1. **이미지 추가**: 각 섹션에 실제 이미지 적용
2. **애니메이션 강화**: Framer Motion 또는 GSAP 적용
3. **반응형 최적화**: 모바일/태블릿 레이아웃 개선
4. **성능 최적화**: 이미지 lazy loading, 코드 스플리팅
5. **A/B 테스트**: 섹션 순서 및 콘텐츠 테스트
