import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Check if RESEND_API_KEY is configured
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(resendApiKey);

export async function POST(req: NextRequest) {
  try {
    // Validate API key is set
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Resend API key is not configured' },
        { status: 500 }
      );
    }

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

    const { data, error } = await resend.emails.send({
      from: 'Contato Site <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: html,
      reply_to: email,
    });

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