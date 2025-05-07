export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req: Request): Promise<Response> {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Enquiry received from Insight Vision Website Contact Form

      Name: ${firstName} ${lastName}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
