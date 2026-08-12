import HomeHeroSlider from "@/components/HomeHeroSlider";

export const metadata = {
  title: "Web Development, AI & Digital Solutions in Mumbai",

  description:
    "NexKripa IT INDIA is a Mumbai-based digital solutions company providing web development, AI automation, UI/UX design, CRM, branding, e-commerce, database maintenance and IT consultancy services for businesses and startups.",

  keywords: [
    "NexKripa",
    "NexKripa IT INDIA",
    "Web Development Company Mumbai",
    "Website Development Mumbai",
    "Web Development Company India",
    "AI Automation Services India",
    "UI UX Design Services Mumbai",
    "CRM Development Services",
    "E-Commerce Website Development",
    "Corporate Branding Services",
    "Personal Branding Services",
    "IT Consultancy Mumbai",
    "Database Maintenance Services",
    "Digital Solutions Company Mumbai",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",

    description:
      "Modern websites, AI automation, UI/UX, CRM, branding, e-commerce and digital solutions for businesses and startups.",

    url: "/",

    siteName: "NexKripa",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA - Web Development, AI and Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",

    description:
      "Web development, AI automation, UI/UX, CRM, branding and digital solutions for modern businesses.",

    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeHeroSlider />;
}