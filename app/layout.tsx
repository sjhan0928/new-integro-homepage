import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/components/providers";
import { FloatingContact } from "@/components/floating-contact";

// IT/Tech 홈페이지에 적합한 깔끔한 산세리프 폰트
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// 코드/기술적 요소에 사용할 모노스페이스 폰트
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "인테그로 | DX/AX 디지털 전환 전문 기업",
    template: "%s | 인테그로",
  },
  description: "인테그로는 기업의 디지털 전환(DX)과 AI 전환(AX)을 위한 최적의 IT 솔루션 파트너입니다. ERP, 시스템 통합, 맞춤형 개발, AI 솔루션을 제공합니다.",
  keywords: ["디지털 전환", "DX", "AX", "AI 전환", "ERP", "시스템 통합", "맞춤형 개발", "IT 솔루션", "인테그로", "Integro"],
  authors: [{ name: "인테그로 주식회사" }],
  creator: "Integro Co., Ltd.",
  publisher: "Integro Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://integro.work"),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "인테그로 | DX/AX 디지털 전환 전문 기업",
    description: "인테그로는 기업의 디지털 전환(DX)과 AI 전환(AX)을 위한 최적의 IT 솔루션 파트너입니다.",
    url: "https://integro.work",
    siteName: "인테그로",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "인테그로 - 디지털 전환 전문 기업",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "인테그로 | DX/AX 디지털 전환 전문 기업",
    description: "인테그로는 기업의 디지털 전환(DX)과 AI 전환(AX)을 위한 최적의 IT 솔루션 파트너입니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console 등록 후 추가
    // google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <FloatingContact />
        </Providers>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
