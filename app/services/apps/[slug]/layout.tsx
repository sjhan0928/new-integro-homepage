import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// 서버 컴포넌트에서 사용 가능한 메타데이터 (클라이언트 전용 아이콘 없이)
const APP_METADATA: Record<string, { title: string; description: string; image: string }> = {
  inventory: {
    title: "재고 관리",
    description: "창고, 위치, 제품별 재고를 실시간으로 추적하세요. 자동 재주문 알림으로 재고 부족을 방지하고, 바코드/QR 스캔, 일괄 처리, 다중 창고 관리 등 모든 재고 업무를 하나의 시스템으로 통합합니다.",
    image: "/images/apps/inventory-hero.jpg",
  },
  crm: {
    title: "CRM",
    description: "리드 발굴부터 영업 기회 관리, 고객 유지까지 전체 고객 여정을 하나의 플랫폼에서 관리하세요. AI 기반 예측 분석으로 영업 성과를 극대화하고, 팀 협업을 통해 더 나은 고객 경험을 제공합니다.",
    image: "/images/apps/crm-hero.jpg",
  },
  accounting: {
    title: "회계",
    description: "청구서 발행부터 은행 조정, 세금 신고까지 모든 회계 업무를 자동화합니다. AI가 98%의 정확도로 청구서 정보를 자동 인식하고, 28,000개 은행과 연동하여 실시간 거래 내역을 관리합니다.",
    image: "/images/apps/accounting-hero.jpg",
  },
  knowledge: {
    title: "지식 센터",
    description: "프로세스 문서, 온보딩 가이드, 업무 매뉴얼을 하나의 공간에서 관리하세요. 강력한 텍스트 편집기와 '/' 단축키로 모든 비즈니스 앱의 동적 데이터를 통합하고, 팀원들과 실시간으로 협업할 수 있습니다.",
    image: "/images/apps/knowledge-hero.jpg",
  },
  sign: {
    title: "전자 서명",
    description: "계약서, 동의서 등 모든 문서에 전자 서명을 받으세요. 템플릿으로 반복 문서를 자동화하고, 서명 상태를 실시간으로 추적합니다. eIDAS, ESIGN법 등 전 세계 법적 요건을 준수하여 안전하게 서명을 관리합니다.",
    image: "/images/apps/sign-hero.jpg",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const app = APP_METADATA[resolvedParams.slug];

  if (!app) {
    return {
      title: "앱을 찾을 수 없습니다",
    };
  }

  return {
    title: app.title,
    description: app.description,
    openGraph: {
      title: `${app.title} | 인테그로`,
      description: app.description,
      url: `https://integro.work/services/apps/${resolvedParams.slug}`,
      images: [
        {
          url: app.image,
          width: 1200,
          height: 630,
          alt: app.title,
        },
      ],
    },
  };
}

export default function AppDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
