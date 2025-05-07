import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_6GLFhiTf_3javH3x77xZTr6qutop8Z1LS'); // Your Resend API key here

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();
    console.log("Received data:", { firstName, lastName, phone, email, message });
    // Send the email using Resend
    const emailElement = await resend.emails.send({
      from: 'frontendmakaidigitals@gmail.com', // your email
      to: 'info@insightvision.marketing', // recipient email
      subject: `New Contact from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    });

    console.log('Email sent:', emailElement);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
