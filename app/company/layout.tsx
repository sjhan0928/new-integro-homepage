import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
  description: "인테그로는 디지털 전환(DX)과 AI 전환(AX)을 선도하는 IT 전문 기업입니다. 맞춤형 ERP 시스템, 통합 솔루션, 글로벌 IT 서비스를 제공합니다.",
  openGraph: {
    title: "회사소개 | 인테그로",
    description: "인테그로는 디지털 전환(DX)과 AI 전환(AX)을 선도하는 IT 전문 기업입니다.",
    url: "https://integro.work/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
