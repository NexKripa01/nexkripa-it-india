import ServicesInteractiveGrid from "@/components/ServicesInteractiveGrid";

export const metadata = {
  title: "Services",
  description:
    "Websites, branding, UI/UX, CRM, IT consultancy, AI automation and digital solutions by NexKripa IT INDIA.",

  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesInteractiveGrid />
    </>
  );
}