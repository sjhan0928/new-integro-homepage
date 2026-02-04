"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { useI18n } from "@/lib/i18n";
import {
  Calculator,
  BookOpen,
  FileSignature,
  Users,
  Palette,
  RefreshCw,
  Key,
  Store,
  Mail,
  FileText,
  FolderKanban,
  Clock,
  Rocket,
  Calendar,
  HeartHandshake,
  Globe,
  Heart,
  Send,
  CreditCard,
  Package,
  Factory,
  BarChart3,
  UserCog,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

interface AppItem {
  id: string;
  title: { ko: string; en: string };
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const apps: AppItem[] = [
  { id: "accounting", title: { ko: "회계", en: "Accounting" }, icon: Calculator, color: "#8B5CF6", bgColor: "#EDE9FE" },
  { id: "knowledge", title: { ko: "지식 센터", en: "Knowledge" }, icon: BookOpen, color: "#0EA5E9", bgColor: "#E0F2FE" },
  { id: "sign", title: { ko: "전자 서명", en: "Sign" }, icon: FileSignature, color: "#0D9488", bgColor: "#CCFBF1" },
  { id: "crm", title: { ko: "CRM", en: "CRM" }, icon: Users, color: "#06B6D4", bgColor: "#CFFAFE" },
  { id: "studio", title: { ko: "스튜디오", en: "Studio" }, icon: Palette, color: "#6366F1", bgColor: "#E0E7FF" },
  { id: "subscription", title: { ko: "구독", en: "Subscriptions" }, icon: RefreshCw, color: "#0EA5E9", bgColor: "#E0F2FE" },
  { id: "rental", title: { ko: "렌탈", en: "Rental" }, icon: Key, color: "#10B981", bgColor: "#D1FAE5" },
  { id: "pos", title: { ko: "POS", en: "POS" }, icon: Store, color: "#06B6D4", bgColor: "#CFFAFE" },
  { id: "mail", title: { ko: "메일 및 채팅", en: "Mail & Chat" }, icon: Mail, color: "#F59E0B", bgColor: "#FEF3C7" },
  { id: "documents", title: { ko: "문서", en: "Documents" }, icon: FileText, color: "#3B82F6", bgColor: "#DBEAFE" },
  { id: "project", title: { ko: "프로젝트", en: "Project" }, icon: FolderKanban, color: "#8B5CF6", bgColor: "#EDE9FE" },
  { id: "timesheet", title: { ko: "작업 기록", en: "Timesheets" }, icon: Clock, color: "#0D9488", bgColor: "#CCFBF1" },
  { id: "fieldservice", title: { ko: "현장 서비스", en: "Field Service" }, icon: Rocket, color: "#EC4899", bgColor: "#FCE7F3" },
  { id: "planning", title: { ko: "일정 관리", en: "Planning" }, icon: Calendar, color: "#6366F1", bgColor: "#E0E7FF" },
  { id: "helpdesk", title: { ko: "헬프데스크", en: "Helpdesk" }, icon: HeartHandshake, color: "#06B6D4", bgColor: "#CFFAFE" },
  { id: "website", title: { ko: "웹사이트", en: "Website" }, icon: Globe, color: "#10B981", bgColor: "#D1FAE5" },
  { id: "social", title: { ko: "소셜 마케팅", en: "Social Marketing" }, icon: Heart, color: "#F43F5E", bgColor: "#FFE4E6" },
  { id: "email", title: { ko: "이메일 마케팅", en: "Email Marketing" }, icon: Send, color: "#3B82F6", bgColor: "#DBEAFE" },
  { id: "purchase", title: { ko: "매입", en: "Purchase" }, icon: CreditCard, color: "#8B5CF6", bgColor: "#EDE9FE" },
  { id: "inventory", title: { ko: "재고 관리", en: "Inventory" }, icon: Package, color: "#F59E0B", bgColor: "#FEF3C7" },
  { id: "manufacturing", title: { ko: "제조 관리", en: "Manufacturing" }, icon: Factory, color: "#10B981", bgColor: "#D1FAE5" },
  { id: "sales", title: { ko: "판매", en: "Sales" }, icon: BarChart3, color: "#EC4899", bgColor: "#FCE7F3" },
  { id: "hr", title: { ko: "인사 관리", en: "HR" }, icon: UserCog, color: "#0EA5E9", bgColor: "#E0F2FE" },
  { id: "dashboard", title: { ko: "현황판", en: "Dashboard" }, icon: LayoutGrid, color: "#6366F1", bgColor: "#E0E7FF" },
];

const content = {
  ko: {
    title: "다양한 비즈니스 앱 제공",
    subtitle: "ERP, 그룹웨어, CRM 등 복잡한 업무를 올인원 솔루션으로 통합하세요",
  },
  en: {
    title: "Wide Range of Business Apps",
    subtitle: "Integrate complex tasks like ERP, groupware, and CRM into one all-in-one solution",
  },
};

export function ServicesAppsGrid() {
  const { lang } = useI18n();
  const langKey = (lang as 'ko' | 'en') || 'ko';
  const displayContent = content[langKey];

  return (
    <section className="relative py-20 bg-muted/30">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,79,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,139,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayContent.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {displayContent.subtitle}
          </p>
        </motion.div>

        {/* 앱 그리드 */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {apps.map((app, index) => {
            const Icon = app.icon;
            // 상세 페이지가 있는 앱들
            const hasDetailPage = ["inventory", "crm", "accounting", "knowledge", "sign"].includes(app.id);
            
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* 아이콘 박스 */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 shadow-sm group-hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: app.bgColor }}
                >
                  <Icon
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{ color: app.color }}
                  />
                </div>
                {/* 라벨 */}
                <span className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {app.title[langKey]}
                </span>
                {/* 상세 페이지 있는 앱 표시 */}
                {hasDetailPage && (
                  <span className="text-[10px] text-blue-500 mt-1">
                    {langKey === 'ko' ? '상세보기' : 'Details'}
                  </span>
                )}
              </motion.div>
            );

            return hasDetailPage ? (
              <Link key={app.id} href={`/services/apps/${app.id}`}>
                {cardContent}
              </Link>
            ) : (
              <div key={app.id}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
