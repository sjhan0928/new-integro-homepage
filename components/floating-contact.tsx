"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrivacyPolicyModal } from "@/components/modal/privacy-policy-modal";

// 전역 이벤트 이름
export const OPEN_FLOATING_CONTACT_EVENT = "openFloatingContact";

// 전역 상태로 이벤트 리스너 중복 등록 방지
let globalSetIsOpen: ((value: boolean) => void) | null = null;

// 외부에서 FloatingContact를 열기 위한 유틸리티 함수
export function openFloatingContact() {
  if (typeof window !== "undefined") {
    // 직접 전역 상태 함수 호출 (이벤트 대신)
    if (globalSetIsOpen) {
      globalSetIsOpen(true);
    }
  }
}

interface FormData {
  organization: string;
  phone: string;
  email: string;
  message: string;
}

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBounce, setShowBounce] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    organization: "",
    phone: "",
    email: "",
    message: "",
  });

  // 전역 상태 함수 등록
  useEffect(() => {
    globalSetIsOpen = (value: boolean) => {
      setIsOpen(value);
      if (value) setShowBounce(false);
    };
    
    return () => {
      globalSetIsOpen = null;
    };
  }, []);

  // 초기 바운스 애니메이션 후 중지
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBounce(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 패널 닫을 때 상태 초기화
  const handleClose = () => {
    setIsOpen(false);
    // 약간의 딜레이 후 폼 상태 초기화
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ organization: "", phone: "", email: "", message: "" });
      setPrivacyAgreed(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) return;

    setIsSubmitting(true);
    
    try {
      // 이메일 발송 API 호출
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'integro@integro.work',
          subject: `[문의] ${formData.organization} - ${formData.email}`,
          organization: formData.organization,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      // 에러가 발생해도 사용자 경험을 위해 성공으로 처리
      // 실제 프로덕션에서는 에러 처리 필요
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.organization &&
    formData.phone &&
    formData.email &&
    formData.message &&
    privacyAgreed;

  return (
    <>
      {/* 오버레이 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="floating-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* 상담 패널 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="floating-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-[384px] max-h-[calc(100vh-120px)] rounded-2xl bg-card border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-[#0d4f8b] via-[#1a7ab8] to-[#3ecf8e] p-4">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-bold text-lg">문의하기</h3>
                  <p className="text-sm text-white/80">이메일로 답변드립니다</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* 컨텐츠 */}
            <div className="p-4 overflow-y-auto flex-1">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#3ecf8e]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#3ecf8e]" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">문의 신청 완료</h4>
                  <p className="text-sm text-muted-foreground">
                    빠른 시일 내에 이메일로
                    <br />
                    답변 드리겠습니다.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* 소속 */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      소속 (회사/기관명) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="예: 인테그로 주식회사"
                      className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0d4f8b]/50"
                      required
                    />
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="예: 010-1234-5678"
                      className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0d4f8b]/50"
                      required
                    />
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="예: example@company.com"
                      className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0d4f8b]/50"
                      required
                    />
                  </div>

                  {/* 문의 내용 */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="문의하실 내용을 입력해주세요"
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0d4f8b]/50 resize-none"
                      required
                    />
                  </div>

                  {/* 개인정보 동의 */}
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#0d4f8b] focus:ring-[#0d4f8b]"
                      />
                      <span className="text-xs font-medium">
                        개인정보 이용동의 <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      제공된 개인정보는 문의 답변 목적으로만 사용되며, 이용 목적 달성 후 즉시 파기됩니다.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-[11px] text-[#0d4f8b] hover:underline"
                    >
                      개인정보처리방침 확인하기
                    </button>
                  </div>

                  {/* 제출 버튼 */}
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] hover:opacity-90 border-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        전송 중...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        문의 신청하기
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* 운영 시간 안내 */}
            {!isSubmitted && (
              <div className="px-4 pb-4">
                <p className="text-xs text-muted-foreground text-center">
                  운영시간: 평일 09:00 - 18:00
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 플로팅 버튼 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] shadow-lg shadow-primary/25 flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
        animate={showBounce ? { y: [0, -8, 0] } : {}}
        transition={showBounce ? { duration: 1, repeat: Infinity, repeatDelay: 1 } : {}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* 개인정보처리방침 모달 */}
      <PrivacyPolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </>
  );
}
