// LayoutClient.jsx - Fully Corrected Static Version

// Configuration - Replace these with your actual IDs
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Your Google Analytics 4 ID
const GOOGLE_ADS_ID = "AW-XXXXXXXXXX"; // Your Google Ads ID

// Static SEO Configuration - Replace with your actual data
const SEO_CONFIG = {
  metaTitle: "Remitout - Education Loan Services | Study Abroad Financing",
  metaDescription: "Get the best education loan services with Remitout. Fast approval, competitive rates, and expert guidance for your study abroad dreams. Apply now!",
  canonicalUrl: "https://loan.remitout.com",
  ogTitle: "Remitout - Education Loan Services",
  ogDescription: "Get the best education loan services with Remitout. Fast approval, competitive rates, and expert guidance for your study abroad dreams.",
  ogImageUrl: "https://loan.remitout.com/og-image.jpg",
  ogUrl: "https://loan.remitout.com",
  twitterCard: "summary_large_image"
};

export default function LayoutClient() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{SEO_CONFIG.metaTitle}</title>
      <meta name="description" content={SEO_CONFIG.metaDescription} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={SEO_CONFIG.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={SEO_CONFIG.ogTitle} />
      <meta property="og:description" content={SEO_CONFIG.ogDescription} />
      <meta property="og:image" content={SEO_CONFIG.ogImageUrl} />
      <meta property="og:url" content={SEO_CONFIG.ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={SEO_CONFIG.twitterCard} />
      <meta name="twitter:title" content={SEO_CONFIG.ogTitle} />
      <meta name="twitter:description" content={SEO_CONFIG.ogDescription} />
      <meta name="twitter:image" content={SEO_CONFIG.ogImageUrl} />
      
      {/* Sitemap */}
      <link
        rel="sitemap"
        type="application/xml"
        href="https://loan.remitout.com/sitemap.xml"
      />

      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            id="ga4-init"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { 
                  send_page_view: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `
            }}
          />
        </>
      )}

      {/* Google Ads */}
      {GOOGLE_ADS_ID && GOOGLE_ADS_ID !== "AW-XXXXXXXXXX" && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          />
          <script
            id="google-ads-init"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `
            }}
          />
        </>
      )}

      {/* Organization Schema */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Remitout",
            "url": "https://loan.remitout.com",
            "logo": "https://loan.remitout.com/logo1.svg",
            "description": "Leading education loan provider helping students achieve their study abroad dreams with competitive rates and fast approvals.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9819176629",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "sameAs": [
              "https://facebook.com/remitout",
              "https://instagram.com/remitout"
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer education loans without collateral?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – we arrange unsecured education loans for eligible applicants. Check your eligibility to see available options."
                }
              },
              {
                "@type": "Question",
                "name": "How long does loan approval take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typical processing time is 3–7 business days once documents are submitted and verification is complete."
                }
              },
              {
                "@type": "Question",
                "name": "What is the interest rate for education loans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Interest rates vary based on the loan amount, lender, and applicant profile. We work with multiple lenders to get you the best rates. Contact us for personalized rate quotes."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a loan for studying abroad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide education loans for both domestic and international studies at recognized institutions worldwide. We cover tuition fees, living expenses, and other related costs."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for an education loan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically required documents include: admission letter, academic records, identity proof, address proof, income proof of co-applicant, and bank statements. Specific requirements may vary by lender."
                }
              }
            ]
          })
        }}
      />

      {/* WebSite Schema */}
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Remitout",
            "url": "https://loan.remitout.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://loan.remitout.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* FinancialService Schema */}
      <script
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Remitout Education Loans",
            "url": "https://loan.remitout.com",
            "logo": "https://loan.remitout.com/logo1.svg",
            "image": "https://loan.remitout.com/og-image.jpg",
            "description": "Comprehensive education loan services for students pursuing higher education in India and abroad.",
            "areaServed": "IN",
            "serviceType": "Education Loan",
            "priceRange": "Competitive rates",
            "telephone": "+91-9819176629"
          })
        }}
      />
    </>
  );
}

// For use in Next.js app directory (app/layout.jsx):
/*
import LayoutClient from '@/components/LayoutClient';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <LayoutClient />
      </head>
      <body>{children}</body>
    </html>
  );
}
*/

// For use in Next.js pages directory (pages/_app.jsx):
/*
import Head from 'next/head';
import LayoutClient from '@/components/LayoutClient';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <LayoutClient />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
*/

// For plain HTML (index.html):
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Copy all meta tags and scripts from the LayoutClient component above -->
  <title>Remitout - Education Loan Services | Study Abroad Financing</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- ... rest of meta tags ... -->
</head>
<body>
  <!-- Your content -->
</body>
</html>
*/