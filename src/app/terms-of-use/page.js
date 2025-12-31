import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

/**
 * ✅ OPTIMIZATION: Comprehensive metadata for SEO and social sharing
 * - Complete OpenGraph configuration
 * - Twitter card metadata
 * - Proper canonical URL
 * - Robots directives for indexing
 */
export const metadata = {
  title: "Remitout - Privacy Policy",
  description:
    "Learn how Remitout collects, uses, and protects your data when using our education loan, admission, and remittance services.",
  alternates: { canonical: "https://loan.remitout.com/privacy-policy" },
  openGraph: {
    title: "Remitout - Privacy Policy",
    description:
      "Learn how Remitout collects, uses, and protects your personal information when using Remitout services.",
    url: "https://loan.remitout.com/privacy-policy",
    siteName: "Remitout",
    type: "website",
    images: [
      {
        url: "https://loan.remitout.com/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Remitout Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remitout - Privacy Policy",
    description:
      "Learn how Remitout collects, uses, and protects your personal information.",
  },
  // ✅ OPTIMIZATION: Robots meta for proper search engine indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/**
 * ✅ OPTIMIZATION: Privacy Policy page component
 * - Semantic HTML structure for better SEO
 * - Proper heading hierarchy (h1 > h2)
 * - ARIA labels for accessibility
 * - Organized sections for better readability
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ✅ OPTIMIZATION: Navigation component - critical UI element */}
      <Navbar />

      {/* ✅ OPTIMIZATION: Main content with semantic markup */}
      <main
        className="max-w-4xl mx-auto px-6 py-12"
        role="main"
        aria-label="Privacy Policy Content"
      >
        {/* ✅ OPTIMIZATION: Single H1 tag for SEO */}
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        {/* ✅ OPTIMIZATION: Content container with optimized spacing */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* ✅ OPTIMIZATION: Introduction section */}
          {/* <section aria-labelledby="introduction">
            <p>
              Remitout Service Private Limited (&quot;Remitout&quot;,
              &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{" "}
              <strong>www.remitout.com</strong> (the &quot;Website&quot;,
              &quot;Platform&quot;, or &quot;Service&quot;). 
            </p>
            <p>
              This Privacy Policy describes how we collect, use, disclose, and
              protect your personal data when you submit information for student
              international money transfers, education loans, overseas
              university/college admissions, and visa application assistance.
            </p>
            <p>
              By using our Website or providing your information, you
              acknowledge that you have read, understood, and agree to the terms
              of this Privacy Policy. If you do not agree, you must not use this
              Website.
            </p>
          </section> */}

          {/* ✅ OPTIMIZATION: Section 1 - Our Role */}
          {/* <section aria-labelledby="our-role">
            <h2 id="our-role" className="text-xl font-semibold mt-8">
              1. Our Role
            </h2>
            <p>
              Remitout acts as a lead-generation and facilitation platform
              connecting students and users with authorized partners (such as
              educational consultants, universities, financial institutions, and
              visa service providers).
            </p>
            <p>
              We do not directly provide education loans, money transfer
              services, or visa filing services – we only connect you with
              partners who are authorized to deliver such services. We are not
              responsible for the quality, accuracy, timelines, pricing,
              approvals, or outcomes of services provided by such partners.
            </p>
          </section> */}

          {/* ✅ OPTIMIZATION: Section 2 - Information Collection */}
          <section aria-labelledby="info-collection">
            <h2 id="info-collection" className="text-xl font-semibold mt-8">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2" role="list">
              <li>
                <strong>Identity and Contact Data</strong> – Name, email
                address, phone number, gender, date of birth, postal address
              </li>
              <li>
                <strong>Education Data</strong> – Current course, school/college
                name, grades, test scores, intended study destination
              </li>
              <li>
                <strong>Financial Data</strong> – Annual income, bank details
                (if needed for loan assessment), co-applicant/parent income data
              </li>
              <li>
                <strong>Identification Data</strong> – Aadhaar/PAN details,
                passport number, visa details, copies of documents (only when
                necessary)
              </li>
              <li>
                <strong>Technical Data</strong> – IP address, device/browser
                type, operating system, referrer URL, cookies, analytics data
              </li>
              <li>
                <strong>Communication Data</strong> – Chat history, emails,
                WhatsApp messages, feedback forms, support tickets
              </li>
            </ul>
            <p className="mt-4">
              We collect only the minimum data required to serve the stated
              purposes.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 3 - Data Collection Methods */}
          <section aria-labelledby="collection-methods">
            <h2 id="collection-methods" className="text-xl font-semibold mt-8">
              3. How We Collect Data
            </h2>
            <ul className="list-disc pl-6 space-y-2" role="list">
              <li>
                <strong>Directly from you</strong> – When you fill out forms,
                upload documents, or contact us
              </li>
              <li>
                <strong>Automatically</strong> – Through cookies, tracking
                pixels, analytics tools
              </li>
              <li>
                <strong>From third parties</strong> – Referral partners or
                advertising networks (where you have consented)
              </li>
            </ul>
          </section>

          {/* ✅ OPTIMIZATION: Section 4 - Purpose */}
          <section aria-labelledby="purpose">
            <h2 id="purpose" className="text-xl font-semibold mt-8">
              4. Purpose of Data Processing
            </h2>
            <p>We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2" role="list">
              <li>To connect you with appropriate service providers</li>
              <li>To facilitate education loan, forex, and visa services</li>
              <li>To improve our Website, products, and services</li>
              <li>For customer support and responding to inquiries</li>
              <li>For compliance with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* ✅ OPTIMIZATION: Section 5 - Data Sharing */}
          <section aria-labelledby="data-sharing">
            <h2 id="data-sharing" className="text-xl font-semibold mt-8">
              5. Data Sharing and Disclosure
            </h2>
            <p>
              We may share your data with our verified partners (universities,
              consultants, financial institutions, visa service providers) only
              when necessary to provide the requested service. We do not sell or
              rent your personal data to third parties for marketing purposes.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 6 - Retention */}
          <section aria-labelledby="retention">
            <h2 id="retention" className="text-xl font-semibold mt-8">
              6. Data Retention
            </h2>
            <p>
              We retain your personal data only as long as necessary for the
              purposes described in this policy, unless a longer retention
              period is required by law.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 7 - User Rights */}
          {/* <section aria-labelledby="rights">
            <h2 id="rights" className="text-xl font-semibold mt-8">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2" role="list">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Withdraw your consent at any time</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section> */}

          {/* ✅ OPTIMIZATION: Section 8 - Security */}
          <section aria-labelledby="security">
            <h2 id="security" className="text-xl font-semibold mt-8">
              8. Data Security
            </h2>
            <p>
              We implement industry-standard security measures including
              encryption, secure servers, and access controls to protect your
              personal data. However, no online transmission or storage method
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 9 - International Transfers */}
          <section aria-labelledby="transfers">
            <h2 id="transfers" className="text-xl font-semibold mt-8">
              9. International Data Transfers
            </h2>
            <p>
              Your data may be transferred to and stored in servers located
              outside India. In such cases, we ensure that adequate data
              protection measures are in place as per applicable law.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 10 - Third-Party Links */}
          <section aria-labelledby="third-party-links">
            <h2 id="third-party-links" className="text-xl font-semibold mt-8">
              10. Third-Party Links
            </h2>
            <p>
              Our Website may contain links to third-party sites. We are not
              responsible for the privacy practices or content of such sites. We
              encourage you to read their privacy policies.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 11 - Cookies */}
          <section aria-labelledby="cookies">
            <h2 id="cookies" className="text-xl font-semibold mt-8">
              11. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance user
              experience, analyze traffic, and improve our services. You can
              control cookie settings through your browser.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 12 - Policy Changes */}
          {/* <section aria-labelledby="changes">
            <h2 id="changes" className="text-xl font-semibold mt-8">
              12. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a revised "Last Updated"
              date. Please check periodically for updates.
            </p>
          </section> */}

          {/* ✅ OPTIMIZATION: Section 13 - Contact */}
          <section aria-labelledby="contact-us">
            <h2 id="contact-us" className="text-xl font-semibold mt-8">
              13. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us at:
            </p>
            <address className="not-italic mt-2">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@remitout.com"
                  className="text-blue-600 hover:underline"
                >
                  support@remitout.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+918454999327"
                  className="text-blue-600 hover:underline"
                >
                  +91 8454999327
                </a>
              </p>
              <p>
                <strong>Address:</strong> Remitout Service Pvt. Ltd, Mumbai,
                Maharashtra, India
              </p>
            </address>
          </section>

          {/* ✅ OPTIMIZATION: Section 14 - Liability */}
          <section aria-labelledby="liability">
            <h2 id="liability" className="text-xl font-semibold mt-8">
              14. Limitation of Liability & Indemnity
            </h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2" role="list">
              <li>
                Remitout disclaims liability for direct, indirect, incidental,
                or consequential damages resulting from partner actions, service
                quality, or third-party data breaches.
              </li>
              <li>
                You agree to indemnify and hold Remitout harmless from any
                claims, damages, or legal proceedings arising from your use of
                our Website, your data submissions, or your engagement with
                partner services.
              </li>
            </ul>
          </section>

          {/* ✅ OPTIMIZATION: Section 15 - Governing Law */}
          <section aria-labelledby="governing-law">
            <h2 id="governing-law" className="text-xl font-semibold mt-8">
              15. Governing Law & Jurisdiction
            </h2>
            <p>
              This Privacy Policy is governed by and construed under the laws of
              India. Any disputes shall be subject to the exclusive jurisdiction
              of the courts of Mumbai, Maharashtra, India.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 16 - Grievance */}
          <section aria-labelledby="grievance">
            <h2 id="grievance" className="text-xl font-semibold mt-8">
              16. Contact & Grievance Redressal
            </h2>
            <p>For any questions, complaints, or concerns, contact:</p>
            <address className="not-italic mt-2">
              <p>
                <strong>Remitout Service Private Limited</strong>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.remitout.com"
                  className="text-blue-600 hover:underline"
                >
                  www.remitout.com
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@remitout.com"
                  className="text-blue-600 hover:underline"
                >
                  support@remitout.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918454999327"
                  className="text-blue-600 hover:underline"
                >
                  +91 8454999327
                </a>
              </p>
            </address>
            <p className="mt-2">
              We will acknowledge your request within 24 hours and respond in
              line with applicable legal requirements.
            </p>
          </section>

          {/* ✅ OPTIMIZATION: Section 17 - Updates */}
          {/* <section aria-labelledby="updates">
            <h2 id="updates" className="text-xl font-semibold mt-8">
              17. Policy Updates
            </h2>
            <p>
              We may revise this Privacy Policy periodically. The updated
              version will be posted here with a revised "Last Updated" date.
              Material changes may be communicated by email or website
              notification.
            </p>
          </section> */}
        </div>
      </main>

      {/* ✅ OPTIMIZATION: Footer loaded last */}
      <Footer />
    </>
  );
}

/**
 * PERFORMANCE OPTIMIZATION NOTES:
 *
 * 1. ✅ Static content - perfect for Static Site Generation (SSG)
 * 2. ✅ Semantic HTML with sections for better structure
 * 3. ✅ ARIA labels for accessibility compliance
 * 4. ✅ Proper heading hierarchy for SEO
 * 5. ✅ Dark mode support with conditional text colors
 * 6. ✅ Clickable contact links for better UX
 * 7. ✅ Address tags for semantic contact information
 * 8. ✅ ID attributes on headings for anchor linking
 */
