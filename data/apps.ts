"use client";

import {
  Calculator,
  BookOpen,
  FileSignature,
  Users,
  Palette,
  FileText,
  FolderKanban,
  Globe,
  Package,
  BarChart3,
  type LucideIcon,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  PieChart,
  Workflow,
  Bell,
  Search,
} from "lucide-react";

// 다국어 텍스트 타입
interface LocalizedText {
  ko: string;
  en: string;
}

// 앱 기능 타입
interface AppFeature {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

// 앱 스크린샷/이미지 타입
interface AppScreenshot {
  id: string;
  image: string;
  caption: LocalizedText;
}

// 비즈니스 앱 상세 타입
export interface BusinessApp {
  id: string;
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  heroImage: string;
  features: AppFeature[];
  screenshots: AppScreenshot[];
  benefits: {
    title: LocalizedText;
    items: LocalizedText[];
  };
  integrations: string[];
  relatedApps: string[];
}

// ============================================
// 재고관리 앱 데이터
// ============================================
export const inventoryApp: BusinessApp = {
  id: "inventory",
  slug: "inventory",
  title: { ko: "재고 관리", en: "Inventory" },
  tagline: { 
    ko: "실시간으로 재고를 추적하고 관리하세요", 
    en: "Track and manage inventory in real-time" 
  },
  description: {
    ko: "창고, 위치, 제품별로 재고를 실시간 추적하고 자동 보충 알림으로 재고 부족을 방지합니다. 바코드/QR 스캔, 일괄 처리, 다중 창고 관리까지 모든 재고 업무를 하나의 시스템으로 통합하세요.",
    en: "Track inventory in real-time by warehouse, location, and product. Prevent stockouts with automatic replenishment alerts. Integrate all inventory tasks into one system with barcode/QR scanning, batch processing, and multi-warehouse management.",
  },
  icon: Package,
  color: "#F59E0B",
  bgColor: "#FEF3C7",
  heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
  
  features: [
    {
      id: "realtime-tracking",
      title: { ko: "실시간 재고 추적", en: "Real-time Stock Tracking" },
      description: { 
        ko: "모든 창고와 위치의 재고 현황을 실시간으로 확인하세요. 이동, 입출고 내역이 즉시 반영됩니다.",
        en: "Check stock levels across all warehouses and locations in real-time. Movements and transactions are reflected immediately."
      },
      icon: TrendingUp,
    },
    {
      id: "barcode-scan",
      title: { ko: "바코드/QR 스캔", en: "Barcode/QR Scanning" },
      description: { 
        ko: "모바일 기기로 바코드와 QR 코드를 스캔하여 빠르고 정확한 재고 관리가 가능합니다.",
        en: "Scan barcodes and QR codes with mobile devices for fast and accurate inventory management."
      },
      icon: Search,
    },
    {
      id: "auto-replenishment",
      title: { ko: "자동 보충 알림", en: "Auto Replenishment Alerts" },
      description: { 
        ko: "재고가 설정된 최소 수량 이하로 떨어지면 자동으로 알림을 보내고 발주를 생성합니다.",
        en: "Automatically send alerts and create purchase orders when stock falls below minimum levels."
      },
      icon: Bell,
    },
    {
      id: "multi-warehouse",
      title: { ko: "다중 창고 관리", en: "Multi-Warehouse Management" },
      description: { 
        ko: "여러 창고와 위치를 하나의 시스템에서 통합 관리하세요. 창고 간 이동도 쉽게 처리됩니다.",
        en: "Manage multiple warehouses and locations in one system. Inter-warehouse transfers are handled easily."
      },
      icon: Workflow,
    },
  ],
  
  screenshots: [
    {
      id: "dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      caption: { ko: "직관적인 재고 대시보드", en: "Intuitive Inventory Dashboard" },
    },
    {
      id: "mobile",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      caption: { ko: "모바일 바코드 스캔", en: "Mobile Barcode Scanning" },
    },
    {
      id: "reports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      caption: { ko: "상세 재고 리포트", en: "Detailed Inventory Reports" },
    },
  ],
  
  benefits: {
    title: { ko: "재고 관리의 이점", en: "Benefits of Inventory Management" },
    items: [
      { ko: "재고 정확도 99% 이상 달성", en: "Achieve 99%+ inventory accuracy" },
      { ko: "재고 부족으로 인한 판매 손실 방지", en: "Prevent lost sales due to stockouts" },
      { ko: "과잉 재고 비용 절감", en: "Reduce excess inventory costs" },
      { ko: "창고 운영 효율 향상", en: "Improve warehouse operational efficiency" },
      { ko: "실시간 의사결정 지원", en: "Support real-time decision making" },
    ],
  },
  
  integrations: ["accounting", "sales", "purchase", "manufacturing", "pos"],
  relatedApps: ["manufacturing", "purchase", "sales", "pos"],
};

// ============================================
// CRM 앱 데이터
// ============================================
export const crmApp: BusinessApp = {
  id: "crm",
  slug: "crm",
  title: { ko: "CRM", en: "CRM" },
  tagline: { 
    ko: "고객 관계를 체계적으로 관리하세요", 
    en: "Manage customer relationships systematically" 
  },
  description: {
    ko: "리드 발굴부터 영업 기회 관리, 고객 유지까지 전체 고객 여정을 하나의 플랫폼에서 관리하세요. AI 기반 예측 분석으로 영업 성과를 극대화하고, 팀 협업을 통해 더 나은 고객 경험을 제공합니다.",
    en: "Manage the entire customer journey from lead generation to sales opportunity management and customer retention on one platform. Maximize sales performance with AI-powered predictive analytics and deliver better customer experiences through team collaboration.",
  },
  icon: Users,
  color: "#06B6D4",
  bgColor: "#CFFAFE",
  heroImage: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80",
  
  features: [
    {
      id: "lead-management",
      title: { ko: "리드 관리", en: "Lead Management" },
      description: { 
        ko: "웹사이트, 이메일, 소셜 미디어 등 다양한 채널에서 수집된 리드를 자동으로 분류하고 점수화합니다.",
        en: "Automatically categorize and score leads collected from various channels including websites, emails, and social media."
      },
      icon: Target,
    },
    {
      id: "pipeline",
      title: { ko: "영업 파이프라인", en: "Sales Pipeline" },
      description: { 
        ko: "드래그앤드롭으로 영업 기회를 관리하고, 각 단계별 전환율과 예상 매출을 실시간으로 확인하세요.",
        en: "Manage sales opportunities with drag-and-drop, and check conversion rates and expected revenue for each stage in real-time."
      },
      icon: PieChart,
    },
    {
      id: "ai-insights",
      title: { ko: "AI 영업 인사이트", en: "AI Sales Insights" },
      description: { 
        ko: "AI가 과거 데이터를 분석하여 성사 가능성이 높은 기회를 추천하고, 최적의 접근 시점을 알려줍니다.",
        en: "AI analyzes historical data to recommend high-probability opportunities and suggests optimal timing for outreach."
      },
      icon: Zap,
    },
    {
      id: "customer-360",
      title: { ko: "고객 360° 뷰", en: "Customer 360° View" },
      description: { 
        ko: "고객의 모든 상호작용, 구매 이력, 지원 티켓을 한 화면에서 확인하세요.",
        en: "View all customer interactions, purchase history, and support tickets on one screen."
      },
      icon: Users,
    },
  ],
  
  screenshots: [
    {
      id: "pipeline-view",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
      caption: { ko: "칸반 스타일 파이프라인", en: "Kanban-style Pipeline" },
    },
    {
      id: "customer-profile",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      caption: { ko: "고객 프로필 상세", en: "Customer Profile Details" },
    },
    {
      id: "analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      caption: { ko: "영업 분석 대시보드", en: "Sales Analytics Dashboard" },
    },
  ],
  
  benefits: {
    title: { ko: "CRM의 이점", en: "Benefits of CRM" },
    items: [
      { ko: "영업 생산성 30% 향상", en: "30% increase in sales productivity" },
      { ko: "고객 유지율 개선", en: "Improved customer retention rate" },
      { ko: "영업 사이클 단축", en: "Shortened sales cycle" },
      { ko: "팀 협업 및 정보 공유 강화", en: "Enhanced team collaboration and information sharing" },
      { ko: "데이터 기반 의사결정", en: "Data-driven decision making" },
    ],
  },
  
  integrations: ["sales", "email", "helpdesk", "social", "website"],
  relatedApps: ["sales", "helpdesk", "email", "social"],
};

// ============================================
// 회계 앱 데이터
// ============================================
export const accountingApp: BusinessApp = {
  id: "accounting",
  slug: "accounting",
  title: { ko: "회계", en: "Accounting" },
  tagline: { 
    ko: "AI 기반 완전 자동화 회계 시스템", 
    en: "AI-powered Fully Automated Accounting" 
  },
  description: {
    ko: "청구서 발행부터 은행 조정, 세금 신고까지 모든 회계 업무를 자동화합니다. AI가 98%의 정확도로 청구서 정보를 자동 인식하고, 28,000개 은행과 연동하여 실시간 거래 내역을 관리합니다. 데이터 입력 없이 완전 자동화된 회계를 경험하세요.",
    en: "Automate all accounting tasks from invoicing to bank reconciliation and tax filing. AI recognizes invoice information with 98% accuracy, and integrates with 28,000 banks to manage real-time transaction records. Experience fully automated accounting without data entry.",
  },
  icon: Calculator,
  color: "#8B5CF6",
  bgColor: "#EDE9FE",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  
  features: [
    {
      id: "ai-invoice",
      title: { ko: "AI 청구서 자동 인식", en: "AI Invoice Recognition" },
      description: { 
        ko: "최첨단 AI 기술로 청구서 정보를 98% 정확도로 자동 캡처합니다. 데이터 입력 없이 승인만 하면 됩니다.",
        en: "Automatically capture invoice information with 98% accuracy using cutting-edge AI technology. Just approve without data entry."
      },
      icon: Zap,
    },
    {
      id: "bank-sync",
      title: { ko: "스마트 은행 연동", en: "Smart Bank Sync" },
      description: { 
        ko: "28,000개 이상의 은행과 연동하여 거래 내역을 자동으로 가져옵니다. AI가 95%의 거래를 자동 매칭합니다.",
        en: "Automatically import transactions by integrating with over 28,000 banks. AI automatically matches 95% of transactions."
      },
      icon: Workflow,
    },
    {
      id: "realtime-report",
      title: { ko: "실시간 재무 보고서", en: "Real-time Financial Reports" },
      description: { 
        ko: "실시간 재무 성과 보고서로 정확한 비즈니스 의사결정을 지원합니다. 손쉬운 주석 추가와 내보내기가 가능합니다.",
        en: "Support accurate business decisions with real-time financial performance reports. Easy annotation and export capabilities."
      },
      icon: BarChart3,
    },
    {
      id: "auto-followup",
      title: { ko: "자동 후속 조치", en: "Automated Follow-ups" },
      description: { 
        ko: "연체된 결제를 자동으로 파악하고 이메일, SMS, 우편으로 적절한 알림을 자동 전송합니다.",
        en: "Automatically identify overdue payments and send appropriate notifications via email, SMS, or mail."
      },
      icon: Bell,
    },
  ],
  
  screenshots: [
    {
      id: "dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      caption: { ko: "회계 대시보드", en: "Accounting Dashboard" },
    },
    {
      id: "invoice",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
      caption: { ko: "청구서 자동 처리", en: "Automatic Invoice Processing" },
    },
    {
      id: "reports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      caption: { ko: "재무 보고서", en: "Financial Reports" },
    },
  ],
  
  benefits: {
    title: { ko: "회계 자동화의 이점", en: "Benefits of Accounting Automation" },
    items: [
      { ko: "회계 업무 시간 80% 절감", en: "80% reduction in accounting work time" },
      { ko: "데이터 입력 오류 제거", en: "Eliminate data entry errors" },
      { ko: "실시간 재무 현황 파악", en: "Real-time financial status tracking" },
      { ko: "세금 신고 자동화", en: "Automated tax filing" },
      { ko: "글로벌 회계 기준 준수", en: "Compliance with global accounting standards" },
    ],
  },
  
  integrations: ["sales", "purchase", "inventory", "expenses", "pos"],
  relatedApps: ["inventory", "sales", "purchase"],
};

// ============================================
// 지식 센터 앱 데이터
// ============================================
export const knowledgeApp: BusinessApp = {
  id: "knowledge",
  slug: "knowledge",
  title: { ko: "지식 센터", en: "Knowledge" },
  tagline: { 
    ko: "기업의 모든 지식을 한 곳에서 관리", 
    en: "Manage all company knowledge in one place" 
  },
  description: {
    ko: "프로세스 문서, 온보딩 가이드, 업무 매뉴얼을 하나의 공간에서 관리하세요. 강력한 텍스트 편집기와 '/' 단축키로 모든 비즈니스 앱의 동적 데이터를 통합하고, 팀원들과 실시간으로 협업할 수 있습니다.",
    en: "Manage process documentation, onboarding guides, and work manuals in one shared space. Integrate dynamic data from all business apps with a powerful text editor and '/' shortcuts, and collaborate with team members in real-time.",
  },
  icon: BookOpen,
  color: "#0EA5E9",
  bgColor: "#E0F2FE",
  heroImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&q=80",
  
  features: [
    {
      id: "rich-editor",
      title: { ko: "강력한 텍스트 편집기", en: "Powerful Text Editor" },
      description: { 
        ko: "'/' 단축키로 모든 비즈니스 앱의 동적 데이터를 통합하여 콘텐츠를 최상의 상태로 표시합니다.",
        en: "Display content in the best state by integrating dynamic data from all business apps with the '/' shortcut."
      },
      icon: FileText,
    },
    {
      id: "flexible-organize",
      title: { ko: "유연한 정보 구성", en: "Flexible Information Organization" },
      description: { 
        ko: "사용자 지정 필드로 콘텐츠를 정렬하고, 개인화된 보기와 필터로 원하는 정보를 빠르게 찾을 수 있습니다.",
        en: "Sort content with custom fields and quickly find information with personalized views and filters."
      },
      icon: FolderKanban,
    },
    {
      id: "access-control",
      title: { ko: "권한 관리", en: "Access Control" },
      description: { 
        ko: "콘텐츠를 보고 관리할 수 있는 사람을 결정하고, 필요시 페이지를 전 세계와 공유할 수 있습니다.",
        en: "Decide who can view and manage content, and share pages with the world when needed."
      },
      icon: ShieldCheck,
    },
    {
      id: "realtime-collab",
      title: { ko: "실시간 협업", en: "Real-time Collaboration" },
      description: { 
        ko: "팀원들과 동시에 문서 작업을 수행하고, 자동 저장과 수정 내역으로 작업 손실을 방지합니다.",
        en: "Work on documents simultaneously with team members, and prevent work loss with auto-save and revision history."
      },
      icon: Users,
    },
  ],
  
  screenshots: [
    {
      id: "editor",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      caption: { ko: "강력한 편집기 인터페이스", en: "Powerful Editor Interface" },
    },
    {
      id: "organize",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      caption: { ko: "유연한 콘텐츠 구성", en: "Flexible Content Organization" },
    },
    {
      id: "collaboration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      caption: { ko: "팀 협업 환경", en: "Team Collaboration" },
    },
  ],
  
  benefits: {
    title: { ko: "지식 센터의 이점", en: "Benefits of Knowledge Center" },
    items: [
      { ko: "신규 직원 온보딩 시간 50% 단축", en: "50% reduction in new employee onboarding time" },
      { ko: "팀 간 지식 공유 활성화", en: "Enhanced knowledge sharing between teams" },
      { ko: "업무 프로세스 표준화", en: "Standardization of work processes" },
      { ko: "정보 검색 시간 절감", en: "Reduced information search time" },
      { ko: "문서 버전 관리 자동화", en: "Automated document version control" },
    ],
  },
  
  integrations: ["project", "crm", "sales", "helpdesk", "hr"],
  relatedApps: ["project", "helpdesk", "crm"],
};

// ============================================
// 전자 서명 앱 데이터
// ============================================
export const signApp: BusinessApp = {
  id: "sign",
  slug: "sign",
  title: { ko: "전자 서명", en: "eSign" },
  tagline: { 
    ko: "언제 어디서나 빠르고 안전한 전자 서명", 
    en: "Fast and secure eSign anytime, anywhere" 
  },
  description: {
    ko: "계약서, 동의서 등 모든 문서에 전자 서명을 받으세요. 템플릿으로 반복 문서를 자동화하고, 서명 상태를 실시간으로 추적합니다. eIDAS, ESIGN법 등 전 세계 법적 요건을 준수하여 안전하게 서명을 관리합니다.",
    en: "Get electronic signatures on all documents including contracts and agreements. Automate repetitive documents with templates and track signature status in real-time. Safely manage signatures in compliance with global legal requirements including eIDAS and ESIGN Act.",
  },
  icon: FileSignature,
  color: "#0D9488",
  bgColor: "#CCFBF1",
  heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  
  features: [
    {
      id: "drag-drop",
      title: { ko: "드래그앤드롭 서명 필드", en: "Drag & Drop Signature Fields" },
      description: { 
        ko: "편집 가능한 필수 필드를 원하는 곳에 끌어다 놓으세요. 템플릿으로 반복 문서 작성을 자동화합니다.",
        en: "Drag and drop editable required fields wherever you want. Automate repetitive document creation with templates."
      },
      icon: Palette,
    },
    {
      id: "anywhere-sign",
      title: { ko: "언제 어디서나 서명", en: "Sign Anywhere" },
      description: { 
        ko: "고객은 어떤 디바이스에서든 문서에 액세스하고 몇 번의 클릭만으로 전자 서명을 완료할 수 있습니다.",
        en: "Customers can access documents on any device and complete electronic signatures with just a few clicks."
      },
      icon: Globe,
    },
    {
      id: "tracking",
      title: { ko: "서명 상태 추적", en: "Signature Status Tracking" },
      description: { 
        ko: "문서 상태를 실시간으로 추적하고, 서명 요청과 알림을 전송하며 계약 진행 상황을 한눈에 파악합니다.",
        en: "Track document status in real-time, send signature requests and notifications, and monitor contract progress at a glance."
      },
      icon: Target,
    },
    {
      id: "legal-compliance",
      title: { ko: "법적 유효성 보장", en: "Legal Compliance" },
      description: { 
        ko: "eIDAS(유럽), ESIGN법(미국), 전 세계 대부분 국가의 전자서명법을 준수합니다. SMS 인증으로 서명자 신원을 확인합니다.",
        en: "Compliant with eIDAS (Europe), ESIGN Act (US), and electronic signature laws in most countries worldwide. Verify signer identity with SMS authentication."
      },
      icon: ShieldCheck,
    },
  ],
  
  screenshots: [
    {
      id: "template",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      caption: { ko: "서명 템플릿 편집", en: "Signature Template Editing" },
    },
    {
      id: "mobile-sign",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      caption: { ko: "모바일 서명", en: "Mobile Signing" },
    },
    {
      id: "tracking-view",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      caption: { ko: "서명 상태 대시보드", en: "Signature Status Dashboard" },
    },
  ],
  
  benefits: {
    title: { ko: "전자 서명의 이점", en: "Benefits of eSign" },
    items: [
      { ko: "계약 체결 시간 80% 단축", en: "80% reduction in contract signing time" },
      { ko: "종이 및 인쇄 비용 절감", en: "Reduced paper and printing costs" },
      { ko: "어디서든 즉시 서명 가능", en: "Sign instantly from anywhere" },
      { ko: "법적으로 유효한 전자 서명", en: "Legally valid electronic signatures" },
      { ko: "모든 서명 이력 자동 보관", en: "Automatic archiving of all signature history" },
    ],
  },
  
  integrations: ["accounting", "sales", "hr", "documents", "project"],
  relatedApps: ["accounting", "sales", "documents"],
};

// ============================================
// 전체 앱 목록
// ============================================
export const businessApps: BusinessApp[] = [
  inventoryApp,
  crmApp,
  accountingApp,
  knowledgeApp,
  signApp,
];

// 앱 slug로 조회
export function getAppBySlug(slug: string): BusinessApp | undefined {
  return businessApps.find(app => app.slug === slug);
}

// 모든 앱 slug 목록
export function getAllAppSlugs(): string[] {
  return businessApps.map(app => app.slug);
}

// 연관 앱 조회
export function getRelatedApps(appId: string): BusinessApp[] {
  const app = businessApps.find(a => a.id === appId);
  if (!app) return [];
  
  return app.relatedApps
    .map(id => businessApps.find(a => a.id === id))
    .filter((a): a is BusinessApp => a !== undefined);
}
