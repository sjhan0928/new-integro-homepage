import { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "인테그로가 수행한 디지털 전환 프로젝트를 확인하세요. ERP 구축, 시스템 통합, AI 솔루션 등 다양한 성공 사례를 소개합니다.",
  openGraph: {
    title: "포트폴리오 | 인테그로",
    description: "인테그로가 수행한 디지털 전환 프로젝트를 확인하세요.",
    url: "https://integro.work/works",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
