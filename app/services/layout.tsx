import { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스",
  description: "인테그로의 DX/AX 솔루션을 확인하세요. 재고 관리, CRM, 회계, 지식 센터, 전자 서명 등 다양한 비즈니스 앱을 제공합니다.",
  openGraph: {
    title: "서비스 | 인테그로",
    description: "인테그로의 DX/AX 솔루션을 확인하세요. 다양한 비즈니스 앱을 제공합니다.",
    url: "https://integro.work/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
