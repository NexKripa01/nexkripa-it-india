export default function sitemap() {
  const baseUrl = "https://www.nexkripa.in";

  return [
    // =========================================================
    // HOME
    // =========================================================
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/new-logo.png`,
        `${baseUrl}/og-image.png`,
        `${baseUrl}/hero/hero1.png`,
        `${baseUrl}/hero/hero2.png`,
        `${baseUrl}/hero/hero3.png`,
        `${baseUrl}/hero/hero4.png`,
        `${baseUrl}/hero/hero5.png`,
      ],
    },

    // =========================================================
    // ABOUT
    // =========================================================
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/team/founders.png`,
        `${baseUrl}/team/gaurav.png`,
        `${baseUrl}/team/vijay.png`,
        `${baseUrl}/team/aaryan.png`,
        `${baseUrl}/team/nakul.png`,
      ],
    },

    // =========================================================
    // PORTFOLIO
    // =========================================================
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/portfolio/pujadham.jpg`,
      ],
    },

    // =========================================================
    // DEMOS
    // =========================================================
    {
      url: `${baseUrl}/demos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/demos/restaurant-demo.jpg`,
        `${baseUrl}/demos/salon-demo.jpg`,
        `${baseUrl}/demos/ecommerce-demo.jpg`,
        `${baseUrl}/demos/real-estate-demo.jpg`,
        `${baseUrl}/demos/institute-demo.jpg`,
        `${baseUrl}/demos/portfolio-demo.jpg`,
      ],
    },

    // =========================================================
    // SERVICES HUB
    // =========================================================
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/services/website/website-service-design.png`,
        `${baseUrl}/services/ai-automation/ai-automation-agent.png`,
        `${baseUrl}/services/ui-ux/uiux-dashboard.webp`,
        `${baseUrl}/services/crm/crm-dashboard.webp`,
        `${baseUrl}/services/personal-branding/personal-branding-digital.webp`,
      ],
    },

    // =========================================================
    // WEB DEVELOPMENT
    // =========================================================
    {
      url: `${baseUrl}/services/website`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/website/website-service-design.png`,
        `${baseUrl}/services/website/website-service-responsive.jpg`,
        `${baseUrl}/services/website/website-service-workspace.jpg`,
      ],
    },

    // =========================================================
    // WEBSITE REDESIGN
    // =========================================================
    {
      url: `${baseUrl}/services/redesign`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/redesign/website-redesign-before-after.webp`,
        `${baseUrl}/services/redesign/website-redesign-responsive.webp`,
        `${baseUrl}/services/redesign/website-redesign-workspace.webp`,
      ],
    },

    // =========================================================
    // UI / UX
    // =========================================================
    {
      url: `${baseUrl}/services/ui-ux`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/ui-ux/uiux-dashboard.webp`,
        `${baseUrl}/services/ui-ux/uiux-mobile.webp`,
      ],
    },

    // =========================================================
    // AI AUTOMATION
    // =========================================================
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/ai-automation/ai-automation-agent.png`,
        `${baseUrl}/services/ai-automation/ai-automation-workflow.jpg`,
      ],
    },

    // =========================================================
    // CRM DEVELOPMENT
    // =========================================================
    {
      url: `${baseUrl}/services/crm`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/crm/crm-dark-dashboard.jpg`,
        `${baseUrl}/services/crm/crm-dashboard.webp`,
      ],
    },

    // =========================================================
    // E-COMMERCE
    // =========================================================
    {
      url: `${baseUrl}/services/e-commerce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/e-commerce/ecommerce-dashboard.webp`,
        `${baseUrl}/services/e-commerce/ecommerce-store.jpg`,
      ],
    },

    // =========================================================
    // PERSONAL BRANDING
    // =========================================================
    {
      url: `${baseUrl}/services/personal-branding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/personal-branding/personal-branding-digital.webp`,
        `${baseUrl}/services/personal-branding/personal-branding-kit.png`,
      ],
    },

    // =========================================================
    // CORPORATE BRANDING
    // =========================================================
    {
      url: `${baseUrl}/services/corporate-branding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/corporate-branding/corporate-branding-identity.webp`,
        `${baseUrl}/services/corporate-branding/corporate-branding-studio.png`,
        `${baseUrl}/services/corporate-branding/corporate-branding-workspace.jpg`,
      ],
    },

    // =========================================================
    // DATABASE MAINTENANCE
    // =========================================================
    {
      url: `${baseUrl}/services/database-maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/database-maintenance/database-maintenance-analytics.jpg`,
        `${baseUrl}/services/database-maintenance/database-maintenance-monitoring.png`,
      ],
    },

    // =========================================================
    // IT CONSULTANCY
    // =========================================================
    {
      url: `${baseUrl}/services/it-consultancy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/services/it-consultancy/it-consultancy-network.png`,
        `${baseUrl}/services/it-consultancy/it-consultancy-strategy.jpg`,
      ],
    },

    // =========================================================
    // CLIENTELE
    // =========================================================
    {
      url: `${baseUrl}/clientele`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        `${baseUrl}/clients/pujadham-client.png`,
      ],
    },

    // =========================================================
    // CONTACT
    // =========================================================
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // =========================================================
    // PRIVACY POLICY
    // =========================================================
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}