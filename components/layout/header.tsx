"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트 마운트 확인 (hydration 문제 방지)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const heroSection = document.getElementById("hero-section");
    const heroHeight = heroSection?.offsetHeight || window.innerHeight;

    // 스크롤 여부 (배경색 변경용)
    setIsScrolled(scrollY > 50);

    // Hero 섹션 안에 있는지 확인하여 헤더 표시/숨김
    const inHero = scrollY < heroHeight - 100;
    setIsVisible(inHero);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // 초기 상태는 이미 기본값으로 설정됨 (isScrolled: false, isVisible: true)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // 투명 → 흰색 배경 전환
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        // Hero 섹션 벗어나면 숨김
        !isVisible && "-translate-y-full"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src={isScrolled ? "/images/logo_color.png" : (isDarkMode ? "/images/logo_white.png" : "/images/logo_color.png")}
              alt="Integro"
              width={360}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors",
                isScrolled
                  ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  : isDarkMode
                    ? "text-white/90 hover:text-white"
                    : "text-gray-800 hover:text-blue-600"
              )}
            >
              HOME
            </Link>
            <Link
              href="/company"
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors",
                isScrolled
                  ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  : isDarkMode
                    ? "text-white/90 hover:text-white"
                    : "text-gray-800 hover:text-blue-600"
              )}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors",
                isScrolled
                  ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  : isDarkMode
                    ? "text-white/90 hover:text-white"
                    : "text-gray-800 hover:text-blue-600"
              )}
            >
              WHAT WE DO
            </Link>
            <Link
              href="/works"
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors",
                isScrolled
                  ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  : isDarkMode
                    ? "text-white/90 hover:text-white"
                    : "text-gray-800 hover:text-blue-600"
              )}
            >
              WORKS
            </Link>
          </nav>

          {/* 액션 버튼 */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher
              className={cn(
                isScrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : isDarkMode
                    ? "text-white"
                    : "text-gray-800"
              )}
            />
            <ModeToggle
              className={cn(
                isScrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : isDarkMode
                    ? "text-white"
                    : "text-gray-800"
              )}
            />

            {/* 모바일 메뉴 버튼 */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:hidden",
                isScrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : isDarkMode
                    ? "text-white hover:bg-white/10"
                    : "text-gray-800 hover:bg-gray-100"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className={cn(
            "md:hidden py-4 border-t animate-in slide-in-from-top",
            isScrolled
              ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
              : isDarkMode
                ? "bg-black/50 backdrop-blur-md border-white/20"
                : "bg-white/90 backdrop-blur-md border-gray-200"
          )}>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors",
                  isScrolled
                    ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    : isDarkMode
                      ? "text-white hover:text-white/80"
                      : "text-gray-800 hover:text-blue-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/company"
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors",
                  isScrolled
                    ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    : isDarkMode
                      ? "text-white hover:text-white/80"
                      : "text-gray-800 hover:text-blue-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors",
                  isScrolled
                    ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    : isDarkMode
                      ? "text-white hover:text-white/80"
                      : "text-gray-800 hover:text-blue-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                WHAT WE DO
              </Link>
              <Link
                href="/works"
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors",
                  isScrolled
                    ? "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    : isDarkMode
                      ? "text-white hover:text-white/80"
                      : "text-gray-800 hover:text-blue-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                WORKS
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
