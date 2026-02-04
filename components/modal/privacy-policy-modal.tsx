"use client";
import { Modal } from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl w-[95vw] max-h-[85vh] mx-auto flex flex-col">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-[#0d4f8b] via-[#1a7ab8] to-[#3ecf8e] p-4 sm:p-6 rounded-t-2xl flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">개인정보처리방침</h2>
            <p className="text-xs sm:text-sm text-white/70">2025.04.18 시행</p>
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 min-h-0 p-4 sm:p-6">
        <ScrollArea className="h-[calc(85vh-180px)] sm:h-[calc(85vh-200px)] pr-3">
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <p>
              인테그로 주식회사(이하 &quot;회사&quot; 라고 한다)은 개인정보보호법 제30조에 따라 정보 주체의 개인정보를 보호하고
              이와 관련한 정보를 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을
              수립합니다.
            </p>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제1조 개인정보의 처리 목적</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사가 취급하는 모든 개인정보는 관련 법령에 근거하거나 정보 주체의 동의에 의하여 수집, 보유 및
                  처리되고 있습니다.
                </li>
                <li>
                  ② 회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                  용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제 18 조에 따라 별도의 동의를
                  받는 등 필요한 조치를 이행할 예정입니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      기술 문의 및 상담
                      <ol className="list-[lower-alpha] pl-4 sm:pl-8 mt-1">
                        <li>
                          제품, 솔루션, 기술 지원 및 서비스 문의 등에 따른 고객의 신원 확인, 본인 식별, 문의사항 확인,
                          답변을 위한 연락 및 알림, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제2조 개인정보의 처리 및 보유 기간</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 개인정보 처리는 정보 주체의 동의, 법률 규정 등 일정한 경우에만 개인정보를 수집하며, 개인정보를
                  수집하는 경우에는 그 목적에 필요한 최소한의 정보를 수집합니다. 수집한 개인정보는 수집 목적 범위 안에서
                  이용합니다.
                </li>
                <li>
                  ② 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보 주체로부터 개인정보를 수집 시에 동의 받은
                  개인정보 보유, 이용 기간 내에서 개인정보를 처리 및 보유합니다.
                </li>
                <li>
                  ③ 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      기술 문의 및 상담(개인정보 수집 및 활용)
                      <div className="mt-2 overflow-x-auto">
                        <table className="min-w-full border border-border text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="border border-border p-1 sm:p-2">유형</th>
                              <th className="border border-border p-1 sm:p-2">수집 및 활용 항목</th>
                              <th className="border border-border p-1 sm:p-2">수집 및 활용 목적</th>
                              <th className="border border-border p-1 sm:p-2">활용 및 보유기간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-border p-1 sm:p-2">필수 항목</td>
                              <td className="border border-border p-1 sm:p-2">성명, 이메일, 내용</td>
                              <td className="border border-border p-1 sm:p-2" rowSpan={2}>신원 확인, 본인 식별, 민원 처리 등</td>
                              <td className="border border-border p-1 sm:p-2" rowSpan={2}>접수일로부터 1년</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제3조 개인정보의 제3자 제공</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 정보 주체의 개인정보를 본 개인정보처리방침의 제 2 조에서 명시한 범위 내에서만 처리하며, 정보
                  주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제 17 조에 해당하는 경우에만 개인정보를 제 3 자에게
                  제공합니다.
                </li>
                <li>
                  ② 회사는 정보 주체의 사전 동의 없이는 원칙적으로 이용자의 개인정보를 제 3 자에게 제공하지 않습니다.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제4조 개인정보처리의 위탁</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 고객의 동의 없이 고객의 정보를 외부 업체에 위탁하지 않습니다. 단, 위탁 대상자와 위탁 업무
                  내용에 대해 고객에게 통지하고 사전 동의를 받은 경우 그러하지 아니합니다.
                </li>
                <li>② 개인정보처리의 위탁 업무 내용이 변경될 경우에는 본 개인정보처리방침을 통하여 공개합니다.</li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제5조 정보주체의 권리·의무 및 행사방법</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 정보 주체는 회사에 대해 다음과 같은 각 호의 개인정보보호 관련 권리를 행사할 수 있습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>개인정보 열람요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>
                      삭제 요구
                      <br />
                      단, 정보 주체가 동의한 활용 및 보유기간 동안은 그러하지 아니 합니다.
                    </li>
                    <li>처리정지 요구</li>
                  </ol>
                </li>
                <li>
                  ② 제 5 조①항에 따른 권리 행사는 회사에 대해 서면, 전자문서, 모사전송(FAX) 등을 통하여 하실 수 있으며
                  회사는 이에 대해 조치합니다.
                </li>
                <li>
                  ③ 정보 주체는 개인정보보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보 주체 본인이나, 타인의
                  개인정보 및 사생활을 침해하여서는 아니 됩니다.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제6조 처리하는 개인정보 항목</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 다음의 개인정보 항목을 처리하고 있습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      기술 문의 및 상담
                      <ol className="list-[lower-alpha] pl-4 sm:pl-8 mt-1">
                        <li>필수 항목 : 성명, 이메일, 내용.</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  ② 회사 개인정보처리방침 제 9 조에 의거 인터넷 서비스 이용 과정에서 아래 개인정보 항목이 자동으로
                  생성되어 수집될 수도 있습니다.
                </li>
                <li>
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      IP 주소, 쿠키 MAC 주소, 서비스 이용기록, 방문기록, 불량 이용기록 등.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제7조 개인정보의 파기</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때는 해당 개인정보를
                  파기합니다.
                </li>
                <li>
                  ② 정보 주체로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른
                  법령 및 정보 주체의 동의 등에 따라 개인정보를 계속 보존하여야 하는 경우에는 해당 개인정보를
                  보존합니다.
                </li>
                <li>
                  ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      파기 절차
                      <ol className="list-[lower-alpha] pl-4 sm:pl-8 mt-1">
                        <li>
                          회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보보호 담당자 또는 개인정보보호
                          책임자의 승인을 받아 개인정보를 파기합니다.
                        </li>
                      </ol>
                    </li>
                    <li>
                      파기 방법
                      <ol className="list-[lower-alpha] pl-4 sm:pl-8 mt-1">
                        <li>
                          회사는 데이터베이스에 저장된 개인정보를 기록을 재생할 수 없는 방법에 의하여 디스크에서 완전히
                          삭제하며 추후 열람이나 이용이 불가능한 상태로 파기합니다.
                        </li>
                        <li>
                          회사는 전자적 파일 형태로 기록 저장된 개인정보는 기록을 재생할 수 없도록 로우레벨포맷(Low
                          Level Format) 등의 방법을 이용하며 파기하며, 종이 문서에 기록 저장된 개인정보는 파쇄기로
                          분쇄하거나 소각하여 파기합니다.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제8조 개인정보의 안정성 확보조치</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 개인정보의 안정성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>관리적 조치 : 내부관리계획 수립 및 시행, 정기적 보안 교육 등.</li>
                    <li>
                      기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 고유식별정도 등의 암호화, 보안(백신,
                      Defender 등) 프로그램 설치.
                    </li>
                    <li>물리적 조치 : 해당 업무 부서, 자료 보관실 등의 접근 통제.</li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제9조 개인정보 자동 수집 장치의 설치 운영 및 거부에 관한 사항</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 &quot;쿠키(Cookie)&quot; 등 인터넷 서비스 이용 시 자동 생성되는 개인정보를 수집하는 장치를 운영하지
                  않지만, 홈페이지 등을 운영하는데 있어 해당 서버가 이용자의 컴퓨터로 소량의 &quot;쿠키(Cookie)&quot; 정보가
                  저장될 수도 있으며 이에 이용자는 개인정보 자동 수집 장치에 대해 거부할 권리를 행사할 수 있습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      웹 브라우저(Microsoft Edge 기준) 우측 상단의 [설정] &gt; [쿠키 및 사이트 관리 권한] &gt; [쿠키 및
                      저장된 데이터] 메뉴의 쿠키 차단 설정.
                    </li>
                    <li>
                      웹 브라우저(Chrome 기준) 우측 상단의 [설정] &gt; [개인 정보 보호 및 보안] &gt; [서드 파티 쿠키]
                      메뉴의 서드 파티 쿠키 차단 설정.
                    </li>
                  </ol>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제10조 개인정보보호 책임자</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만 처리
                  및 피해 구제 등을 위하여 아래와 같이 개인정보보호 담당자 및 개인정보보호 책임자를 지정하고 있습니다.
                  <ol className="list-decimal pl-4 sm:pl-8 mt-1 sm:mt-2">
                    <li>
                      개인정보보호 책임자
                      <div className="mt-2 overflow-x-auto">
                        <table className="min-w-full border border-border text-xs sm:text-sm">
                          <tbody>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30 w-16 sm:w-24">부 서</td>
                              <td className="border border-border p-1 sm:p-2">임원실</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30">성 명</td>
                              <td className="border border-border p-1 sm:p-2">신효섭 이사</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30">이 메 일</td>
                              <td className="border border-border p-1 sm:p-2">bobby@integro.work</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>
                      개인정보보호 담당자
                      <div className="mt-2 overflow-x-auto">
                        <table className="min-w-full border border-border text-xs sm:text-sm">
                          <tbody>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30 w-16 sm:w-24">부 서</td>
                              <td className="border border-border p-1 sm:p-2">IT팀</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30">성 명</td>
                              <td className="border border-border p-1 sm:p-2">이광주 PM</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-1 sm:p-2 bg-muted/30">이 메 일</td>
                              <td className="border border-border p-1 sm:p-2">kjlee@integro.work</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ol>
                </li>
                <li>
                  ② 정보주체는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만 처리,
                  피해 구제 등에 관한 사항을 개인정보보호 담당자 또는 개인정보보호 책임자로 문의할 수 있고, 회사는 정보
                  주체의 문의에 대해 답변 및 처리합니다.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제11조 개인정보 열람청구</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 정보 주체는 개인정보보호법 제 35 조에 따른 개인정보의 열람 청구를 회사의 개인정보처리방침 제 10 조에
                  의거 개인정보보호 담당자 또는 개인정보보호 책임자에게 할 수 있습니다. 회사는 정보 주체의 개인정보
                  열람청구가 신속하게 처리되도록 노력하겠습니다.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제12조 권익침해 구제방법</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>
                  ① 정보 주체는 아래의 기관에 대해 개인정보 침해에 대한 피해 구제, 상담 등을 문의할 수 있습니다.
                  <div className="mt-2 overflow-x-auto max-w-full">
                    <table className="min-w-full border border-border text-xs sm:text-sm table-fixed">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-1 sm:p-2 w-[8%]">No.</th>
                          <th className="border border-border p-1 sm:p-2 w-[20%]">기 관</th>
                          <th className="border border-border p-1 sm:p-2 w-[34%]">소 관 업 무</th>
                          <th className="border border-border p-1 sm:p-2 w-[20%]">홈 페 이 지</th>
                          <th className="border border-border p-1 sm:p-2 w-[18%]">전 화</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-1 sm:p-2 text-center">1</td>
                          <td className="border border-border p-1 sm:p-2">
                            개인정보 침해신고센터
                            <br />
                            (한국인터넷진흥원)
                          </td>
                          <td className="border border-border p-1 sm:p-2">
                            개인정보 침해사실 신고,
                            <br />
                            상담신청
                          </td>
                          <td className="border border-border p-1 sm:p-2 break-words">privacy.kisa.or.kr</td>
                          <td className="border border-border p-1 sm:p-2">
                            (국번없이)
                            <br />
                            118
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-1 sm:p-2 text-center">2</td>
                          <td className="border border-border p-1 sm:p-2">
                            개인정보
                            <br />
                            분쟁조정위원회
                          </td>
                          <td className="border border-border p-1 sm:p-2">
                            개인정보 분쟁조정신청,
                            <br />
                            집단분쟁조정(민사적 해결)
                          </td>
                          <td className="border border-border p-1 sm:p-2 break-words">kopico.go.kr</td>
                          <td className="border border-border p-1 sm:p-2">
                            (국번없이)
                            <br />
                            1833-6972
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-1 sm:p-2 text-center">3</td>
                          <td className="border border-border p-1 sm:p-2">
                            대검찰청
                            <br />
                            사이버범죄수사단
                          </td>
                          <td className="border border-border p-1 sm:p-2">
                            사이버범죄 최신 동향 파악,
                            <br />
                            사이버범죄 수사지원
                          </td>
                          <td className="border border-border p-1 sm:p-2 break-words">spo.go.kr</td>
                          <td className="border border-border p-1 sm:p-2">
                            (국번없이)
                            <br />
                            1301
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-1 sm:p-2 text-center">4</td>
                          <td className="border border-border p-1 sm:p-2">
                            경찰청
                            <br />
                            사이버안전지킴이
                          </td>
                          <td className="border border-border p-1 sm:p-2">
                            사이버범죄 신고 및 상담,
                            <br />
                            사이버범죄 예방교육
                          </td>
                          <td className="border border-border p-1 sm:p-2 break-words">police.go.kr</td>
                          <td className="border border-border p-1 sm:p-2">
                            (국번없이)
                            <br />
                            182
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">제13조 개인정보처리방침 변경</h3>
              <ol className="list-none space-y-3 sm:space-y-4">
                <li>① 부칙(시행일) 본 개인정보처리방침은 2025 년 05 월 01 일부터 시행합니다.</li>
              </ol>
            </section>
          </div>
        </ScrollArea>
      </div>
    </Modal>
  );
}
