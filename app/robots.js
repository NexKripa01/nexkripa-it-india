export default function robots() {
  const baseUrl = "https://www.nexkripa.in";

  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        "/admin",
        "/admin/",
        "/demo-view",
        "/api/chatbot",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}