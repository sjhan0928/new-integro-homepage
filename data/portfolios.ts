// 포트폴리오 데이터 타입 정의
export interface Portfolio {
  id: number;
  title: {
    ko: string;
    en: string;
  };
  customer: {
    ko: string;
    en: string;
  };
  related_technology?: string;
  category: {
    ko: string;
    en: string;
  };
  tags: {
    ko: string[];
    en: string[];
  };
  description: {
    ko: string;
    en: string;
  };
  image: string;
  details: {
    intro: {
      ko: string;
      en: string;
    };
    scope: {
      ko: string[];
      en: string[];
    };
    mainTasks: {
      ko: string[];
      en: string[];
    };
    focus?: {
      ko: string[];
      en: string[];
    };
    additionalContent?: {
      ko: string;
      en: string;
    };
    campaigns?: {
      title: string;
      url: string;
    }[];
  };
}

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: {
      ko: "KK(OO광유) ERP",
      en: "KK(OO Oil) ERP"
    },
    customer: {
      ko: "OO광유",
      en: "OO Oil"
    },
    related_technology: "Vue.js, Node.js",
    category: {
      ko: "개발 · 디자인 · 기획 · 웹",
      en: "Development · Design · Planning · Web"
    },
    tags: {
      ko: ["CRM 고객관리", "ERP 전사자원관리", "재고 · 창고 · PDA"],
      en: ["CRM Customer Management", "ERP Enterprise Resource Planning", "Inventory · Warehouse · PDA"]
    },
    description: {
      ko: "OO광유 ERP는 아스팔트, 휘발유, 경유, 윤활유 등 다양한 에너지 제품을 취급하는 선도적인 에너지 유통 업체를 위한 통합 관리 시스템입니다.",
      en: "OO Oil ERP is an integrated management system for a leading energy distribution company that handles various energy products such as asphalt, gasoline, diesel, and lubricants."
    },
    image: "/images/portfolio/portfolios1.png",
    details: {
      intro: {
        ko: "OO광유는 아스팔트, 휘발유, 경유, 윤활유 등 다양한 에너지 제품을 취급하는 선도적인 에너지 유통 업체입니다. 해당 프로젝트는 회사의 전체 업무 프로세스를 통합적으로 관리할 수 있는 전사적 ERP(Enterprise Resource Planning) 시스템을 개발하는 것을 목표로 진행되었습니다.",
        en: "OO Oil is a leading energy distribution company that handles various energy products such as asphalt, gasoline, diesel, and lubricants. This project aimed to develop an enterprise-wide ERP (Enterprise Resource Planning) system that can comprehensively manage the company's entire business processes."
      },
      scope: {
        ko: [
          "현재 시스템 및 업무 프로세스의 현황을 면밀히 분석",
          "비효율적이거나 문제점이 있는 부분을 식별",
          "미래의 업무 프로세스 및 시스템 아키텍처 설계",
          "효율성과 생산성을 극대화하기 위한 최적의 제안 도출",
          "직영주유소의 재고, 매출, 인력 등을 통합 관리할 수 있는 시스템 구축",
          "업무 효율화를 위한 자동화 및 최적화 솔루션 제공"
        ],
        en: [
          "Thorough analysis of current systems and business processes",
          "Identification of inefficient or problematic areas",
          "Design of future business processes and system architecture",
          "Derivation of optimal proposals to maximize efficiency and productivity",
          "Building a system that can integrate inventory, sales, and personnel management of directly-operated gas stations",
          "Providing automation and optimization solutions for business efficiency"
        ]
      },
      mainTasks: {
        ko: [
          "회사의 전 부서에 걸쳐 판매, 구매, 입고, 출고, 배차, 정산, 자산 관리 등의 프로세스를 종합적으로 분석",
          "ERP 시스템을 최적화된 구성으로 개발",
          "리소스 활용을 극대화하고, 업무의 효율성을 높이는 것이 주된 목적"
        ],
        en: [
          "Comprehensive analysis of processes such as sales, purchasing, receiving, shipping, dispatch, settlement, and asset management across all departments of the company",
          "Development of the ERP system with an optimized configuration",
          "The main purpose is to maximize resource utilization and improve work efficiency"
        ]
      },
      focus: {
        ko: [
          "통합된 대시보드를 통해 경영진이 주요 지표를 손쉽고 빠르게 파악할 수 있도록 지원",
          "복잡한 데이터를 쉽게 이해할 수 있는 형태로 변환하여 리포트 생성 간소화"
        ],
        en: [
          "Supporting executives to easily and quickly understand key indicators through an integrated dashboard",
          "Simplifying report generation by converting complex data into easily understandable formats"
        ]
      },
      additionalContent: {
        ko: "주요 기능으로는 알림, 대시보드, 사용자 관리, 사업장 관리, 거래처/공급처 관리, 품목 관리, 주문 관리, 창고 관리, 배송 관리, 운전기사 App, 교대 근무 관리, 재무 관리, 리포트 관리 등이 있으며, 창고 관리 시스템, 가격 관리 시스템, 배송 관리 시스템, 전자 결재 시스템 등의 Add-on 모듈도 제공합니다.",
        en: "Major functions include notifications, dashboard, user management, workplace management, customer/supplier management, item management, order management, warehouse management, delivery management, driver app, shift management, financial management, report management, etc. Add-on modules such as warehouse management system, price management system, delivery management system, and electronic approval system are also provided."
      }
    }
  },
  {
    id: 2,
    title: {
      ko: "OO사 글로벌",
      en: "OO-SA Global"
    },
    customer: {
      ko: "OO사",
      en: "OO-SA"
    },
    related_technology: "Vue.js, nuxt.js, Node.js",
    category: {
      ko: "개발 · 디자인 · 기획 · 웹",
      en: "Development · Design · Planning"
    },
    tags: {
      ko: ["홈페이지ㆍ게시판", "퍼블리싱ㆍ반응형", "기타(웹사이트 구축)"],
      en: ["Web", "Homepage & Board", "Publishing & Responsive", "Others(Website Development)"]
    },
    description: {
      ko: "OO사 글로벌의 Front-end 디자인/기획/개발 및 운영을 담당하고, 주로 브랜드 페이지나 캔페인 등을 개발하여 배포하고 운영하는 역할을 맡고 있습니다.",
      en: "Responsible for the front-end design/planning/development and operation of OO-SA Global, mainly developing, deploying and operating brand pages and campaigns."
    },
    image: "/images/portfolio/portfolios2.png",
    details: {
      intro: {
        ko: "OO사 글로벌의 Front-end 디자인/기획/개발 및 운영을 담당하고, 주로 브랜드 페이지나 캔페인 등을 개발하여 배포하고 운영하는 역할을 맡고 있습니다.",
        en: "Responsible for the front-end design/planning/development and operation of OO-SA Global, mainly developing, deploying and operating brand pages and campaigns."
      },
      scope: {
        ko: [
          "안정적인 서비스 제공을 위한 서버 구축",
          "UI/UX 디자인을 바탕으로 한 실제 페이지 개발",
          "다양한 마케팅 캠페인을 온라인에서 효율적으로 운영"
        ],
        en: [
          "Server setup for stable service provision",
          "Actual page development based on UI/UX design",
          "Efficient online operation of various marketing campaigns"
        ]
      },
      mainTasks: {
        ko: [
          "페이지에 동적인 애니메이션 효과를 적용하여 사용자의 참여와 이목을 끕니다.",
          "코드의 품질과 성능을 지속적으로 모니터링하고 최적화합니다.",
          "특정 브랜드나 캠페인에 대응하는 마이크로 페이지를 제작하고, 이를 배포 및 운영합니다."
        ],
        en: [
          "Apply dynamic animation effects to pages to attract user participation and attention.",
          "Continuously monitor and optimize code quality and performance.",
          "Create, deploy, and operate micro pages corresponding to specific brands or campaigns."
        ]
      },
      focus: {
        ko: [
          "프론트 페이지는 OO사의 전체적인 마케팅 활동과 매출에 직접적으로 영향을 미치기 때문에, 납기일과 실시간 운영 대응이 매우 중요합니다. 따라서, 빠른 반응성과 높은 책임감으로 프로젝트를 수행하고 있습니다.",
          "OO사 글로벌의 Front-end 개발 및 운영은 단순히 코드를 작성하는 것을 넘어, 브랜드와 사용자가 만나는 중요한 접점을 제공하는 역할을 하고 있습니다. 이를 통해 OO사의 글로벌 사업에 기여하고 있습니다."
        ],
        en: [
          "As front pages directly affect OO-SA's overall marketing activities and sales, delivery dates and real-time operational response are very important. Therefore, we are carrying out the project with quick responsiveness and high responsibility.",
          "The front-end development and operation of OO-SA Global goes beyond simply writing code, providing an important point of contact between brands and users. Through this, we are contributing to OO-SA's global business."
        ]
      },
      campaigns: [
        {
          title: "Tokyo Popup",
          url: "https://global.musinsa.com/us/promotions/tokyopopup"
        },
        {
          title: "Styling Hangang",
          url: "https://global.musinsa.com/us/promotions/styling_hangang"
        }
      ]
    }
  },
  {
    id: 3,
    title: {
      ko: "카페24",
      en: "Cafe24"
    },
    customer: {
      ko: "카페24",
      en: "Cafe24"
    },
    related_technology: "PHP",
    category: {
      ko: "개발 · 웹 · 기타(커머스ㆍ쇼핑몰)",
      en: "Development · Web · Others(Commerce · Shopping Mall)"
    },
    tags: {
      ko: ["B2B 모듈", "추천인 프로그램", "Cafe24 마켓플레이스"],
      en: ["B2B Module", "Referral Program", "Cafe24 Marketplace"]
    },
    description: {
      ko: "Cafe24 마켓플레이스에 B2B 모듈과 추천 보상 프로그램을 등록 및 개발한 프로젝트입니다.",
      en: "A project to develop and register a B2B module and a referral reward program on the Cafe24 Marketplace."
    },
    image: "/images/portfolio/portfolios3.png",
    details: {
      intro: {
        ko: "O페24 마켓플레이스에 올라간 B2B 모듈, 회원들의 추천을 track 하여 새로운 회원에게 reward를 주는 referral program 개발",
        en: "Developed a B2B module and a referral program that tracks member referrals and rewards new signups, published on the O-fe24 Marketplace."
      },
      scope: {
        ko: ["Front-end 개발", "Back-end 개발", "O페24 마켓플레이스 등록"],
        en: ["Front-end development", "Back-end development", "O-fe24 Marketplace registration"]
      },
      mainTasks: {
        ko: ["B2B 판매 모듈 기능 개발", "기존 회원과 신규 회원 대상 reward 제공 referral 프로그램 개발"],
        en: ["Developed B2B sales module", "Developed referral program to reward both existing and new users"]
      }
    }
  },
  {
    id: 4,
    title: {
      ko: "Weplject (OO정보통신)",
      en: "Weplject (OO Information & Communications)"
    },
    customer: {
      ko: "OO정보통신",
      en: "OO Information & Communications"
    },
    related_technology: "React, Node.js, TypeScript",
    category: {
      ko: "개발 · 웹 · 프로젝트 관리",
      en: "Development · Web · Project Management"
    },
    tags: {
      ko: ["PM 툴", "Jira 대체", "Trello 대체", "대시보드"],
      en: ["Project Management Tool", "Jira Alternative", "Trello Alternative", "Dashboard"]
    },
    description: {
      ko: "OO그룹 전사를 위한 차세대 프로젝트 관리 툴 Weplject 개발 프로젝트입니다.",
      en: "Development of Weplject, a next-generation project management tool for OO Group."
    },
    image: "/images/portfolio/portfolios4.png",
    details: {
      intro: {
        ko: "OO 정보통신과 협업하여 OO 그룹의 프로젝트 관리 툴 Weplject를 개발, Jira와 Trello를 대체할 예정입니다.",
        en: "Collaborated with OO Information & Communications to develop Weplject, a project management tool set to replace Jira and Trello within OO Group."
      },
      scope: {
        ko: ["요구사항 분석", "시스템 아키텍처 설계", "화면 개발", "API 개발", "System Integration", "서버 개발"],
        en: ["Requirement analysis", "System architecture design", "UI development", "API development", "System integration", "Server development"]
      },
      mainTasks: {
        ko: ["Live Process 상태 관리", "Dashboard 데이터 통합", "업무 관리", "안전 관리", "커뮤니케이션 관리", "헬프데스크 제공"],
        en: ["Live process status tracking", "Dashboard data integration", "Task management", "Safety management", "Communication management", "Help desk support"]
      }
    }
  },
  {
    id: 5,
    title: {
      ko: "OO마트 DMS",
      en: "OO Mart DMS"
    },
    customer: {
      ko: "OO마트 베트남",
      en: "OO Mart Vietnam"
    },
    related_technology: "AWS, Vue.js, Node.js, Flutter, PHP",
    category: {
      ko: "개발 · 디자인 · 웹 · 안드로이드 · iOS",
      en: "Development · Design · Web · Android · iOS"
    },
    tags: {
      ko: ["재고ㆍ창고ㆍPDA", "업무자동화ㆍRPA", "내부 시스템 연동"],
      en: ["Inventory · Warehouse · PDA", "Business Automation · RPA", "Internal System Integration"]
    },
    description: {
      ko: "OO마트의 오프라인 기반을 온라인 판매로 확장하기 위한 DMS(Delivery Management System) 구축 프로젝트입니다.",
      en: "A project to build a DMS (Delivery Management System) to expand OO Mart's offline business into efficient online sales."
    },
    image: "/images/portfolio/portfolios5.png",
    details: {
      intro: {
        ko: "오프라인 판매가 기반인 OO마트의 온라인 판매를 효율적으로 운영할 수 있는 DMS (Delivery Management System) 구축",
        en: "Development of a DMS (Delivery Management System) to manage OO Mart's online delivery operations efficiently."
      },
      scope: {
        ko: ["서버 구축", "Front-end, Backend, 관리자 페이지", "3PL API 연동", "Picker/Driver App 개발 (Flutter)"],
        en: ["Server setup", "Front-end, Back-end, Admin page", "3PL API integration", "Picker/Driver App development (Flutter)"]
      },
      mainTasks: {
        ko: ["유저 그룹 관리", "Picker App", "Driver App", "매장별 용량 설정", "근무 교대 관리", "RMA 관리", "주문 및 결제 관리"],
        en: ["User group management", "Picker App", "Driver App", "Store capacity", "Work shift management", "RMA management", "Order and payment management"]
      },
      focus: {
        ko: ["배송 기사 및 다양한 물류사와의 통합을 통해 빠른 배차", "Picker&Packer 용량 기반 자동 최적화 및 지역별 관리 제공"],
        en: ["Efficient dispatch through integration with drivers and logistics companies", "System-driven capacity awareness and delivery optimization by region"]
      }
    }
  },
  {
    id: 6,
    title: {
      ko: "반려견/주 App 서비스",
      en: "Pet Companion App Service"
    },
    customer: {
      ko: "OO정보통신",
      en: "OO Information & Communications"
    },
    related_technology: "React Native, React, Java",
    category: {
      ko: "개발 · 안드로이드 · iOS",
      en: "Development · Android · iOS"
    },
    tags: {
      ko: ["중개ㆍ매칭 플랫폼", "입점몰 구축", "커머스 이전ㆍ확장"],
      en: ["Matching Platform", "Merchant Integration", "Commerce Migration & Expansion"]
    },
    description: {
      ko: "반려견 케어, 전문가 예약, 반려견 동반 장소 안내 등 다양한 기능을 제공하는 통합 반려견 서비스 앱 개발",
      en: "A comprehensive pet care service app that includes expert booking, dog-friendly locations, and pet care features."
    },
    image: "/images/portfolio/portfolios6.png",
    details: {
      intro: {
        ko: "반려견 케어 및 관리, 반려견 동반 가능 장소 소개 앱",
        en: "An app for pet care and information on dog-friendly places."
      },
      scope: {
        ko: ["Front-end 개발", "Backend 개발", "관리자 시스템", "서비스 고도화"],
        en: ["Front-end development", "Back-end development", "Admin system", "Service enhancement"]
      },
      mainTasks: {
        ko: [
          "App 개발 - React Native",
          "사용자 UI/UX 설계 및 반응형 디자인",
          "데이터베이스 및 API 통합",
          "서버 운영 및 최적화",
          "총괄 관리자 시스템 및 셀러/전문가 관리 시스템",
          "예약 및 결제 시스템"
        ],
        en: [
          "App development - React Native",
          "User-friendly UI/UX and responsive design",
          "Database and API integration",
          "Server management and optimization",
          "Admin and seller/expert management systems",
          "Booking and payment services"
        ]
      },
      focus: {
        ko: ["셀러센터, 등급제, GPS 기반 장소 추천, 실시간 예약 기능 중심 고도화"],
        en: ["Enhancements focused on seller center, membership system, GPS-based recommendations, and real-time booking"]
      }
    }
  },
  {
    id: 7,
    title: {
      ko: "Playauto 시스템 연동",
      en: "Playauto Integration"
    },
    customer: {
      ko: "Playauto",
      en: "Playauto"
    },
    related_technology: "Node.js",
    category: {
      ko: "개발 · 웹 · 기타(웹사이트 구축)",
      en: "Development · Web · Others(Website Development)"
    },
    tags: {
      ko: ["SaaS", "Omni-channel", "Playauto API"],
      en: ["SaaS", "Omni-channel", "Playauto API"]
    },
    description: {
      ko: "Omni-channel 세일즈 플랫폼인 Playauto와의 API 연동 및 데이터 통합 작업",
      en: "Integration of omni-channel sales platform Playauto through custom API connections and data synchronization"
    },
    image: "/images/portfolio/portfolios7.png",
    details: {
      intro: {
        ko: "옴니 채널 세일즈 플랫폼 (Saas) : Playauto 시스템 연동",
        en: "Omni-channel sales platform (SaaS): Playauto system integration"
      },
      scope: {
        ko: ["서버 구축", "API 생성 및 연동", "제품 데이터 크롤링"],
        en: ["Server setup", "API creation and integration", "Product data crawling"]
      },
      mainTasks: {
        ko: ["타겟 플랫폼 구조 분석", "Playauto 시스템과의 API 연동"],
        en: ["Target platform structure analysis", "API integration with Playauto system"]
      }
    }
  },
  {
    id: 8,
    title: {
      ko: "CHUS 베트남 오픈마켓",
      en: "CHUS Vietnam Open Market"
    },
    customer: {
      ko: "CHUS VN",
      en: "CHUS VN"
    },
    related_technology: "AWS, Vue.js, Node.js, Flutter, PHP",
    category: {
      ko: "개발 · 기획 · 웹",
      en: "Development · Planning · Web"
    },
    tags: {
      ko: ["입점몰 구축", "커머스ㆍ쇼핑몰 운영"],
      en: ["Merchant Platform", "Commerce & Shopping Mall Operation"]
    },
    description: {
      ko: "베트남만의 특산품 또는 인기상품 및 베트남 디자이너가 직접 만든 수제 재품 판매 플랫폼",
      en: "A platform for selling Vietnamese specialties, popular products, and handmade items by Vietnamese designers"
    },
    image: "/images/portfolio/portfolios8.png",
    details: {
      intro: {
        ko: "베트남의 특산품과 현지 디자이너의 수제품을 판매하는 오픈마켓 플랫폼입니다.",
        en: "An open market platform selling Vietnamese specialties and handmade products by local designers."
      },
      scope: {
        ko: [
          "기능 정의 및 개발",
          "플랫폼 UI 기획",
          "셀러센터 개발",
          "관리자 페이지 기획 및 개발"
        ],
        en: [
          "Feature definition and development",
          "Platform UI planning",
          "Seller center development",
          "Admin page planning and development"
        ]
      },
      mainTasks: {
        ko: [
          "회원등급제 기능",
          "알고리즘을 통한 서치기능",
          "셀러센터",
          "리뷰",
          "마케팅",
          "multi-warehouse 관리",
          "실시간 배송 정보 확인",
          "베트남 3pl을 통한 결제"
        ],
        en: [
          "Membership system",
          "Algorithm-based search function",
          "Seller center",
          "Review system",
          "Marketing",
          "Multi-warehouse management",
          "Real-time delivery tracking",
          "Payment through Vietnam 3PL"
        ]
      },
      focus: {
        ko: ["셀러들이 원활하게 자신들의 제품을 관리하고 홍보할 수 있게 도와주는 것이 핵심"],
        en: ["Focus on helping sellers efficiently manage and promote their products"]
      }
    }
  },
  {
    id: 9,
    title: {
      ko: "DOSI-IN 베트남 패션 플랫폼",
      en: "DOSI-IN Vietnam Fashion Platform"
    },
    customer: {
      ko: "DOSI-IN",
      en: "DOSI-IN"
    },
    related_technology: "AWS, PHP, Vue.js, Node.js",
    category: {
      ko: "개발 · 디자인 · 기획 · 웹 · 안드로이드 · iOS",
      en: "Development · Design · Planning · Web · Android · iOS"
    },
    tags: {
      ko: ["입점몰 구축", "모바일 커머스", "내부 시스템 연동"],
      en: ["Merchant Platform", "Mobile Commerce", "Internal System Integration"]
    },
    description: {
      ko: "베트남의 OO사로 알려졌던 베트남 패션 플랫폼인 DOSI-IN",
      en: "DOSI-IN, known as Vietnam's fashion platform"
    },
    image: "/images/portfolio/portfolios9.png",
    details: {
      intro: {
        ko: "베트남의 대표적인 패션 플랫폼으로, 500개 이상의 로컬 브랜드와 연계된 종합 패션 커머스 플랫폼입니다.",
        en: "A comprehensive fashion commerce platform in Vietnam, partnering with over 500 local brands."
      },
      scope: {
        ko: [
          "화면 설계",
          "UI/UX 디자인",
          "서버 구축",
          "Front-end 개발",
          "Back-end 개발",
          "관리자 페이지 개발"
        ],
        en: [
          "Screen design",
          "UI/UX design",
          "Server setup",
          "Front-end development",
          "Back-end development",
          "Admin page development"
        ]
      },
      mainTasks: {
        ko: [
          "회원등급제 기능",
          "타사 제품 크롤링 및 전략수립",
          "셀러 센터",
          "500개의 베트남 로컬브랜드와 pos 연동",
          "실시간 배송 정보 확인",
          "3pl과의 API를 통한 결제",
          "200개 이상의 로컬 브랜드 매장 멤버십 프로그램"
        ],
        en: [
          "Membership system",
          "Competitor product crawling and strategy planning",
          "Seller center",
          "POS integration with 500 Vietnamese local brands",
          "Real-time delivery tracking",
          "Payment through 3PL API",
          "Membership program for 200+ local brand stores"
        ]
      }
    }
  },
  {
    id: 10,
    title: {
      ko: "TDI news SDK",
      en: "TDI news SDK"
    },
    customer: {
      ko: "TDI",
      en: "TDI"
    },
    related_technology: "Flutter, Node.js",
    category: {
      ko: "개발 · 기획 · 안드로이드 · iOS",
      en: "Development · Planning · Android · iOS"
    },
    tags: {
      ko: ["스크래핑ㆍAPI"],
      en: ["Scraping · API"]
    },
    description: {
      ko: "다양한 콘텐츠가 필요한 서비스에 SDK 형식으로 탑재되어 콘텐츠를 공급하는 서비스",
      en: "A service that provides content in SDK format for services requiring diverse content"
    },
    image: "/images/portfolio/portfolios10.png",
    details: {
      intro: {
        ko: "개인화된 뉴스와 콘텐츠를 제공하는 SDK 서비스입니다.",
        en: "An SDK service providing personalized news and content."
      },
      scope: {
        ko: [
          "기능 정의 및 개발 방향성 수립",
          "SDK 개발",
          "관리자 페이지 기획 및 개발"
        ],
        en: [
          "Feature definition and development direction",
          "SDK development",
          "Admin page planning and development"
        ]
      },
      mainTasks: {
        ko: [
          "다양한 언론사 크롤링",
          "주식 정보 크롤링",
          "날씨 API 연동"
        ],
        en: [
          "News media crawling",
          "Stock information crawling",
          "Weather API integration"
        ]
      },
      focus: {
        ko: ["개인화 서비스를 위해 개개인의 관심사를 데이터베이스에 저장하고 반영하여 관심사와 유사한 콘텐츠를 공급함"],
        en: ["Providing personalized content by storing and reflecting individual interests in the database"]
      }
    }
  },
  {
    id: 11,
    title: {
      ko: "반품마켓 하이브리드 웹앱",
      en: "Return Market Hybrid Web App"
    },
    customer: {
      ko: "엠포스",
      en: "Empos"
    },
    related_technology: "React Native, React, Vue.js, Java, Flutter, Python",
    category: {
      ko: "개발 · 디자인 · 기획 · 웹 · 안드로이드 · iOS · 기타",
      en: "Development · Design · Planning · Web · Android · iOS · Others"
    },
    tags: {
      ko: ["중개ㆍ매칭 플랫폼", "입점몰 구축", "기타(커머스ㆍ쇼핑몰)"],
      en: ["Matching Platform", "Merchant Platform", "Others(Commerce · Shopping Mall)"]
    },
    description: {
      ko: "리퍼브 매장과 수십만 개의 리퍼브 상품을 모아 검색하고 쇼핑할 수 있는 플랫폼",
      en: "A platform for searching and shopping refurbished products from various stores"
    },
    image: "/images/portfolio/portfolios11.png",
    details: {
      intro: {
        ko: "리퍼브 상품을 저렴한 가격에 소비자에게 판매하고, 파트너의 재고 처리를 도와 환경 보호에도 기여하는 플랫폼입니다.",
        en: "A platform that sells refurbished products at affordable prices while helping partners manage inventory and contributing to environmental protection."
      },
      scope: {
        ko: [
          "화면 설계",
          "UI/UX 디자인",
          "서버 구축",
          "Web/App/Admin 구축",
          "하이브리드 쇼핑몰 구축",
          "입점몰 고도화"
        ],
        en: [
          "Screen design",
          "UI/UX design",
          "Server setup",
          "Web/App/Admin development",
          "Hybrid shopping mall construction",
          "Merchant platform enhancement"
        ]
      },
      mainTasks: {
        ko: [
          "입점사 아이템 전시",
          "크롤링 아이템 전시",
          "주문 관리",
          "슈퍼 관리자 페이지",
          "입점사 관리자 페이지",
          "정산 관리"
        ],
        en: [
          "Merchant item display",
          "Crawled item display",
          "Order management",
          "Super admin page",
          "Merchant admin page",
          "Settlement management"
        ]
      },
      focus: {
        ko: ["리퍼브 상품을 저렴하게 판매하여 소비자 혜택 제공과 동시에 환경 보호에 기여"],
        en: ["Providing consumer benefits through affordable refurbished products while contributing to environmental protection"]
      }
    }
  },
  {
    id: 12,
    title: {
      ko: "아모트래블 홈페이지",
      en: "Amore Travel Website"
    },
    customer: {
      ko: "심플사파리",
      en: "Simple Safari"
    },
    related_technology: "Vue.js, nuxt.js, Node.js, React, MySQL(MariaDB)",
    category: {
      ko: "개발 · 디자인 · 기획 · 웹",
      en: "Development · Design · Planning · Web"
    },
    tags: {
      ko: ["홈페이지ㆍ게시판", "퍼블리싱ㆍ반응형", "기타(웹사이트 구축)"],
      en: ["Homepage & Board", "Publishing & Responsive", "Others(Website Development)"]
    },
    description: {
      ko: "인간의 손길이 닿지 않은 아프리카와 인도 대자연에서 큰 감동, 어드벤처 여행지로 여행을 떠나기 위한 준비부터 여행을 마무리 할때까지 어려움을 해결을 위한 서비스",
      en: "A service to help prepare and complete adventure travels to untouched natural destinations in Africa and India"
    },
    image: "/images/portfolio/portfolios13.png",
    details: {
      intro: {
        ko: "아프리카와 인도의 자연 관광지에 특화된 여행 서비스 플랫폼입니다.",
        en: "A travel service platform specialized in natural tourist destinations in Africa and India."
      },
      scope: {
        ko: [
          "화면 설계",
          "UI/UX 디자인",
          "서버 구축 (Web, Mobile 반응형)",
          "Admin 구축",
          "Frontend: React.js",
          "Backend: Vue.js / Node.js",
          "DB: Mysql"
        ],
        en: [
          "Screen design",
          "UI/UX design",
          "Server setup (Web, Mobile responsive)",
          "Admin setup",
          "Frontend: React.js",
          "Backend: Vue.js / Node.js",
          "DB: Mysql"
        ]
      },
      mainTasks: {
        ko: [
          "여행 상담 신청",
          "여행 상품 전시",
          "여행지 정보 관리",
          "관리자 페이지",
          "상품 등록",
          "여행지 등록",
          "리뷰 관리"
        ],
        en: [
          "Travel consultation requests",
          "Travel product display",
          "Destination information management",
          "Admin page",
          "Product registration",
          "Destination registration",
          "Review management"
        ]
      },
      focus: {
        ko: [
          "고객에게 제공하는 여행 컨텐츠를 자유롭게 생성 및 수정 가능하고, 고객이 여행 패키지 예약시 운영자가 쉽게 확인하고 프로세싱이 빠르고 간편해야 하는것이 프로젝트의 핵심",
          "당사 자체 CMS를 통해 안정적인 비지니스 운영을 가능하게 함"
        ],
        en: [
          "Core focus on easy content management and efficient booking processing",
          "Stable business operation enabled through proprietary CMS"
        ]
      }
    }
  },
  {
    id: 13,
    title: {
      ko: "노란우산 홈페이지 리뉴얼",
      en: "Yellow Umbrella Website Renewal"
    },
    customer: {
      ko: "OO기업중앙회",
      en: "Korea Federation of SMEs"
    },
    related_technology: "Spring Boot, Thymeleaf, Java, MyBatis, MySQL",
    category: {
      ko: "상주 개발 · 디자인 · 기획 · 웹",
      en: "On-site Development · Design · Planning · Web"
    },
    tags: {
      ko: ["업무자동화ㆍRPA", "홈페이지ㆍ게시판", "퍼블리싱ㆍ반응형"],
      en: ["Business Automation · RPA", "Homepage & Board", "Publishing & Responsive"]
    },
    description: {
      ko: "중소기업 소상공인을 위한 노란우산 홈페이지의 리뉴얼",
      en: "Website renewal for Yellow Umbrella, supporting small business owners"
    },
    image: "/images/portfolio/portfolios14.png",
    details: {
      intro: {
        ko: "중소기업 소상공인을 위한 종합 지원 플랫폼 리뉴얼 프로젝트입니다.",
        en: "A comprehensive support platform renewal project for small business owners."
      },
      scope: {
        ko: [
          "화면 설계",
          "UI/UX 디자인",
          "어드민 CMS 설계 및 구축",
          "타임리프, 자바(스프링 부트) 구현"
        ],
        en: [
          "Screen design",
          "UI/UX design",
          "Admin CMS design and implementation",
          "Thymeleaf, Java (Spring Boot) implementation"
        ]
      },
      mainTasks: {
        ko: [
          "레거시(기간계 연동)",
          "관리자 페이지 개발",
          "CMS 신규 개발",
          "기존 데이터 마이그레이션",
          "대출신청",
          "공제금신청",
          "제증명발급",
          "지급예상액"
        ],
        en: [
          "Legacy system integration",
          "Admin page development",
          "New CMS development",
          "Existing data migration",
          "Loan application",
          "Mutual aid application",
          "Certificate issuance",
          "Expected payment calculation"
        ]
      },
      focus: {
        ko: ["레거시 시스템과의 원활한 통합 및 다양한 연령층의 고객을 고려한 세련된 디자인과 정교한 설계"],
        en: ["Smooth integration with legacy systems and sophisticated design considering diverse age groups"]
      }
    }
  },
  {
    id: 14,
    title: {
      ko: "파파 모빌리티 차량 예약",
      en: "Papa Mobility Vehicle Reservation"
    },
    customer: {
      ko: "파파 모빌리티",
      en: "Papa Mobility"
    },
    related_technology: "React, Node.js, PostgreSQL",
    category: {
      ko: "개발 · 웹",
      en: "Development · Web"
    },
    tags: {
      ko: ["예약 시스템", "결제 모듈", "다국어 지원"],
      en: ["Reservation System", "Payment Module", "Multi-language Support"]
    },
    description: {
      ko: "해외 고객 전용 차량 예약 서비스로, 시간 단위 또는 다양한 구간을 거쳐 이동하는 고객들에게 맞춤형 VIP 대전 서비스를 제공",
      en: "A vehicle reservation service for international customers, providing customized VIP transportation services"
    },
    image: "/images/portfolio/portfolios15.png",
    details: {
      intro: {
        ko: "해외 고객을 위한 맞춤형 VIP 차량 예약 서비스 플랫폼입니다.",
        en: "A customized VIP vehicle reservation service platform for international customers."
      },
      scope: {
        ko: [
          "서버 구축",
          "Frontend 개발",
          "Backend 개발",
          "API 개발 및 통합",
          "관리 페이지",
          "차량 예약 시스템 개발",
          "결제 연동",
          "다국어 변환"
        ],
        en: [
          "Server setup",
          "Frontend development",
          "Backend development",
          "API development and integration",
          "Management page",
          "Vehicle reservation system development",
          "Payment integration",
          "Multi-language support"
        ]
      },
      mainTasks: {
        ko: [
          "해외 고객들의 행동 패턴을 이해하고 UI/UX 설계",
          "결제 모듈의 전체 프로세스 설계 및 구축",
          "실제 운영 환경을 반영한 Admin UX"
        ],
        en: [
          "UI/UX design based on international customer behavior patterns",
          "Payment module process design and implementation",
          "Admin UX reflecting actual operational environment"
        ]
      }
    }
  }
];

// 카테고리별 필터 옵션
export const categoryFilters = {
  ko: ["전체", "ERP", "이커머스", "웹", "앱", "시스템 통합"],
  en: ["All", "ERP", "E-commerce", "Web", "App", "System Integration"]
};

// 포트폴리오 ID로 찾기
export function getPortfolioById(id: number): Portfolio | undefined {
  return portfolios.find(p => p.id === id);
}

// 카테고리로 필터링
export function getPortfoliosByCategory(category: string, lang: 'ko' | 'en' = 'ko'): Portfolio[] {
  if (category === '전체' || category === 'All') {
    return portfolios;
  }
  return portfolios.filter(p => p.category[lang].includes(category));
}
