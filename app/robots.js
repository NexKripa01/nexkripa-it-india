export default function robots() {
  const baseUrl = "https://www.nexkripa.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}