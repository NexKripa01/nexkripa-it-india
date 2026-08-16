export default function robots() {
  const baseUrl = "https://www.nexkripa.in";

  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        // Admin
        "/admin",
        "/admin/",

        // Demo utility/private pages
        "/demo-view",
        "/demo-view/",
        "/demo-access",

        // Chatbot APIs
        "/api/chatbot",
        "/api/chat-memory",
        "/api/chatbot-analytics",
        "/api/consultations",

        // Demo request APIs
        "/api/demo-request",
        "/api/demo-requests",
        "/api/demo-access",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}