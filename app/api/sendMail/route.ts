import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
