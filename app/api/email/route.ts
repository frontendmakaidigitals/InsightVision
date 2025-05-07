export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    console.log("Request received with body:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "frontendmakaidigitals@gmail.com",
        pass: "zcmjwxysvzkhsdaf", // <-- Make sure this is the correct app password, no spaces
      },
      tls: {
        rejectUnauthorized: false, // <--- this line fixes the "self-signed certificate" error
      },
    });

    console.log("Transporter created");

    const mailOptions = {
      from: "frontendmakaidigitals@gmail.com",
      to: "info@insightvision.marketing",
      subject: `Test Email`,
      text: `This is a test email.`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("ERROR:", error);
    return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
