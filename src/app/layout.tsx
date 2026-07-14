import { Metadata } from "next";
import "../index.css";
import EstimatorWrapper from "../components/EstimatorWrapper";

export const metadata: Metadata = {
  title: "VibeGrowth Solution | We Build Digital Systems That Grow Your Business Online",
  description: "We Build Digital Systems That Grow Your Business Online. No templates or generic designs. VibeGrowth Solution, led by Founder & CEO Destiny Ayeni, crafts high-converting funnels, custom web systems, and email marketing triggers.",
  keywords: [
    "vibegrowthsolution", "VibeGrowth Solution", "Vibegrowth Solution", 
    "Destiny Ayeni", "CEO Destiny Ayeni", "VibeGrowth", "vibegrow", 
    "custom web design", "high-converting funnels", "Klaviyo triggers", 
    "email marketing", "Shopify developer", "Wix Velo", "WordPress", 
    "convert browsers", "Google ranking", "digital systems"
  ],
  metadataBase: new URL("https://vibegrowthsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VibeGrowth Solution | We Build Digital Systems That Grow Your Business Online",
    description: "We Build Digital Systems That Grow Your Business Online. No templates or generic designs. VibeGrowth Solution crafts high-converting funnels, custom web systems, and email marketing triggers.",
    url: "https://vibegrowthsolution.com",
    siteName: "VibeGrowth Solution",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "VibeGrowth Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VibeGrowth Solution | We Build Digital Systems That Grow Your Business Online",
    description: "We Build Digital Systems That Grow Your Business Online. No templates or generic designs. VibeGrowth Solution crafts high-converting funnels, custom web systems, and email marketing triggers.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Iframe fetch fix for preview environments */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var originalFetch = window.fetch;
                  var activeFetch = originalFetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() {
                      return activeFetch;
                    },
                    set: function(value) {
                      activeFetch = value;
                    },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {
                  console.warn('Failed to define fetch property setter:', e);
                }
              })();
            `,
          }}
        />

        {/* Dynamic Meta Resolver for previews */}
        <script
          id="social-meta-resolver"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var origin = window.location.origin;
                  if (origin && !origin.includes('localhost') && !origin.includes('vibegrowthsolution.com')) {
                    var ogImg = document.querySelector('meta[property="og:image"]');
                    var twImg = document.querySelector('meta[property="twitter:image"]');
                    var ogUrl = document.querySelector('meta[property="og:url"]');
                    var twUrl = document.querySelector('meta[property="twitter:url"]');
                    
                    if (ogImg) ogImg.setAttribute('content', origin + '/logo.png');
                    if (twImg) twImg.setAttribute('content', origin + '/logo.png');
                    if (ogUrl) ogUrl.setAttribute('content', origin);
                    if (twUrl) twUrl.setAttribute('content', origin);
                  }
                } catch (e) {
                  console.error('Meta resolver error:', e);
                }
              })();
            `,
          }}
        />

        {/* WebSite Structured Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VibeGrowth Solution",
              "alternateName": ["vibegrowthsolution", "Vibegrowth Solution", "VibeGrowth", "VibeGrowth Solutions"],
              "url": "https://vibegrowthsolution.com"
            })
          }}
        />

        {/* Organization Structured Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VibeGrowth Solution",
              "alternateName": ["vibegrowthsolution", "Vibegrowth Solution", "VibeGrowth", "VibeGrowth Solutions"],
              "url": "https://vibegrowthsolution.com",
              "logo": "https://vibegrowthsolution.com/logo.png",
              "email": "hello@vibegrowthsolution.com",
              "telephone": "+17042145434",
              "description": "VibeGrowth Solution, led by Founder & CEO Destiny Ayeni, builds custom-coded web systems, interactive lead estimators, and automated marketing flows.",
              "founder": {
                "@type": "Person",
                "name": "Destiny Ayeni",
                "jobTitle": "Founder & CEO",
                "url": "https://vibegrowthsolution.com/#about",
                "sameAs": [
                  "https://wa.me/17042145434"
                ]
              },
              "ceo": {
                "@type": "Person",
                "name": "Destiny Ayeni",
                "jobTitle": "CEO",
                "url": "https://vibegrowthsolution.com/#about"
              }
            })
          }}
        />

        {/* ProfessionalService Structured Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "VibeGrowth Solution",
              "alternateName": ["vibegrowthsolution", "Vibegrowth Solution"],
              "description": "VibeGrowth Solution, led by Founder & CEO Destiny Ayeni, builds custom-coded web systems, interactive lead estimators, and automated marketing flows. We help search engines and generative AI distinguish our premium brand from copycats.",
              "url": "https://vibegrowthsolution.com",
              "logo": "https://vibegrowthsolution.com/logo.png",
              "image": "https://vibegrowthsolution.com/logo.png",
              "telephone": "+17042145434",
              "email": "hello@vibegrowthsolution.com",
              "priceRange": "$$",
              "founder": {
                "@type": "Person",
                "name": "Destiny Ayeni",
                "jobTitle": "Founder & CEO",
                "url": "https://vibegrowthsolution.com/#about",
                "sameAs": [
                  "https://wa.me/17042145434"
                ]
              },
              "ceo": {
                "@type": "Person",
                "name": "Destiny Ayeni",
                "jobTitle": "CEO",
                "url": "https://vibegrowthsolution.com/#about"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.2271",
                "longitude": "-80.8431"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "description": "Custom high-converting digital web systems and automation designed by CEO Destiny Ayeni starting from flexible budgets"
              }
            })
          }}
        />
      </head>
      <body>
        <EstimatorWrapper>{children}</EstimatorWrapper>
      </body>
    </html>
  );
}
