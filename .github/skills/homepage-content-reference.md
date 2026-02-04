# Homepage Content Reference

이 문서는 Integro 홈페이지의 전체 콘텐츠 구조와 사용 가이드를 제공합니다.

## 콘텐츠 위치

전체 홈페이지 콘텐츠는 `/content/homepage-content.json` 파일에 구조화되어 있습니다.

## 콘텐츠 구조

### 1. Meta 정보 (`meta`)

회사의 기본 정보를 포함합니다:
- 회사명
- 태그라인
- 설명
- 이메일
- 저작권 정보

### 2. Hero 섹션 (`hero`)

홈페이지 최상단 히어로 배너:
- 메인 타이틀
- CTA 버튼 텍스트
- 배경 이미지 배열 (슬라이더용)
- 로고 이미지

### 3. 회사소개 (`about`)

회사 소개 섹션:
- 제목과 부제
- 메인 이미지
- 3개의 주요 특징 (맞춤형 ERP, 자원 관리, 글로벌 솔루션)

### 4. 비전 (`vision`)

회사의 비전과 핵심 가치:
- 비전 선언문
- 메인 이미지
- 3개 핵심 축 (디지털 전환, 스마트 운영, 지속 가능한 성장)

### 5. 제품 소개 (`products`)

3개의 주요 제품:
- **ISOD ERP**: 정유 유통 ERP 시스템
- **In2On**: O2O 통합 플랫폼
- **Intemall**: 커머스 플랫폼

각 제품은 다음 정보를 포함:
- ID, 이름, 태그라인
- 상세 설명
- 이미지, 링크

### 6. 주요 서비스 (`services`)

6개의 핵심 서비스:
1. IT 컨설팅
2. 시스템 통합
3. ERP 구축
4. E-Commerce 솔루션
5. CCTV 및 출입 통제 시스템
6. 비즈니스 인텔리전스

각 서비스는 ID, 이름, 설명, 이미지, 링크 정보 포함

### 7. 글로벌 개발센터 (`global`)

베트남 개발센터 정보:
- 위치 (베트남 호치민시)
- 4개 핵심 역량 (전문 인력, 글로벌 역량, 기술 혁신, 신속한 대응)
- 메인 이미지

### 8. 파트너사 (`partners`)

6개 주요 파트너:
- SK가스
- SK C&C
- 롯데정보통신
- 한국석유공사
- Petrolimex Vietnam
- IDIS

각 파트너는 이름과 로고 이미지 포함

### 9. 포트폴리오 (`portfolio`)

6개 주요 프로젝트:
1. **KK(경북광유) ERP**: Vue.js, Node.js
2. **무신사 글로벌**: Vue.js, Nuxt.js, Node.js
3. **카페24**: PHP
4. **Weplject (롯데정보통신)**: PM 툴
5. **롯데마트 DMS**: AWS, Vue.js, Node.js, Flutter, PHP
6. **반려견/주 App 서비스**: React Native, React, Java

각 프로젝트는 다음 정보 포함:
- ID, 이름, 클라이언트
- 설명, 기술 스택
- 태그, 이미지

### 10. 사무소 (`offices`)

3개 사무소 위치:
- 본사 (대구)
- 서울 사무소
- 베트남 사무소

### 11. 네비게이션 (`navigation`)

8개 메인 메뉴 항목과 앵커 링크

### 12. 문의하기 (`contact`)

문의 폼 관련 정보

## 사용 방법

### JSON 데이터 임포트

```typescript
import homepageContent from '@/content/homepage-content.json';
```

### 섹션별 데이터 접근

```typescript
// Hero 섹션
const heroData = homepageContent.hero;

// 제품 목록
const products = homepageContent.products.items;

// 서비스 목록
const services = homepageContent.services.items;

// 포트폴리오 항목
const portfolioItems = homepageContent.portfolio.items;
```

### 컴포넌트에서 사용 예시

```tsx
// Hero Section
export function HeroSection() {
  const { title, cta, images } = homepageContent.hero;
  
  return (
    <section>
      <h1>{title}</h1>
      <button>{cta}</button>
      {images.map((img, i) => (
        <img key={i} src={img} alt="Hero" />
      ))}
    </section>
  );
}

// Products Section
export function ProductsSection() {
  const { title, subtitle, items } = homepageContent.products;
  
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {items.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </section>
  );
}
```

## 콘텐츠 업데이트 가이드

1. **텍스트 변경**: JSON 파일의 해당 필드 값을 직접 수정
2. **이미지 변경**: `/public/images/` 폴더에 이미지 추가 후 JSON의 경로 업데이트
3. **항목 추가/삭제**: 배열에서 객체를 추가하거나 제거
4. **새 섹션 추가**: JSON 최상위 레벨에 새 키 추가

## 다국어 지원 고려사항

현재는 한국어로만 구성되어 있으나, 향후 다국어 지원 시:

```typescript
// 예시 구조
{
  "ko": { /* 한국어 콘텐츠 */ },
  "en": { /* 영어 콘텐츠 */ },
  "vi": { /* 베트남어 콘텐츠 */ }
}
```

## 이미지 최적화

모든 이미지는 Next.js Image 컴포넌트를 사용하여 최적화:

```tsx
import Image from 'next/image';
import homepageContent from '@/content/homepage-content.json';

<Image 
  src={homepageContent.about.image}
  alt="About Integro"
  width={800}
  height={600}
  priority
/>
```

## SEO 메타데이터

```tsx
import { Metadata } from 'next';
import homepageContent from '@/content/homepage-content.json';

export const metadata: Metadata = {
  title: homepageContent.meta.company,
  description: homepageContent.meta.description,
};
```

## 베스트 프랙티스

1. **타입 안전성**: JSON 데이터에 대한 TypeScript 인터페이스 정의
2. **컴포넌트 분리**: 각 섹션을 독립적인 컴포넌트로 관리
3. **재사용성**: 공통 UI 패턴은 재사용 가능한 컴포넌트로 추상화
4. **성능**: 이미지 lazy loading 및 코드 스플리팅 적용
5. **접근성**: ARIA 레이블 및 시맨틱 HTML 사용

## 관련 스킬

- `next-best-practices`: Next.js 개발 모범 사례
- `vercel-react-best-practices`: React 컴포넌트 패턴
- `web-design-guidelines`: 웹 디자인 원칙
- `next-cache-components`: 캐싱 전략
