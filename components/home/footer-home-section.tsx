"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Container } from "@/components/ui/container";

export function FooterHomeSection() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-950 text-white py-12 sm:py-16 md:py-20 border-t border-gray-800">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/logo_color.png"
                alt="Integro"
                width={320}
                height={88}
                className="h-16 sm:h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">{t("footer.tagline")}</p>
            <p className="text-gray-500 mb-4 sm:mb-6 max-w-md leading-relaxed text-xs sm:text-sm">
              {t("footer.description")}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">integro@integro.work</p>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("footer.services.ecommerce")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("footer.services.erp")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("footer.services.integration")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("footer.services.custom")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  {t("footer.company.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  {t("footer.company.careers")}
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white transition-colors">
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm">{t("footer.copyright")}</p>
          <div className="flex gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
