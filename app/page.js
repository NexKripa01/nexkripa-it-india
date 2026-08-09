import HomeHeroSlider from "@/components/HomeHeroSlider";

export const metadata = {
  title: "Web Development, AI & Digital Solutions",

  description:
    "NexKripa IT INDIA provides web development, AI automation, UI/UX design, CRM, branding, e-commerce, database maintenance and IT consultancy solutions for businesses and startups.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    description:
      "Web development, AI automation, CRM, UI/UX, branding and modern digital solutions by NexKripa IT INDIA.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return <HomeHeroSlider />;
}