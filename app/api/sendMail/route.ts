import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1️⃣ Verify reCAPTCHA token
    const token = body.recaptchaToken;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // 2️⃣ Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // 3️⃣ Mail content
    const mailOptions = {
      from: `"Studio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "📸 New Booking Request",
      html: `
        <h2>New Booking Request</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Service:</b> ${body.service}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Preferred Date:</b> ${body.date}</p>
        <p><b>Location:</b> ${body.location}</p>
        <p><b>Budget:</b> ${body.budget}</p>
        <p><b>Requirements:</b> ${body.requirements}</p>
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
