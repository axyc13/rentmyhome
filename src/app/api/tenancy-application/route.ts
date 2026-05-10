import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";

import {
  FALLBACK_ADMIN_EMAIL,
  getPropertyManagerReferral,
  HAMILTON_OFFICE_EMAIL,
  TENANCY_LOCATIONS,
  type TenancyLocation,
} from "@/src/app/lib/tenancy-routing";

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;
const PAGE_MARGIN = 48;
const BODY_FONT_SIZE = 11;
const SECTION_GAP = 18;
const LINE_GAP = 6;

const truthy = (value: string | null) => value === "true";

const escapeHtml = (value: string | null) =>
  (value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatValue = (value: string | null, fallback = "Not provided") =>
  value && value.trim() ? escapeHtml(value) : fallback;

const pdfValue = (value: string | null, fallback = "Not provided") =>
  value && value.trim() ? value.trim() : fallback;

const normaliseLocation = (
  value: string | null | undefined,
): TenancyLocation | null => {
  if (!value) {
    return null;
  }

  return TENANCY_LOCATIONS.find((location) => location === value) ?? null;
};

const detailRow = (label: string, value: string | null, fallback?: string) => `
  <tr>
    <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border:1px solid #e5e7eb;">${formatValue(value, fallback)}</td>
  </tr>
`;

type PdfSection = {
  title: string;
  rows: Array<{ label: string; value: string }>;
};

type ParsedApplication = {
  contactName: string | null;
  firstApplicantName: string | null;
  email: string | null;
  phone: string | null;
  propertyWishToApply: string | null;
  propertyLocation: TenancyLocation | null;
  currentAddress: string | null;
  idDocumentType: string | null;
  aboutYourself: string | null;
  reasonForLeaving: string | null;
  isFirstTimeRenter: boolean;
  currentLandlordName: string | null;
  currentLandlordEmail: string | null;
  currentLandlordPhone: string | null;
  reference1Name: string | null;
  reference1Phone: string | null;
  reference2Name: string | null;
  reference2Phone: string | null;
  secondApplicantEnabled: boolean;
  secondApplicantName: string | null;
  secondApplicantIdType: string | null;
  thirdApplicantEnabled: boolean;
  thirdApplicantName: string | null;
  thirdApplicantIdType: string | null;
  referralManagerSlug: string | null;
  referralManagerName: string | null;
  submissionPath: string | null;
  consentAccepted: boolean;
  totalApplicants: string | null;
};

function parseApplication(formData: FormData): ParsedApplication {
  const secondApplicantEnabled = truthy(
    formData.get("secondApplicantEnabled") as string | null,
  );
  const thirdApplicantEnabled =
    secondApplicantEnabled &&
    truthy(formData.get("thirdApplicantEnabled") as string | null);
  const referralManagerSlug = formData.get("referralManagerSlug") as
    | string
    | null;
  const referralManager = getPropertyManagerReferral(referralManagerSlug);

  return {
    contactName: formData.get("contactName") as string | null,
    firstApplicantName: formData.get("firstApplicantName") as string | null,
    email: formData.get("email") as string | null,
    phone: formData.get("phone") as string | null,
    propertyWishToApply: formData.get("propertyWishToApply") as string | null,
    propertyLocation: normaliseLocation(
      formData.get("propertyLocation") as string | null,
    ),
    currentAddress: formData.get("currentAddress") as string | null,
    idDocumentType: formData.get("idDocumentType") as string | null,
    aboutYourself: formData.get("aboutYourself") as string | null,
    reasonForLeaving: formData.get("reasonForLeaving") as string | null,
    isFirstTimeRenter: truthy(
      formData.get("isFirstTimeRenter") as string | null,
    ),
    currentLandlordName: formData.get("currentLandlordName") as string | null,
    currentLandlordEmail: formData.get("currentLandlordEmail") as string | null,
    currentLandlordPhone: formData.get("currentLandlordPhone") as string | null,
    reference1Name: formData.get("reference1Name") as string | null,
    reference1Phone: formData.get("reference1Phone") as string | null,
    reference2Name: formData.get("reference2Name") as string | null,
    reference2Phone: formData.get("reference2Phone") as string | null,
    secondApplicantEnabled,
    secondApplicantName: formData.get("secondApplicantName") as string | null,
    secondApplicantIdType: formData.get("secondApplicantIdType") as
      | string
      | null,
    thirdApplicantEnabled,
    thirdApplicantName: formData.get("thirdApplicantName") as string | null,
    thirdApplicantIdType: formData.get("thirdApplicantIdType") as string | null,
    referralManagerSlug: referralManager?.slug ?? null,
    referralManagerName: referralManager?.name ?? null,
    submissionPath: formData.get("submissionPath") as string | null,
    consentAccepted: truthy(formData.get("consentAccepted") as string | null),
    totalApplicants: String(
      1 + Number(secondApplicantEnabled) + Number(thirdApplicantEnabled),
    ),
  };
}

function buildPdfSections(
  application: ParsedApplication,
  attachmentNames: string[],
): PdfSection[] {
  const sections: PdfSection[] = [
    {
      title: "Application Summary",
      rows: [
        {
          label: "Submitted for",
          value: pdfValue(application.propertyWishToApply),
        },
        {
          label: "Property location",
          value: pdfValue(application.propertyLocation, "Not selected"),
        },
        { label: "Primary contact", value: pdfValue(application.contactName) },
        {
          label: "First applicant",
          value: pdfValue(application.firstApplicantName),
        },
        { label: "Email", value: pdfValue(application.email) },
        { label: "Phone", value: pdfValue(application.phone) },
        {
          label: "Total applicants",
          value: pdfValue(application.totalApplicants),
        },
        {
          label: "Consent accepted",
          value: application.consentAccepted ? "Yes" : "No",
        },
        {
          label: "Referred property manager",
          value: pdfValue(application.referralManagerName, "None"),
        },
        {
          label: "Submission path",
          value: pdfValue(application.submissionPath, "Not provided"),
        },
      ],
    },
    {
      title: "Main Applicant",
      rows: [
        {
          label: "Current address",
          value: pdfValue(application.currentAddress),
        },
        {
          label: "ID document type",
          value: pdfValue(application.idDocumentType),
        },
        {
          label: "Brief about yourself",
          value: pdfValue(application.aboutYourself),
        },
        {
          label: "Reason for leaving current address",
          value: pdfValue(application.reasonForLeaving),
        },
      ],
    },
    {
      title: "Rental History",
      rows: [
        {
          label: "First time renter",
          value: application.isFirstTimeRenter ? "Yes" : "No",
        },
        {
          label: "Current landlord or property manager name",
          value: application.isFirstTimeRenter
            ? "First Time Renter"
            : pdfValue(application.currentLandlordName),
        },
        {
          label: "Current landlord or property manager email",
          value: application.isFirstTimeRenter
            ? "Not applicable"
            : pdfValue(application.currentLandlordEmail),
        },
        {
          label: "Current landlord or property manager phone",
          value: application.isFirstTimeRenter
            ? "Not applicable"
            : pdfValue(application.currentLandlordPhone),
        },
      ],
    },
    {
      title: "References",
      rows: [
        {
          label: "Reference 1 name",
          value: pdfValue(application.reference1Name),
        },
        {
          label: "Reference 1 phone",
          value: pdfValue(application.reference1Phone),
        },
        {
          label: "Reference 2 name",
          value: pdfValue(application.reference2Name),
        },
        {
          label: "Reference 2 phone",
          value: pdfValue(application.reference2Phone),
        },
      ],
    },
    {
      title: "Uploaded Files",
      rows: [
        {
          label: "Attached files",
          value:
            attachmentNames.length > 0 ? attachmentNames.join(", ") : "None",
        },
      ],
    },
  ];

  if (application.secondApplicantEnabled) {
    sections.push({
      title: "Second Applicant",
      rows: [
        { label: "Name", value: pdfValue(application.secondApplicantName) },
        {
          label: "ID document type",
          value: pdfValue(application.secondApplicantIdType),
        },
      ],
    });
  }

  if (application.thirdApplicantEnabled) {
    sections.push({
      title: "Third Applicant",
      rows: [
        { label: "Name", value: pdfValue(application.thirdApplicantName) },
        {
          label: "ID document type",
          value: pdfValue(application.thirdApplicantIdType),
        },
      ],
    });
  }

  return sections;
}

function wrapText(
  text: string,
  maxWidth: number,
  fontSize: number,
  font: PDFFont,
) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    const candidateWidth = font.widthOfTextAtSize(candidate, fontSize);

    if (candidateWidth <= maxWidth) {
      currentLine = candidate;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    const wordWidth = font.widthOfTextAtSize(word, fontSize);
    if (wordWidth <= maxWidth) {
      currentLine = word;
      continue;
    }

    let chunk = "";
    for (const char of word) {
      const charCandidate = `${chunk}${char}`;
      if (font.widthOfTextAtSize(charCandidate, fontSize) <= maxWidth) {
        chunk = charCandidate;
      } else {
        if (chunk) {
          lines.push(chunk);
        }
        chunk = char;
      }
    }
    currentLine = chunk;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length > 0 ? lines : [""];
}

async function createApplicationPdf(
  application: ParsedApplication,
  attachmentNames: string[],
) {
  const pdfDoc = await PDFDocument.create();
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const createdOn = new Intl.DateTimeFormat("en-NZ", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Pacific/Auckland",
  }).format(new Date());

  let page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  let y = A4_HEIGHT - PAGE_MARGIN;

  const ensureSpace = (requiredHeight: number) => {
    if (y - requiredHeight < PAGE_MARGIN) {
      page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
      y = A4_HEIGHT - PAGE_MARGIN;
    }
  };

  const drawLines = (
    lines: string[],
    x: number,
    fontSize: number,
    font: PDFFont,
    color = rgb(0.18, 0.18, 0.18),
  ) => {
    const lineHeight = fontSize + LINE_GAP;
    ensureSpace(lines.length * lineHeight);
    for (const line of lines) {
      page.drawText(line, {
        x,
        y,
        size: fontSize,
        font,
        color,
      });
      y -= lineHeight;
    }
  };

  const sections = buildPdfSections(application, attachmentNames);

  page.drawText("Rent My Home - Tenancy Application", {
    x: PAGE_MARGIN,
    y,
    size: 20,
    font: boldFont,
    color: rgb(0.05, 0.2, 0.45),
  });
  y -= 28;

  drawLines(
    [
      `Generated on ${createdOn}`,
      `Applicant email: ${pdfValue(application.email)}`,
      `Property: ${pdfValue(application.propertyWishToApply)}`,
    ],
    PAGE_MARGIN,
    BODY_FONT_SIZE,
    regularFont,
  );
  y -= 6;

  for (const section of sections) {
    ensureSpace(32);
    page.drawText(section.title, {
      x: PAGE_MARGIN,
      y,
      size: 14,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 22;

    for (const row of section.rows) {
      const labelWidth = 170;
      const columnGap = 18;
      const valueWidth = A4_WIDTH - PAGE_MARGIN * 2 - labelWidth - columnGap;
      const labelLines = wrapText(
        `${row.label}:`,
        labelWidth,
        BODY_FONT_SIZE,
        boldFont,
      );
      const valueLines = wrapText(
        row.value,
        valueWidth,
        BODY_FONT_SIZE,
        regularFont,
      );
      const lineHeight = BODY_FONT_SIZE + LINE_GAP;
      const rowLineCount = Math.max(labelLines.length, valueLines.length);
      const requiredHeight = rowLineCount * lineHeight + 4;

      ensureSpace(requiredHeight + 4);

      const rowTopY = y;

      for (let index = 0; index < rowLineCount; index += 1) {
        const lineY = rowTopY - index * lineHeight;

        if (labelLines[index]) {
          page.drawText(labelLines[index], {
            x: PAGE_MARGIN,
            y: lineY,
            size: BODY_FONT_SIZE,
            font: boldFont,
            color: rgb(0.15, 0.15, 0.15),
          });
        }

        if (valueLines[index]) {
          page.drawText(valueLines[index], {
            x: PAGE_MARGIN + labelWidth + columnGap,
            y: lineY,
            size: BODY_FONT_SIZE,
            font: regularFont,
            color: rgb(0.18, 0.18, 0.18),
          });
        }
      }

      y = rowTopY - requiredHeight;
    }

    y -= SECTION_GAP;
  }

  return Buffer.from(await pdfDoc.save());
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const application = parseApplication(formData);

    const attachments: { filename: string; content: Buffer }[] = [];
    for (const [, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        attachments.push({
          filename: value.name,
          content: Buffer.from(await value.arrayBuffer()),
        });
      }
    }

    const attachmentNames = attachments.map(
      (attachment) => attachment.filename,
    );
    const pdfBuffer = await createApplicationPdf(application, attachmentNames);
    const referredManager = getPropertyManagerReferral(
      application.referralManagerSlug,
    );
    const adminRecipient = process.env.EMAIL_USER ?? FALLBACK_ADMIN_EMAIL;
    const notificationRecipients = new Set<string>([adminRecipient]);

    if (application.propertyLocation === "Hamilton") {
      notificationRecipients.add(HAMILTON_OFFICE_EMAIL);
    }

    if (referredManager) {
      notificationRecipients.add(referredManager.email);
    }

    const pdfFilename = `tenancy-application-${
      (application.firstApplicantName ?? application.contactName ?? "applicant")
        .toLowerCase()
        .replaceAll(/[^a-z0-9]+/g, "-")
        .replaceAll(/^-|-$/g, "") || "applicant"
    }.pdf`;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const additionalApplicants = [
      application.secondApplicantEnabled
        ? `
          <h3 style="margin:24px 0 12px;">Second Applicant</h3>
          <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
            ${detailRow("Name", application.secondApplicantName)}
            ${detailRow("ID document type", application.secondApplicantIdType)}
          </table>
        `
        : "",
      application.thirdApplicantEnabled
        ? `
          <h3 style="margin:24px 0 12px;">Third Applicant</h3>
          <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
            ${detailRow("Name", application.thirdApplicantName)}
            ${detailRow("ID document type", application.thirdApplicantIdType)}
          </table>
        `
        : "",
    ]
      .filter(Boolean)
      .join("");

    const adminHtml = `
      <h1 style="margin-bottom:16px;">New Tenancy Application</h1>
      <p style="margin-bottom:20px;">A new tenancy application has been submitted through the website.</p>

      <h2 style="margin:24px 0 12px;">Main Applicant</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
        ${detailRow("Your name", application.contactName)}
        ${detailRow("First applicant name", application.firstApplicantName)}
        ${detailRow("Email", application.email)}
        ${detailRow("Phone", application.phone)}
        ${detailRow("Property applying for", application.propertyWishToApply)}
        ${detailRow("Property location", application.propertyLocation, "Not selected")}
        ${detailRow("Current address", application.currentAddress)}
        ${detailRow("ID document type", application.idDocumentType)}
      </table>

      <h2 style="margin:24px 0 12px;">Application Notes</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
        ${detailRow("Brief about yourself", application.aboutYourself)}
        ${detailRow("Reason for leaving", application.reasonForLeaving)}
        ${detailRow("First time renter", application.isFirstTimeRenter ? "Yes" : "No")}
        ${detailRow("Current landlord or property manager name", application.currentLandlordName, application.isFirstTimeRenter ? "First Time Renter" : "Not provided")}
        ${detailRow("Current landlord or property manager email", application.currentLandlordEmail)}
        ${detailRow("Current landlord or property manager phone", application.currentLandlordPhone)}
      </table>

      <h2 style="margin:24px 0 12px;">References</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
        ${detailRow("Reference 1 name", application.reference1Name)}
        ${detailRow("Reference 1 phone", application.reference1Phone)}
        ${detailRow("Reference 2 name", application.reference2Name)}
        ${detailRow("Reference 2 phone", application.reference2Phone)}
      </table>

      <h2 style="margin:24px 0 12px;">Application Summary</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
        ${detailRow("Submission path", application.submissionPath)}
        ${detailRow("Referred property manager", referredManager?.name ?? application.referralManagerName, "None")}
        ${detailRow("Total applicants", application.totalApplicants)}
        ${detailRow("Consent accepted", application.consentAccepted ? "Yes" : "No")}
        ${detailRow("Supporting files attached", String(attachments.length))}
        ${detailRow("Notification recipients", Array.from(notificationRecipients).join(", "))}
        ${detailRow("PDF summary attached", pdfFilename)}
      </table>

      ${additionalApplicants}

      <p style="margin-top:24px;">Please reply to this email to contact the applicant directly.</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: Array.from(notificationRecipients).join(", "),
      replyTo: application.email ?? undefined,
      subject: `New Tenancy Application - ${application.firstApplicantName ?? "Website Form"}`,
      html: adminHtml,
      attachments: [
        ...attachments,
        {
          filename: pdfFilename,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    if (application.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: application.email,
        subject: "Your Tenancy Application PDF",
        html: `
          <h1 style="margin-bottom:16px;">Your Tenancy Application</h1>
          <p>Thanks for applying with Rent My Home.</p>
          <p>Your completed application summary is attached as a PDF for your records.</p>
          <p>If you need to update anything, simply reply to this email.</p>
        `,
        attachments: [
          {
            filename: pdfFilename,
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      });
    }

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
