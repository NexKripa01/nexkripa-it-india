import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://www.nexkripa.com"),

  title: {
    default: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    template: "%s | NexKripa IT INDIA",
  },

  description:
    "NexKripa IT INDIA provides web development, UI/UX design, AI automation, CRM, branding, e-commerce, database maintenance and IT consultancy services for businesses and startups.",

  keywords: [
    "NexKripa IT INDIA",
    "NexKripa",
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
    "Website Development India",
  ],

  authors: [
    {
      name: "NexKripa IT INDIA",
    },
  ],

  creator: "NexKripa IT INDIA",
  publisher: "NexKripa IT INDIA",

  applicationName: "NexKripa IT INDIA",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",

    description:
      "Modern websites, AI automation, CRM, branding, UI/UX, e-commerce and IT solutions for businesses and startups.",

    url: "https://www.nexkripa.com",

    siteName: "NexKripa IT INDIA",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA - Digital and Technology Solutions",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",

    description:
      "Web development, AI automation, branding, CRM, UI/UX and digital solutions for modern businesses.",

    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    // Google Search Console verification code baad me add karna.
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <Navbar />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}