import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Check if RESEND_API_KEY is configured
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Define types for email parameters
interface EmailParams {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}

// For development testing when RESEND_API_KEY is not available
const mockSendEmail = async (params: EmailParams) => {
  console.log('MOCK EMAIL SENT:', params);
  return {
    data: {
      id: 'mock-email-id',
      from: params.from,
      to: params.to,
      subject: params.subject,
    },
    error: null,
  };
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, formData } = body;

    const { name, lastname, email, whatsapp, company, message, terms } = formData;

    const html = `
      <h1>Novo contato do site Taller</h1>
      <p><strong>Nome:</strong> ${name} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
      <p><strong>Aceita receber comunicações:</strong> ${terms ? 'Sim' : 'Não'}</p>
    `;

    let data, error;

    // Use mock implementation if Resend API key is not available
    if (!resend) {
      console.log('Using mock email implementation because RESEND_API_KEY is not set');
      const result = await mockSendEmail({
        from: 'Contato Site <onboarding@resend.dev>',
        to: [to],
        subject: subject,
        html: html,
        reply_to: email,
      });
      data = result.data;
      error = result.error;
    } else {
      const result = await resend.emails.send({
        from: 'Contato Site <onboarding@resend.dev>',
        to: [to],
        subject: subject,
        html: html,
        reply_to: email,
      });
      data = result.data;
      error = result.error;
    }

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}