import { Metadata } from "next";
import { getPortfolioById } from "@/data/portfolios";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const portfolio = getPortfolioById(Number(resolvedParams.id));

  if (!portfolio) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }

  return {
    title: portfolio.title.ko,
    description: portfolio.description.ko,
    openGraph: {
      title: `${portfolio.title.ko} | 인테그로 포트폴리오`,
      description: portfolio.description.ko,
      url: `https://integro.work/works/${portfolio.id}`,
      images: [
        {
          url: portfolio.image,
          width: 1200,
          height: 630,
          alt: portfolio.title.ko,
        },
      ],
    },
  };
}

export default function WorkDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
