import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, position, availability, message } = data;

    if (!name || !email || !phone || !position || !availability) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <h2>New Employment Application: ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Availability:</strong> ${availability}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided."}</p>
    `;

    // The PRD specifically asks to send emails to info@daysicecreamshop.com.
    const destinationEmail = process.env.CONTACT_EMAIL_TO || "info@daysicecreamshop.com";

    const reqData = await resend.emails.send({
      from: "Employment Application <onboarding@resend.dev>", // We use resend dev domain by default
      to: [destinationEmail],
      subject: `New Job Application: ${name} (${position})`,
      html: htmlContent,
      replyTo: email,
    });

    if (reqData.error) {
      return NextResponse.json({ error: reqData.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Application sent successfully" });
  } catch (error) {
    console.error("Employment form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
