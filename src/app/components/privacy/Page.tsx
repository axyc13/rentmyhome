const sidebarLinks = [
  { href: "#collection", label: "Information We Collect" },
  { href: "#usage", label: "How We Use Information" },
  { href: "#storage", label: "Data Storage & Security" },
  { href: "#sharing", label: "Information Sharing" },
  { href: "#cookies", label: "Cookies & Website Tracking" },
  { href: "#rights", label: "Your Rights" },
  { href: "#updates", label: "Policy Updates" },
  { href: "#contact-info", label: "Contact Information" },
];

function PolicyBox({
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

export default function PrivacyPage() {
  return (
    <section className="bg-white py-25">
      <div className="mx-auto w-[90%] max-w-312.5">
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

            <PolicyBox id="collection" title="Information We Collect">
              <P>
                When you interact with Rent My Home through our website, forms,
                email enquiries, phone calls, or property management services,
                we may collect personal information relevant to providing support
                and communication.
              </P>
              <P>
                This information may include your name, phone number, email
                address, property details, tenancy information, or other
                information voluntarily submitted to us.
              </P>
              <UL
                items={[
                  "Contact information submitted through enquiry forms.",
                  "Property-related details provided for appraisals or management services.",
                  "Communication records between users and our team.",
                  "Basic website usage information through analytics tools.",
                ]}
              />
            </PolicyBox>

            <PolicyBox id="usage" title="How We Use Information">
              <P>
                Rent My Home uses collected information to improve communication,
                provide property management services, respond to enquiries, and
                deliver a better overall user experience.
              </P>
              <P>
                We may also use information to send updates regarding services,
                maintenance coordination, landlord support, tenancy matters, or
                important company announcements.
              </P>
              <P>
                We only collect information necessary for legitimate business
                purposes and never request unnecessary personal details.
              </P>
            </PolicyBox>

            <PolicyBox id="storage" title="Data Storage & Security">
              <P>
                We take reasonable steps to protect your personal information
                against unauthorized access, misuse, disclosure, or loss.
              </P>
              <P>
                Information is stored securely using trusted digital systems and
                internal operational processes designed to maintain
                confidentiality and security standards.
              </P>
              <P>
                While we work hard to protect your information, no online
                platform or digital transmission can be guaranteed to be
                completely secure at all times.
              </P>
            </PolicyBox>

            <PolicyBox id="sharing" title="Information Sharing">
              <P>
                Rent My Home does not sell, rent, or trade personal information
                to third parties for marketing purposes.
              </P>
              <P>
                In certain situations, information may be shared with trusted
                service providers, maintenance contractors, legal advisors, or
                regulatory authorities where necessary to provide services or
                comply with legal obligations.
              </P>
              <UL
                items={[
                  "Maintenance coordination and contractor communication.",
                  "Tenancy-related processing and compliance requirements.",
                  "Professional advisors assisting with operational matters.",
                  "Legal or regulatory obligations under New Zealand law.",
                ]}
              />
            </PolicyBox>

            <PolicyBox id="cookies" title="Cookies & Website Tracking">
              <P>
                Our website may use cookies or analytics tools to improve
                website functionality, monitor traffic, and understand how users
                interact with our content.
              </P>
              <P>
                Cookies help improve browsing performance and provide insights
                that allow us to continue improving the user experience.
              </P>
              <P>
                Users can disable cookies through their browser settings if
                preferred, although some website features may not function
                correctly afterward.
              </P>
            </PolicyBox>

            <PolicyBox id="rights" title="Your Rights">
              <P>
                You have the right to request access to the personal information
                we hold about you and request corrections where necessary.
              </P>
              <P>
                If you would like to update, correct, or remove information from
                our records, you may contact our team directly using the details
                provided below.
              </P>
              <P>
                We aim to respond to all reasonable privacy-related requests
                promptly and professionally.
              </P>
            </PolicyBox>

            <PolicyBox id="updates" title="Policy Updates">
              <P>
                Rent My Home may update this Privacy Policy periodically to
                reflect operational, legal, or regulatory changes.
              </P>
              <P>
                Any updates published on this page become effective immediately
                upon posting. Users are encouraged to review this page regularly
                to remain informed about how information is managed.
              </P>
            </PolicyBox>

            <PolicyBox id="contact-info" title="Contact Information" last>
              <P>
                If you have any questions regarding this Privacy Policy or how
                your information is handled, you can contact our team directly.
              </P>
              <UL
                items={[
                  "Email: info@rentmyhome.co.nz",
                  "Phone: +64 22 453 0098",
                  "Location: Auckland & Waikato, New Zealand",
                ]}
              />
            </PolicyBox>

          </div>
        </div>
      </div>
    </section>
  );
}
