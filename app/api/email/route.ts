import nodemailer from "nodemailer";

export async function POST(req: Request): Promise<Response> {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "frontendmakaidigitals@gmail.com",
        pass: "zcmj wxys vzkh hron",
      },
    });

    const mailOptions = {
      from: "frontendmakaidigitals@gmail.com",
      to: "info@insightvision.marketing",
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
