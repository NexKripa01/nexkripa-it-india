import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://www.nexkripa.in"),

  title: {
    default: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    template: "%s | NexKripa IT INDIA",
  },

  description:
    "NexKripa IT INDIA provides web development, UI/UX design, AI automation, CRM, branding, e-commerce, database maintenance and IT consultancy services for businesses and startups.",

  keywords: [
    "NexKripa",
    "NexKripa IT INDIA",
    "NexKripa India",
    "Web Development Company India",
    "Web Development Mumbai",
    "AI Automation Services",
    "UI UX Design",
    "CRM Development",
    "E-Commerce Development",
    "Corporate Branding",
    "Personal Branding",
    "Database Maintenance",
    "IT Consultancy",
    "Digital Solutions India",
  ],

  authors: [{ name: "NexKripa IT INDIA" }],
  creator: "NexKripa IT INDIA",
  publisher: "NexKripa IT INDIA",
  applicationName: "NexKripa",
  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    description:
      "Modern websites, AI automation, CRM, branding, UI/UX, e-commerce and IT solutions for businesses and startups.",
    url: "https://www.nexkripa.in",
    siteName: "NexKripa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    description:
      "Web development, AI automation, branding, CRM, UI/UX and digital solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "L8KG7MNfxWhOLc0-VFlkRUYyXNPdrG0uG8Dn7Qvl02Q",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexKripa",
  alternateName: [
    "NexKripa IT INDIA",
    "NexKripa India",
    "nexkripa.in",
  ],
  url: "https://www.nexkripa.in/",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexKripa IT INDIA",
  alternateName: "NexKripa",
  url: "https://www.nexkripa.in/",
  logo: "https://www.nexkripa.in/icon.png",
  sameAs: [
    "https://www.instagram.com/nexkripa/",
    "https://www.linkedin.com/company/137494032/",
    "https://github.com/NexKripa01",
    "https://youtube.com/@nexkripaitindia",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}