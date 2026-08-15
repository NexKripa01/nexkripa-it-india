import "./globals.css";

import SiteChrome from "@/components/SiteChrome";
import DemoWatermark from "@/components/DemoWatermark";
import NexKripaChatbot from "@/components/NexKripaChatbot";

export const metadata = {
  metadataBase: new URL("https://www.nexkripa.in"),

  title: {
    default: "NexKripa | Web Development, AI & Digital Solutions",
    template: "%s | NexKripa",
  },

  description:
    "NexKripa IT INDIA is a Mumbai-based digital technology company providing web development, UI/UX design, AI automation, CRM, e-commerce, branding, database maintenance and IT consultancy services.",

  authors: [
    {
      name: "NexKripa IT INDIA",
    },
  ],

  creator: "NexKripa IT INDIA",

  publisher: "NexKripa IT INDIA",

  applicationName: "NexKripa",

  category: "Technology",

  openGraph: {
    title: "NexKripa | Web Development, AI & Digital Solutions",

    description:
      "NexKripa IT INDIA builds modern websites, AI automation systems, CRM solutions, UI/UX experiences, e-commerce platforms and digital solutions.",

    url: "https://www.nexkripa.in/",

    siteName: "NexKripa",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA - Web Development, AI and Digital Solutions",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NexKripa | Web Development, AI & Digital Solutions",

    description:
      "Web development, AI automation, CRM, UI/UX, branding and digital solutions by NexKripa IT INDIA.",

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

  name: "NexKripa",

  alternateName: [
    "NexKripa IT INDIA",
    "NexKripa India",
  ],

  legalName: "NexKripa IT INDIA",

  url: "https://www.nexkripa.in/",

  logo: {
    "@type": "ImageObject",

    url: "https://www.nexkripa.in/new-logo.png",

    contentUrl: "https://www.nexkripa.in/new-logo.png",
  },

  image: "https://www.nexkripa.in/og-image.png",

  description:
    "NexKripa IT INDIA is a Mumbai-based digital technology company providing web development, AI automation, UI/UX design, CRM, e-commerce, branding and IT solutions.",

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

        <SiteChrome>
          {children}
        </SiteChrome>

        <DemoWatermark />

        {/* GLOBAL CHATBOT */}
        <NexKripaChatbot />
      </body>
    </html>
  );
}