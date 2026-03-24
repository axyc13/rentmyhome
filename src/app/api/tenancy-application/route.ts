import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("application_") && value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
        });
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "anuj@acuberentals.com",
      replyTo: email,
      subject: "New Tenancy Application",
      html: `
        <h2>New Tenancy Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>The completed application form is attached to this email.</p>
        <p>Please reply to this email to contact the applicant directly.</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
