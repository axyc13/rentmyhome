import React from "react";

const sidebarLinks = [
  { href: "#acceptance", label: "Acceptance Of Terms" },
  { href: "#website-use", label: "Website Use" },
  { href: "#information", label: "Information Accuracy" },
  { href: "#intellectual", label: "Intellectual Property" },
  { href: "#liability", label: "Limitation Of Liability" },
  { href: "#privacy", label: "Privacy & Data" },
  { href: "#changes", label: "Changes To Terms" },
  { href: "#contact-info", label: "Contact Information" },
];

function TermBox({
  id,
  title,
  children,
  last = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      id={id}
      className={`mb-17.5 pb-11.25 scroll-mt-32 ${last ? "" : "border-b border-[#eee]"}`}
    >
      <h2 className="font-serif font-bold text-[30px] sm:text-[40px] leading-[1.2] mb-5.5">
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#555] leading-loose text-[17px] mb-5">{children}</p>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="pl-5 mt-5 list-disc">
      {items.map((item) => (
        <li key={item} className="mb-4 leading-[1.9] text-[#555] text-[17px]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <section className="bg-white py-30">
      <div className="mx-auto w-[90%] max-w-325">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-15 items-start">

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-30 bg-[#f7f7f7] p-8.75 rounded-3xl">
            <h3 className="font-serif font-bold text-2xl mb-6.25">
              Quick Navigation
            </h3>
            {sidebarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[#555] font-medium mb-4.5 transition-all hover:text-red hover:pl-1.25"
              >
                {link.label}
              </a>
            ))}
          </aside>

          {/* Content */}
          <div className="pt-2.5">

            <TermBox id="acceptance" title="Acceptance Of Terms">
              <P>
                By accessing and using the Rent My Home website, you acknowledge
                that you have read, understood, and agreed to these Terms of
                Use. These terms apply to all visitors, landlords, tenants,
                clients, and anyone interacting with our online platforms.
              </P>
              <P>
                If you do not agree with any part of these terms, you should
                discontinue the use of this website immediately.
              </P>
            </TermBox>

            <TermBox id="website-use" title="Website Use">
              <P>
                The content provided on this website is intended for general
                informational purposes relating to property management services
                across Auckland and Waikato.
              </P>
              <P>
                You agree not to misuse this website, attempt unauthorized
                access, distribute harmful software, or use any content in a
                way that could damage Rent My Home&apos;s reputation or
                operations.
              </P>
              <UL
                items={[
                  "Do not copy website content for commercial purposes without written permission.",
                  "Do not attempt to interfere with website security or functionality.",
                  "Do not submit false or misleading information through forms or enquiries.",
                ]}
              />
            </TermBox>

            <TermBox id="information" title="Information Accuracy">
              <P>
                Rent My Home aims to ensure all information published on this
                website is accurate, updated, and reliable. However, we cannot
                guarantee that all content will always remain completely
                error-free or current at all times.
              </P>
              <P>
                Property market conditions, rental regulations, compliance
                standards, and pricing may change without notice. Users are
                encouraged to contact our team directly for the latest
                information regarding services and property management guidance.
              </P>
            </TermBox>

            <TermBox id="intellectual" title="Intellectual Property">
              <P>
                All website content including text, branding, graphics, logos,
                images, designs, blog articles, and layout elements are the
                property of Rent My Home unless otherwise stated.
              </P>
              <P>
                You may not reproduce, republish, modify, distribute, or
                commercially use any content without prior written approval from
                Rent My Home.
              </P>
            </TermBox>

            <TermBox id="liability" title="Limitation Of Liability">
              <P>
                While we strive to provide reliable and professional
                information, Rent My Home is not liable for any direct,
                indirect, incidental, or consequential damages arising from the
                use of this website or reliance on any content published within
                it.
              </P>
              <P>
                Users are responsible for independently verifying any
                information before making property, financial, or investment
                decisions.
              </P>
            </TermBox>

            <TermBox id="privacy" title="Privacy & Data Collection">
              <P>
                Any personal information submitted through enquiry forms,
                appraisal requests, or communication channels may be collected
                and stored for service-related purposes.
              </P>
              <P>
                Rent My Home respects user privacy and handles information
                responsibly in accordance with applicable New Zealand privacy
                standards.
              </P>
              <P>
                We do not sell personal information to third parties and only
                use submitted information to improve communication, provide
                requested services, and respond to enquiries.
              </P>
            </TermBox>

            <TermBox id="changes" title="Changes To Terms">
              <P>
                Rent My Home reserves the right to modify, update, or replace
                these Terms of Use at any time without prior notice.
              </P>
              <P>
                By continuing to use the website after updates are published,
                users automatically accept the revised terms and conditions.
              </P>
            </TermBox>

            <TermBox id="contact-info" title="Contact Information" last>
              <P>
                If you have any questions regarding these Terms of Use, you can
                contact the Rent My Home team directly.
              </P>
              <UL
                items={[
                  "Email: info@rentmyhome.co.nz",
                  "Phone: +64 22 453 0098",
                  "Location: Auckland & Waikato, New Zealand",
                ]}
              />
            </TermBox>

          </div>
        </div>
      </div>
    </section>
  );
}
