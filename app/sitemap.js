export default function sitemap() {
  const baseUrl = "https://www.nexkripa.in";

  return [
    // =========================================================
    // HOME
    // =========================================================
    {
      url: baseUrl,
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
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        `${baseUrl}/clients/pujadham-client.png`,
      ],
    },

    // =========================================================
    // PRICING
    // =========================================================
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // =========================================================
    // FAQ
    // =========================================================
    {
      url: `${baseUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG
    // =========================================================
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // =========================================================
    // BLOG - WEBSITE
    // =========================================================
    {
      url: `${baseUrl}/blog/website`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - REDESIGN
    // =========================================================
    {
      url: `${baseUrl}/blog/redesign`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - PERSONAL BRANDING
    // =========================================================
    {
      url: `${baseUrl}/blog/personal-branding`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - UI / UX
    // =========================================================
    {
      url: `${baseUrl}/blog/ui-ux`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - CRM
    // =========================================================
    {
      url: `${baseUrl}/blog/crm`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - AI AUTOMATION
    // =========================================================
    {
      url: `${baseUrl}/blog/ai-automation`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // BLOG - E-COMMERCE
    // =========================================================
    {
      url: `${baseUrl}/blog/ecommerce`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // CONTACT
    // =========================================================
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // =========================================================
    // PRIVACY POLICY
    // =========================================================
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}