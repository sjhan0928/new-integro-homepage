"use client";
import { Modal } from "@/components/ui/modal";
import { MapPin, Navigation, Building2 } from "lucide-react";

export type OfficeLocation = "headquarters" | "seoul" | "vietnam";

interface LocationMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: OfficeLocation;
}

const locationData = {
  headquarters: {
    name: {
      ko: "본사 (대구)",
      en: "Headquarters (Daegu)",
    },
    address: {
      ko: "대구광역시 중구 동덕로 33",
      en: "33, Dongdeok-ro, Jung-gu, Daegu, South Korea",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.20325604188986!2d128.6044918265265!3d35.85817203774212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35660cee62ca8ff9%3A0xf10f67f1c2c07970!2z64yA6rWs6rSR7Jet7IucIOykkeq1rCDrj5nrjZXroZwgMzM!5e0!3m2!1sko!2skr!4v1749194217891!5m2!1sko!2skr",
    googleMapsLink: "https://maps.google.com/?q=대구광역시+중구+동덕로+33",
  },
  seoul: {
    name: {
      ko: "서울 사무소",
      en: "Seoul Office",
    },
    address: {
      ko: "서울특별시 성동구 연무장15길 11 에스팩토리 B동 2층",
      en: "S-Factory B, 2F, 11, Yeonmujang 15-gil, Seongdong-gu, Seoul, South Korea",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d940.5239191483632!2d127.05852098442637!3d37.542509869007645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z7ISc7Jq47Yq567OE7IucIOyEseuPmeq1rCDsl7DrrLTsnqUxNeq4uCAxMSDsl5DsiqTtjKnthqDrpqwgQuu_mSAy7Li1!5e0!3m2!1sko!2skr!4v1749194144091!5m2!1sko!2skr",
    googleMapsLink: "https://maps.google.com/?q=서울특별시+성동구+연무장15길+11+에스팩토리",
  },
  vietnam: {
    name: {
      ko: "베트남 사무소",
      en: "Vietnam Office",
    },
    address: {
      ko: "68/21 Hoang Dieu, Q4, HCMC, Vietnam",
      en: "68/21 Hoang Dieu, District 4, Ho Chi Minh City, Vietnam",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.599768539006!2d106.70301957451709!3d10.765296959399967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f13de5f1dd9%3A0xcd24e69ff8dbf07a!2zNjgvMjEgSG_DoG5nIERp4buHdSwgUGjGsOG7nW5nIDIsIFF14bqtbiA0LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2skr!4v1749194280655!5m2!1sen!2skr",
    googleMapsLink: "https://maps.google.com/?q=68/21+Hoang+Dieu,+District+4,+Ho+Chi+Minh+City,+Vietnam",
  },
};

export function LocationMapModal({ isOpen, onClose, location }: LocationMapModalProps) {
  const data = locationData[location];
  const lang = "ko"; // 나중에 i18n 연동 가능

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl w-[95vw] mx-auto">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-[#0d4f8b] via-[#1a7ab8] to-[#3ecf8e] p-4 sm:p-5 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{data.name[lang]}</h2>
            <p className="text-xs sm:text-sm text-white/70">찾아오시는 길</p>
          </div>
        </div>
      </div>

      {/* 지도 */}
      <div className="p-4 sm:p-5">
        <div className="aspect-video w-full rounded-xl overflow-hidden border bg-muted">
          <iframe
            src={data.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${data.name[lang]} 지도`}
          />
        </div>

        {/* 주소 정보 */}
        <div className="mt-4 p-4 bg-muted/50 rounded-xl">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#0d4f8b] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{data.address[lang]}</p>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="mt-4 flex gap-3">
          <a
            href={data.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0d4f8b] to-[#3ecf8e] text-white rounded-xl font-medium hover:opacity-90 transition-opacity text-sm"
          >
            <Navigation className="w-4 h-4" />
            Google Maps에서 열기
          </a>
        </div>
      </div>
    </Modal>
  );
}
