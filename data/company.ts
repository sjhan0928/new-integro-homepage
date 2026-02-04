// 회사 정보 및 홈페이지 콘텐츠 데이터
export interface CompanyMeta {
  company: string;
  tagline: string;
  description: string;
  email: string;
  copyright: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  image: string;
  features: Feature[];
}

export interface Pillar {
  title: string;
  description: string;
  image: string;
}

export interface VisionSection {
  title: string;
  quote: string;
  mainImage: string;
  pillars: Pillar[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface GlobalFeature {
  title: string;
  description: string;
  icon: string;
}

export interface GlobalSection {
  title: string;
  subtitle: string;
  mainImage: string;
  location: string;
  features: GlobalFeature[];
}

export interface Partner {
  name: string;
  logo?: string;
}

export interface Office {
  type: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// 메인 콘텐츠 데이터
export const companyData = {
  meta: {
    company: "인테그로 주식회사 (Integro Co., Ltd.)",
    tagline: "INTEGRATION FOR GROWS",
    description: "인테그로는 한국의 선도적인 B2B IT 개발 회사로, 기업을 위한 혁신적인 기술 솔루션을 제공합니다.",
    email: "integro@integro.work",
    copyright: "© 2025 Integro Co., Ltd. All rights reserved."
  },

  hero: {
    title: "INTEGRATION FOR GROWS",
    cta: "서비스 살펴보기",
    images: [
      "/images/hero-1.jpg",
      "/images/hero-2.jpg",
      "/images/hero-3.jpg"
    ],
    logo: "/images/logo.png"
  },

  about: {
    title: "회사소개",
    subtitle: "인테그로 주식회사는 효율적인 자원 관리와 운영 프로세스를 지원하는 IT 전문 기업입니다.",
    image: "/images/about-image-new.jpg",
    features: [
      {
        title: "맞춤형 ERP 시스템",
        description: "정유, 윤활유, 가스 등 에너지 자원 유통 산업을 위한 맞춤형 ERP 시스템과 통합 유통 솔루션을 제공합니다.",
        icon: "erp"
      },
      {
        title: "효율적인 자원 관리",
        description: "효율적인 자원 관리와 운영 프로세스를 지원하여 기업의 업무 효율성과 경쟁력을 극대화합니다.",
        icon: "management"
      },
      {
        title: "글로벌 IT 솔루션",
        description: "베트남 개발센터를 통해 한국뿐만 아니라 글로벌 시장에 최적화된 IT 솔루션을 개발하고 제공하고 있습니다.",
        icon: "global"
      }
    ]
  },

  vision: {
    title: "비전",
    quote: "인테그로는 다양한 산업 분야의 디지털 전환(Digital Transformation)을 선도하며, 스마트 운영 Eco 시스템 구축을 통해 고객사의 지속 가능한 비즈니스 성장과 효율성 향상에 기여합니다.",
    mainImage: "/images/digital-transformation.jpg",
    pillars: [
      {
        title: "디지털 전환",
        description: "다양한 산업 분야의 디지털 혁신을 선도하며, 기업의 디지털 경쟁력을 강화합니다.",
        image: "/images/smart-operations.jpg"
      },
      {
        title: "스마트 운영",
        description: "효율적인 Eco 시스템 구축을 통해 기업의 운영 프로세스를 최적화합니다.",
        image: "/images/sustainable-growth.jpg"
      },
      {
        title: "지속 가능한 성장",
        description: "고객사의 비즈니스 성장과 효율성을 향상시켜 장기적인 경쟁력을 확보합니다.",
        image: "/images/sustainable-growth.jpg"
      }
    ]
  },

  products: {
    title: "제품 소개",
    subtitle: "인테그로의 혁신적인 솔루션으로 비즈니스의 디지털 전환을 가속화하세요",
    items: [
      {
        id: "isod-erp",
        name: "ISOD ERP",
        tagline: "정유 유통 산업에 최적화된 스마트 ERP 시스템",
        description: "정유 및 에너지 유통 전문 기업을 위한 ISOD ERP는 주유소, 물류, 거래처, 재고 및 정산 등 유통 전 과정을 통합 관리하는 업계 맞춤형 ERP 솔루션입니다.",
        image: "/images/products/isod-erp.png",
        link: "#"
      },
      {
        id: "in2on",
        name: "In2On",
        tagline: "오프라인 비즈니스의 온라인 전환을 위한 O2O 통합 플랫폼",
        description: "In2On은 오프라인 중심의 기업들이 온라인 시스템과 자연스럽게 연동되어, 운영의 효율성과 비즈니스 확장성을 동시에 확보할 수 있도록 도와주는 O2O 통합 솔루션입니다.",
        image: "/images/products/in2on.png",
        link: "#"
      },
      {
        id: "intemall",
        name: "Intemall",
        tagline: "셀러와 소비자를 연결하는 통합 커머스 플랫폼",
        description: "Intemall은 단순한 쇼핑몰 CMS가 아닌, 셀러와 고객이 만나는 모든 접점을 통합하는 디지털 플랫폼입니다.",
        image: "/images/products/intemall.png",
        link: "#"
      }
    ]
  },

  services: {
    title: "주요 서비스",
    subtitle: "인테그로는 다양한 IT 솔루션과 서비스를 통해 고객의 비즈니스 성장을 지원합니다",
    items: [
      {
        id: "it-consulting",
        name: "IT 컨설팅",
        description: "고객사의 비즈니스 목표와 요구사항을 철저히 분석하여 전략적 IT 계획 수립부터 솔루션 도입, 운영까지 포괄적으로 지원합니다.",
        image: "/images/service-consulting.jpg",
        link: "#"
      },
      {
        id: "system-integration",
        name: "시스템 통합",
        description: "기업 내 다양한 시스템 및 애플리케이션 간의 효율적인 데이터 연동과 프로세스 통합을 통해 업무 효율성과 정보의 정확성을 높입니다.",
        image: "/images/service-integration.jpg",
        link: "#"
      },
      {
        id: "erp-development",
        name: "ERP 구축",
        description: "기업의 운영 효율을 극대화하기 위한 맞춤형 ERP 솔루션을 제공합니다. SCM, CRM, 재무 및 회계, 인사 관리 등 비즈니스 전반을 통합합니다.",
        image: "/images/service-erp.jpg",
        link: "#"
      },
      {
        id: "ecommerce",
        name: "E-Commerce 솔루션",
        description: "온라인 비즈니스 플랫폼 구축을 통해 사용자 친화적인 쇼핑 경험을 제공하며, 효율적인 재고 관리와 결제 시스템 통합을 제공합니다.",
        image: "/images/service-ecommerce.jpg",
        link: "#"
      },
      {
        id: "cctv-access-control",
        name: "CCTV 및 출입 통제 시스템",
        description: "시설물 및 자산 보호를 위한 첨단 CCTV 감시 시스템과 출입 통제 시스템을 설계, 구축 및 유지보수합니다.",
        image: "/images/service-cctv.jpg",
        link: "#"
      },
      {
        id: "business-intelligence",
        name: "비즈니스 인텔리전스",
        description: "빅데이터 분석과 시각화 기술을 활용하여 기업의 데이터를 가치 있는 인사이트로 전환합니다.",
        image: "/images/service-bi.jpg",
        link: "#"
      }
    ]
  },

  global: {
    title: "글로벌",
    subtitle: "베트남 글로벌 개발 센터를 운영하여 현지 시장은 물론 글로벌 고객의 요구를 신속하고 정확하게 충족시킬 수 있는 글로벌 경쟁력을 갖추고 있습니다.",
    mainImage: "/images/vietnam-office.jpg",
    location: "베트남 호치민시",
    features: [
      {
        title: "전문 인력",
        description: "다양한 기술 스택에 능숙한 전문 개발자 팀 보유",
        icon: "team"
      },
      {
        title: "글로벌 역량",
        description: "다국어 지원 및 24시간 글로벌 서비스 제공",
        icon: "global"
      },
      {
        title: "기술 혁신",
        description: "최신 기술 트렌드를 반영한 혁신적인 솔루션 개발",
        icon: "innovation"
      },
      {
        title: "신속한 대응",
        description: "시차를 활용한 빠른 개발 주기와 신속한 고객 대응",
        icon: "speed"
      }
    ]
  },

  offices: [
    {
      type: "본사",
      address: "대구광역시 중구 국채보상로 642"
    },
    {
      type: "서울 사무소",
      address: "서울특별시 성동구 연무장15길 11 에스팩토리 B동 2층"
    },
    {
      type: "베트남 사무소",
      address: "68/21 hoang dieu, Q4, HCMC"
    }
  ],

  contact: {
    title: "문의하기",
    privacyNotice: "제공된 개인정보는 문의 답변 목적으로만 사용되며, 이용 목적 달성 후 즉시 파기됩니다.",
    privacyPolicyLink: "#"
  }
};

// 파트너사 목록 (로고 무한 스크롤용)
export const partners: Partner[] = [
  { name: "케이케이", logo: "/images/partners/kk.png" },
  { name: "케이케이홀딩스", logo: "/images/partners/kk-holdings.png" },
  { name: "아이디스", logo: "/images/partners/idis.png" },
  { name: "동보항공", logo: "/images/partners/dongbo.png" },
  { name: "에어서플라이", logo: "/images/partners/airsupply.svg" },
  { name: "GS25", logo: "/images/partners/gs25.png" },
  { name: "SK에너지", logo: "/images/partners/sk-energy.svg" },
  { name: "롯데정보통신", logo: "/images/partners/lotte-it.svg" },
  { name: "틱택", logo: "/images/partners/틱택.png" },
  { name: "국토부", logo: "/images/partners/molit.png" },
  { name: "한국생산성본부", logo: "/images/partners/한국생산성본부.png" },
  { name: "지방시대위원회", logo: "/images/partners/지방시대위원회.svg" },
  { name: "성북구", logo: "/images/partners/성북구.png" },
  { name: "국가건축정책위원회", logo: "/images/partners/국가건축정책위원회.png" },
];

// 네비게이션 아이템
export const navigationItems: NavItem[] = [
  { label: "회사소개", href: "#about" },
  { label: "비전", href: "#vision" },
  { label: "제품소개", href: "#products" },
  { label: "서비스", href: "#services" },
  { label: "글로벌", href: "#global-development" },
  { label: "파트너", href: "#partners" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "문의하기", href: "#contact" }
];

// 통계 데이터
export const stats = [
  {
    metric: "50%",
    label: "업무 효율 향상",
    description: "ERP 도입으로 기존 수작업 대비 50% 시간 절감"
  },
  {
    metric: "370만+",
    label: "관리되는 거래 건수",
    description: "정유 유통 ERP로 실시간 거래 관리"
  },
  {
    metric: "24/7",
    label: "글로벌 지원",
    description: "베트남 개발센터를 통한 24시간 서비스"
  }
];

// 도메인/카테고리 솔루션
export const domainCategories = [
  {
    id: "erp",
    title: "ERP 솔루션",
    problem: "복잡한 유통 프로세스 관리에 어려움을 겪고 계신가요?",
    solutions: ["정유 유통 ERP", "재고 관리 시스템", "정산 자동화", "거래처 관리"]
  },
  {
    id: "ecommerce",
    title: "이커머스 솔루션",
    problem: "오프라인 사업을 온라인으로 확장하고 싶으신가요?",
    solutions: ["O2O 통합 플랫폼", "커머스 플랫폼 구축", "모바일 앱 개발", "결제/배송 시스템"]
  },
  {
    id: "integration",
    title: "시스템 통합",
    problem: "여러 시스템 간 데이터 연동이 필요하신가요?",
    solutions: ["레거시 시스템 통합", "API 개발", "데이터 마이그레이션", "실시간 동기화"]
  },
  {
    id: "custom",
    title: "맞춤형 개발",
    problem: "특별한 요구사항이 있으신가요?",
    solutions: ["맞춤형 솔루션 개발", "기술 컨설팅", "유지보수 서비스", "기술 지원"]
  }
];
