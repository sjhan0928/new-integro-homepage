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
  title: "Integro Homepage Demo",
  description: "Next.js 기반 홈페이지 데모",
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
