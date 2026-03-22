import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const destinationEmail = process.env.CONTACT_EMAIL_TO || "info@daysicecreamshop.com";

    const reqData = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [destinationEmail],
      subject: `New Message from ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (reqData.error) {
      return NextResponse.json({ error: reqData.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Contact message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
