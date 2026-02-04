"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { PrivacyPolicyModal } from "@/components/modal/privacy-policy-modal";
import { LocationMapModal, OfficeLocation } from "@/components/modal/location-map-modal";
import { openFloatingContact } from "@/components/floating-contact";

// 다국어 콘텐츠
const footerContent = {
  ko: {
    tagline: "통합으로 성장을 이끄는 IT 전문 기업",
    subtitle: "INTEGRATION FOR GROWS",
    services: {
      title: "SERVICES",
      erp: "ERP 솔루션",
      integration: "시스템 통합",
      consulting: "IT 컨설팅",
      custom: "맞춤형 개발",
    },
    company: {
      title: "COMPANY",
      about: "회사 소개",
      works: "포트폴리오",
      careers: "채용",
    },
    contact: {
      title: "CONTACT",
      email: "integro@integro.work",
      offices: {
        headquarters: {
          label: "본사",
          address: "대구광역시 중구 동덕로 33",
        },
        seoul: {
          label: "서울",
          address: "성동구 연무장15길 11 에스팩토리 B동 2층",
        },
        vietnam: {
          label: "베트남",
          address: "68/21 Hoang Dieu, Q4, HCMC",
        },
      },
    },
    copyright: "인테그로 주식회사 (Integro Co., Ltd.). All rights reserved.",
    privacy: "개인정보처리방침",
    terms: "이용약관",
  },
  en: {
    tagline: "IT Solutions Company Leading Growth Through Integration",
    subtitle: "INTEGRATION FOR GROWS",
    services: {
      title: "SERVICES",
      erp: "ERP Solutions",
      integration: "System Integration",
      consulting: "IT Consulting",
      custom: "Custom Development",
    },
    company: {
      title: "COMPANY",
      about: "About Us",
      works: "Portfolio",
      careers: "Careers",
    },
    contact: {
      title: "CONTACT",
      email: "integro@integro.work",
      offices: {
        headquarters: {
          label: "HQ",
          address: "33, Dongdeok-ro, Jung-gu, Daegu",
        },
        seoul: {
          label: "Seoul",
          address: "S-Factory B 2F, 11 Yeonmujang 15-gil",
        },
        vietnam: {
          label: "Vietnam",
          address: "68/21 Hoang Dieu, Q4, HCMC",
        },
      },
    },
    copyright: "Integro Co., Ltd. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useI18n();
  const content = footerContent[lang as 'ko' | 'en'];
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<OfficeLocation>("headquarters");

  const handleLocationClick = (location: OfficeLocation) => {
    setSelectedLocation(location);
    setShowMapModal(true);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openFloatingContact();
  };

  return (
    <>
    <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white border-t border-gray-200 dark:border-white/10">
      {/* 메인 푸터 콘텐츠 */}
      <Container>
        <div className="py-10 md:py-12 lg:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 2xl:gap-12">
          {/* 회사 정보 - Header와 동일한 로고 */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo_color.png"
                alt="Integro"
                width={320}
                height={88}
                className="h-16 w-auto dark:hidden"
              />
              <Image
                src="/images/logo_white.png"
                alt="Integro"
                width={320}
                height={88}
                className="h-16 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {content.tagline}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {content.subtitle}
            </p>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider text-gray-700 dark:text-gray-300 mb-4">{content.services.title}</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.services.erp}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.services.integration}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.services.consulting}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.services.custom}
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 링크 */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider text-gray-700 dark:text-gray-300 mb-4">{content.company.title}</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/company" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.company.about}
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.company.works}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.company.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider text-gray-700 dark:text-gray-300 mb-4">{content.contact.title}</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              {/* 이메일 - 클릭 시 상담하기 열기 */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <button
                  onClick={handleEmailClick}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors text-left"
                >
                  {content.contact.email}
                </button>
              </li>
              
              {/* 본사 (대구) */}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <button
                  onClick={() => handleLocationClick("headquarters")}
                  className="leading-relaxed text-left hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#0d4f8b] dark:group-hover:text-[#3ecf8e] transition-colors">
                    {content.contact.offices.headquarters.label}
                  </span>
                  <span className="mx-1.5">·</span>
                  <span>{content.contact.offices.headquarters.address}</span>
                </button>
              </li>

              {/* 서울 사무소 */}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <button
                  onClick={() => handleLocationClick("seoul")}
                  className="leading-relaxed text-left hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#0d4f8b] dark:group-hover:text-[#3ecf8e] transition-colors">
                    {content.contact.offices.seoul.label}
                  </span>
                  <span className="mx-1.5">·</span>
                  <span>{content.contact.offices.seoul.address}</span>
                </button>
              </li>

              {/* 베트남 사무소 */}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <button
                  onClick={() => handleLocationClick("vietnam")}
                  className="leading-relaxed text-left hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#0d4f8b] dark:group-hover:text-[#3ecf8e] transition-colors">
                    {content.contact.offices.vietnam.label}
                  </span>
                  <span className="mx-1.5">·</span>
                  <span>{content.contact.offices.vietnam.address}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 - Header와 동일한 높이(h-20)와 정렬 */}
        <div className="border-t border-gray-200 dark:border-white/10">
          <div className="flex h-20 items-center justify-between flex-wrap gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              © {currentYear} {content.copyright}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-6 text-xs text-gray-400 dark:text-gray-500">
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {content.privacy}
                </button>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  {content.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>

    {/* 개인정보처리방침 모달 */}
    <PrivacyPolicyModal
      isOpen={showPrivacyModal}
      onClose={() => setShowPrivacyModal(false)}
    />

    {/* 지도 모달 */}
    <LocationMapModal
      isOpen={showMapModal}
      onClose={() => setShowMapModal(false)}
      location={selectedLocation}
    />
    </>
  );
}
