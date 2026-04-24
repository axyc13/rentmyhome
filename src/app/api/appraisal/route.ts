import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract fields
    const address = formData.get("address") as string;
    const suburb = formData.get("suburb") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const bathrooms = formData.get("bathrooms") as string;
    const parking = formData.get("parking") as string;
    const propertyType = formData.get("propertyType") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("photo_") && value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
        });
      }
    }

    const suburbToEmail: Record<string, string> = {
      auckland: "admin@acuberentals.com",
      waikato: "receptionauck@rentmyhome.co.nz",
    };

    const companyEmail = suburbToEmail[suburb] ?? "admin@acuberentals.com";

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: companyEmail,
      replyTo: email,
      subject: "New Appraisal Request",
      html: `
        <h1>New Appraisal Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${suburb}</p>
        <p><strong>Bedrooms:</strong> ${bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${bathrooms}</p>
        <p><strong>Parking:</strong> ${parking}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p>Please reply to this email to contact the requester directly. Thanks.</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
