import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, organization, phone, email, message } = body;

    // 이메일 내용 구성
    const emailContent = `
새로운 문의가 접수되었습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 소속 (회사/기관명): ${organization}
📞 연락처: ${phone}
📧 이메일: ${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 문의 내용:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

접수 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
    `.trim();

    // 실제 프로덕션에서는 여기에 이메일 전송 로직을 구현합니다
    // 예: Nodemailer, SendGrid, AWS SES, Resend 등
    
    // 개발 환경에서는 콘솔에 로그 출력
    console.log('========================================');
    console.log('새로운 문의가 접수되었습니다');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('========================================');
    console.log(emailContent);
    console.log('========================================');

    // TODO: 실제 이메일 전송 구현
    // 예시 (Resend 사용 시):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@integro.work',
    //   to: 'integro@integro.work',
    //   subject: subject,
    //   text: emailContent,
    // });

    return NextResponse.json(
      { success: true, message: '문의가 성공적으로 접수되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
