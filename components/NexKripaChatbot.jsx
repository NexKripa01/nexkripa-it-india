"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Send,
  X,
  ArrowLeft,
  BriefcaseBusiness,
  RotateCcw,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Lightbulb,
  CalendarDays,
  Mail,
} from "lucide-react";

import ContactWizard from "@/components/ContactWizard";

const QUICK_QUESTIONS = [
  {
    label: "Our Services",
    message: "What services does NexKripa provide?",
  },
  {
    label: "Website Pricing",
    message: "Tell me about NexKripa website pricing.",
  },
  {
    label: "AI Solutions",
    message: "What AI solutions does NexKripa provide?",
  },
  {
    label: "Start a Project",
    action: "form",
  },
];


/* =====================================
   PAGE-AWARE ASSISTANT
===================================== */

const PAGE_ASSISTANT_CONFIG = {
  home: {
    welcome:
      "Hi 👋 Welcome to NexKripa. How can I help you today?",

    quickQuestions: QUICK_QUESTIONS,
  },

  pricing: {
    welcome:
      "Hi 👋 Need help choosing the right NexKripa package? I can explain pricing, features, delivery time, or help you start a project.",

    quickQuestions: [
      {
        label: "Compare Packages",
        message:
          "Compare NexKripa website packages with starting prices and included features.",
      },
      {
        label: "E-Commerce Pricing",
        message:
          "Tell me about NexKripa's e-commerce website package and pricing.",
      },
      {
        label: "Delivery Time",
        message:
          "What is the delivery time for NexKripa website packages?",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  services: {
    welcome:
      "Hi 👋 Exploring NexKripa services? Tell me what you want to build and I can help you find the right solution.",

    quickQuestions: [
      {
        label: "Web Development",
        message:
          "Tell me about NexKripa web development services.",
      },
      {
        label: "AI Solutions",
        message:
          "What AI automation and AI solutions does NexKripa provide?",
      },
      {
        label: "E-Commerce",
        message:
          "Tell me about NexKripa e-commerce development services.",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  demos: {
    welcome:
      "Hi 👋 Looking through our demos? I can help you understand NexKripa demo projects, services, or start a similar project.",

    quickQuestions: [
      {
        label: "About Demos",
        message:
          "Tell me about NexKripa demos and what they showcase.",
      },
      {
        label: "Build Similar",
        message:
          "Can NexKripa build a project similar to one of its demos?",
      },
      {
        label: "Our Services",
        message:
          "What services does NexKripa provide?",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  demoAccess: {
    welcome:
      "Hi 👋 Need help with NexKripa Demo Access? I can guide you about demos or help you contact the team.",

    quickQuestions: [
      {
        label: "Demo Access Help",
        message:
          "How does NexKripa Demo Access work?",
      },
      {
        label: "View Demos",
        message:
          "Tell me about NexKripa demos.",
      },
      {
        label: "Contact Team",
        message:
          "How can I contact the NexKripa team?",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  portfolio: {
    welcome:
      "Hi 👋 Exploring NexKripa's portfolio? I can tell you about our work, services, and how to start your own project.",

    quickQuestions: [
      {
        label: "Our Work",
        message:
          "Tell me about NexKripa's portfolio and projects.",
      },
      {
        label: "Our Services",
        message:
          "What services does NexKripa provide?",
      },
      {
        label: "Website Pricing",
        message:
          "Tell me about NexKripa website pricing.",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  clientele: {
    welcome:
      "Hi 👋 Want to know more about NexKripa's client work? I can help with services, projects, or your own project enquiry.",

    quickQuestions: [
      {
        label: "Client Work",
        message:
          "Tell me about NexKripa's client work.",
      },
      {
        label: "Our Services",
        message:
          "What services does NexKripa provide?",
      },
      {
        label: "How We Work",
        message:
          "What is NexKripa's project process?",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ],
  },

  contact: {
    welcome:
      "Hi 👋 Ready to discuss a project with NexKripa? I can help you choose a service, check pricing, or start your project enquiry.",

    quickQuestions: [
      {
        label: "Start a Project",
        action: "form",
      },
      {
        label: "Website Pricing",
        message:
          "Tell me about NexKripa website pricing.",
      },
      {
        label: "Our Services",
        message:
          "What services does NexKripa provide?",
      },
      {
        label: "Contact Details",
        message:
          "How can I contact NexKripa?",
      },
    ],
  },
};

function getPageAssistantConfig(pathname) {
  if (
    pathname === "/pricing" ||
    pathname?.startsWith("/pricing/")
  ) {
    return PAGE_ASSISTANT_CONFIG.pricing;
  }

  if (
    pathname === "/services" ||
    pathname?.startsWith("/services/")
  ) {
    return PAGE_ASSISTANT_CONFIG.services;
  }

  if (
    pathname === "/demos" ||
    pathname?.startsWith("/demos/")
  ) {
    return PAGE_ASSISTANT_CONFIG.demos;
  }

  if (pathname === "/demo-access") {
    return PAGE_ASSISTANT_CONFIG.demoAccess;
  }

  if (
    pathname === "/portfolio" ||
    pathname?.startsWith("/portfolio/")
  ) {
    return PAGE_ASSISTANT_CONFIG.portfolio;
  }

  if (
    pathname === "/clientele" ||
    pathname?.startsWith("/clientele/")
  ) {
    return PAGE_ASSISTANT_CONFIG.clientele;
  }

  if (pathname === "/contact") {
    return PAGE_ASSISTANT_CONFIG.contact;
  }

  return PAGE_ASSISTANT_CONFIG.home;
}

function getInitialMessagesForPage(pathname) {
  const pageConfig =
    getPageAssistantConfig(pathname);

  return [
    {
      role: "assistant",
      content: pageConfig.welcome,
    },
  ];
}

const FAQ_SHORTCUTS = [
  {
    label: "Delivery Time",
    message: "What is the usual project delivery time?",
  },
  {
    label: "Revisions",
    message: "How many revisions are included in NexKripa packages?",
  },
  {
    label: "SEO",
    message: "Does NexKripa include SEO with websites?",
  },
  {
    label: "Maintenance",
    message: "Does NexKripa provide website maintenance and support?",
  },
];

const WHATSAPP_NUMBER = "919142506087";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi NexKripa, I would like to discuss a project.";


const CHAT_STORAGE_KEY =
  "nexkripa-chat-history";

const CHAT_ANALYTICS_KEY =
  "nexkripa-chat-analytics";

const CHAT_SESSION_KEY =
  "nexkripa-chat-session-id";

const CONSULTATION_EMAIL_KEY =
  "nexkripa-consultation-email";

const CONSULTATION_SERVICES = [
  "Web Development",
  "E-Commerce",
  "AI / Automation",
  "CRM / Custom Web App",
  "UI/UX Design",
  "Website Redesign",
  "Personal Branding",
  "Other",
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    String(value || "").trim()
  );
}

function isLongConsultationRequest(content) {
  if (typeof content !== "string") {
    return false;
  }

  const text =
    content.toLowerCase().trim();

  const longConsultationSignals = [
    "detailed consultation",
    "complete consultation",
    "full consultation",
    "complete project plan",
    "full project plan",
    "complete plan",
    "full strategy",
    "detailed strategy",
    "step by step plan",
    "step-by-step plan",
    "discuss in detail",
    "guide me in detail",
    "complete roadmap",
    "full roadmap",
  ];

  if (
    longConsultationSignals.some(
      (signal) =>
        text.includes(signal)
    )
  ) {
    return true;
  }

  return (
    text.length >= 180 &&
    (
      text.includes("project") ||
      text.includes("website") ||
      text.includes("ecommerce") ||
      text.includes("e-commerce") ||
      text.includes("ai") ||
      text.includes("crm") ||
      text.includes("business")
    )
  );
}

function isProjectConsultationMessage(content) {
  if (typeof content !== "string") {
    return false;
  }

  const text =
    content.toLowerCase().trim();

  const projectSignals = [
    "website",
    "web development",
    "ecommerce",
    "e-commerce",
    "online store",
    "crm",
    "automation",
    "ai",
    "chatbot",
    "redesign",
    "ui ux",
    "ui/ux",
    "portfolio",
    "personal branding",
    "project",
    "dashboard",
    "management system",
  ];

  return projectSignals.some(
    (signal) =>
      text.includes(signal)
  );
}

function shouldCaptureConsultationEmail(
  messages,
  currentMessage
) {
  if (
    !isProjectConsultationMessage(
      currentMessage
    )
  ) {
    return false;
  }

  const previousProjectMessages =
    Array.isArray(messages)
      ? messages.filter(
          (item) =>
            item?.role === "user" &&
            isProjectConsultationMessage(
              item?.content
            )
        ).length
      : 0;

  /*
    Capture email on the second project-focused
    user message. Example:
    1) "Mujhe CRM chahiye"
    2) "CRM me automation bhi chahiye"
  */
  return previousProjectMessages >= 1;
}

function getTodayForDateInput() {
  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    String(
      now.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      now.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getChatSessionId() {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    let sessionId =
      localStorage.getItem(
        CHAT_SESSION_KEY
      );

    if (!sessionId) {
      sessionId =
        sessionStorage.getItem(
          CHAT_SESSION_KEY
        );
    }

    if (!sessionId) {
      sessionId =
        `nk_${Date.now()}_${Math.random()
          .toString(36)
          .slice(2, 10)}`;
    }

    localStorage.setItem(
      CHAT_SESSION_KEY,
      sessionId
    );

    sessionStorage.setItem(
      CHAT_SESSION_KEY,
      sessionId
    );

    return sessionId;
  } catch {
    return "";
  }
}

function trackChatEvent(
  eventName,
  data = {}
) {
  if (
    typeof window === "undefined" ||
    !eventName
  ) {
    return;
  }

  const event = {
    event: eventName,
    sessionId: getChatSessionId(),
    timestamp:
      new Date().toISOString(),
    ...data,
  };

  /*
    Local lightweight analytics.
    Keeps only the latest 150 events
    in this browser and stores no
    message text.
  */
  try {
    const saved =
      localStorage.getItem(
        CHAT_ANALYTICS_KEY
      );

    const parsed =
      saved ? JSON.parse(saved) : [];

    const events =
      Array.isArray(parsed)
        ? parsed
        : [];

    events.push(event);

    localStorage.setItem(
      CHAT_ANALYTICS_KEY,
      JSON.stringify(
        events.slice(-150)
      )
    );
  } catch (error) {
    console.error(
      "Unable to save NexKripa chatbot analytics:",
      error
    );
  }

  /*
    If Google Tag Manager / GA dataLayer
    is configured now or later, the same
    events will also be available there.
  */
  try {
    window.dataLayer =
      window.dataLayer || [];

    window.dataLayer.push({
      event: `nexkripa_${eventName}`,
      ...event,
    });
  } catch (error) {
    console.error(
      "Unable to push NexKripa analytics event:",
      error
    );
  }

  /*
    Production analytics:
    send the same privacy-safe event
    to MongoDB through the Next.js API.

    We intentionally do not await this
    request so chatbot interaction stays
    fast even if analytics is unavailable.
  */
  fetch(
    "/api/chatbot-analytics",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body:
        JSON.stringify(event),

      keepalive: true,
    }
  ).catch((error) => {
    console.error(
      "Unable to send NexKripa analytics event:",
      error
    );
  });
}

/* =====================================
   AI CHAT IMAGE
===================================== */

function AIChatImage({
  size = 22,
  className = "",
}) {
  return (
    <Image
      src="/aichatgpt.png"
      alt="NexKripa AI Assistant"
      width={size}
      height={size}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        display: "block",
      }}
      priority
    />
  );
}

/* =====================================
   FORMAT BOT RESPONSE
===================================== */

function formatBotMessage(content) {
  if (typeof content !== "string") {
    return "";
  }

  return content
    /* Remove accidental Markdown */
    .replace(
      /\*\*(.*?)\*\*/g,
      "$1"
    )
    .replace(
      /\*(.*?)\*/g,
      "$1"
    )
    .replace(
      /^#{1,6}\s+/gm,
      ""
    )

    /*
      Put numbered packages/items
      on separate blocks.
    */
    .replace(
      /\s+(?=\d+\.\s+[A-Za-z])/g,
      "\n\n"
    )

    /*
      Pricing answer labels
      on separate lines.
    */
    .replace(
      /\s*-\s*(?=Starting Price:)/gi,
      "\n"
    )
    .replace(
      /\s*-\s*(?=Includes:)/gi,
      "\n"
    )
    .replace(
      /\s*-\s*(?=Delivery:)/gi,
      "\n"
    )

    /*
      Support "Starting from"
      if model uses that wording.
    */
    .replace(
      /\s*-\s*(?=Starting from)/gi,
      "\n"
    )

    /*
      Final note separately.
    */
    .replace(
      /\s+(?=Note:)/gi,
      "\n\n"
    )

    /* Remove excessive blank lines */
    .replace(
      /\n{3,}/g,
      "\n\n"
    )
    .trim();
}


/* =====================================
   LEAD INTENT + SMART RECOMMENDATION
===================================== */

function getLeadIntent(content) {
  if (typeof content !== "string") {
    return {
      type: "general",
      label: "Custom Project",
      recommendation:
        "Tell us what you want to build and NexKripa can recommend the right solution.",
      whatsapp:
        DEFAULT_WHATSAPP_MESSAGE,
    };
  }

  const text = content.toLowerCase();

  if (
    text.includes("ecommerce") ||
    text.includes("e-commerce") ||
    text.includes("online store") ||
    text.includes("shopping website") ||
    text.includes("product website")
  ) {
    return {
      type: "ecommerce",
      label: "E-Commerce Website",
      recommendation:
        "Recommended: NexKripa E-Commerce plan starting from ₹19,999+, depending on final scope and requirements.",
      whatsapp:
        "Hi NexKripa, I am interested in an E-Commerce website. I would like to discuss my requirements and get a quote.",
    };
  }

  if (
    text.includes("ai automation") ||
    text.includes("automation") ||
    text.includes("chatbot") ||
    text.includes("ai solution") ||
    text.includes("artificial intelligence")
  ) {
    return {
      type: "ai",
      label: "AI / Automation Solution",
      recommendation:
        "Recommended: a custom AI / automation solution. Pricing depends on workflow, integrations, data, and project scope.",
      whatsapp:
        "Hi NexKripa, I am interested in an AI / Automation solution. I would like to discuss my requirements.",
    };
  }

  if (
    text.includes("crm") ||
    text.includes("dashboard") ||
    text.includes("management system")
  ) {
    return {
      type: "crm",
      label: "CRM / Custom Web App",
      recommendation:
        "Recommended: a custom CRM or web application. NexKripa can provide a custom quote after reviewing the required modules and workflow.",
      whatsapp:
        "Hi NexKripa, I am interested in a CRM / custom web application. I would like to discuss the required features.",
    };
  }

  if (
    text.includes("redesign") ||
    text.includes("redesign website") ||
    text.includes("existing website") ||
    text.includes("website change") ||
    text.includes("website changes")
  ) {
    return {
      type: "redesign",
      label: "Website Redesign",
      recommendation:
        "Recommended: Website Redesign starting from ₹4,999+, depending on the existing website and required changes.",
      whatsapp:
        "Hi NexKripa, I want to redesign or improve my existing website. I would like to discuss the required changes.",
    };
  }

  if (
    text.includes("portfolio") ||
    text.includes("personal brand") ||
    text.includes("personal website")
  ) {
    return {
      type: "personal",
      label: "Personal Branding Website",
      recommendation:
        "Recommended: Personal Branding solution starting from ₹6,999+, depending on the required pages and features.",
      whatsapp:
        "Hi NexKripa, I am interested in a personal branding / portfolio website. I would like to discuss my requirements.",
    };
  }

  if (
    text.includes("ui ux") ||
    text.includes("ui/ux") ||
    text.includes("design")
  ) {
    return {
      type: "uiux",
      label: "UI/UX Design",
      recommendation:
        "Recommended: UI/UX Design starting from ₹4,999+, depending on screens, flows, and project scope.",
      whatsapp:
        "Hi NexKripa, I am interested in UI/UX design services. I would like to discuss my requirements.",
    };
  }

  if (
    text.includes("website") ||
    text.includes("web development") ||
    text.includes("business website") ||
    text.includes("company website")
  ) {
    return {
      type: "website",
      label: "Business Website",
      recommendation:
        "Recommended: Starter from ₹4,999+ for a small website, or Business from ₹9,999+ for a larger business website. Final recommendation depends on pages and features.",
      whatsapp:
        "Hi NexKripa, I am interested in a business website. I would like to discuss the pages, features, timeline, and pricing.",
    };
  }

  return {
    type: "general",
    label: "Custom Project",
    recommendation:
      "Tell us your requirements and NexKripa can recommend the most suitable service or package.",
    whatsapp:
      DEFAULT_WHATSAPP_MESSAGE,
  };
}

function getLatestUserMessage(messages) {
  if (!Array.isArray(messages)) {
    return "";
  }

  for (
    let index = messages.length - 1;
    index >= 0;
    index -= 1
  ) {
    if (messages[index]?.role === "user") {
      return messages[index]?.content || "";
    }
  }

  return "";
}

/* =====================================
   SMART CTA ACTIONS
===================================== */

function getSmartActions(content, userContent = "") {
  if (typeof content !== "string") {
    return [];
  }

  const text =
    content.toLowerCase();

  const leadIntent =
    getLeadIntent(userContent);

  if (
    leadIntent.type === "ecommerce"
  ) {
    return [
      {
        label: "View Pricing",
        action: "link",
        href: "/pricing",
      },
      {
        label: "Start E-Commerce Project",
        action: "form",
      },
      {
        label: "Discuss on WhatsApp",
        action: "whatsapp",
      },
    ];
  }

  if (
    leadIntent.type === "ai" ||
    leadIntent.type === "crm"
  ) {
    return [
      {
        label: "View Services",
        action: "link",
        href: "/services",
      },
      {
        label: "Start This Project",
        action: "form",
      },
      {
        label: "Discuss on WhatsApp",
        action: "whatsapp",
      },
    ];
  }

  if (
    leadIntent.type === "website" ||
    leadIntent.type === "redesign" ||
    leadIntent.type === "personal" ||
    leadIntent.type === "uiux"
  ) {
    return [
      {
        label: "View Pricing",
        action: "link",
        href: "/pricing",
      },
      {
        label: "Start This Project",
        action: "form",
      },
      {
        label: "Discuss on WhatsApp",
        action: "whatsapp",
      },
    ];
  }

  if (
    text.includes("pricing") ||
    text.includes("price") ||
    text.includes("package") ||
    text.includes("plan") ||
    text.includes("₹")
  ) {
    return [
      {
        label: "View Pricing",
        action: "link",
        href: "/pricing",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ];
  }

  if (
    text.includes("demo")
  ) {
    return [
      {
        label: "View Demos",
        action: "link",
        href: "/demos",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ];
  }

  if (
    text.includes("contact") ||
    text.includes("whatsapp") ||
    text.includes("email") ||
    text.includes("team")
  ) {
    return [
      {
        label: "Talk on WhatsApp",
        action: "whatsapp",
      },
      {
        label: "Contact Us",
        action: "link",
        href: "/contact",
      },
    ];
  }

  if (
    text.includes("service") ||
    text.includes("website") ||
    text.includes("e-commerce") ||
    text.includes("ecommerce") ||
    text.includes("ai solution") ||
    text.includes("automation") ||
    text.includes("design") ||
    text.includes("crm")
  ) {
    return [
      {
        label: "View Services",
        action: "link",
        href: "/services",
      },
      {
        label: "Start a Project",
        action: "form",
      },
    ];
  }

  return [
    {
      label: "Start a Project",
      action: "form",
    },
    {
      label: "Talk on WhatsApp",
      action: "whatsapp",
    },
  ];
}

export default function NexKripaChatbot() {
  const router = useRouter();
  const pathname = usePathname();

  const pageAssistantConfig =
    getPageAssistantConfig(pathname);

  const pageInitialMessages =
    getInitialMessagesForPage(pathname);

  const [isOpen, setIsOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    showContactForm,
    setShowContactForm,
  ] = useState(false);

  const [
    leadContext,
    setLeadContext,
  ] = useState(null);

  const [
    showConsultationForm,
    setShowConsultationForm,
  ] = useState(false);

  const [
    showEmailCapture,
    setShowEmailCapture,
  ] = useState(false);

  const [
    consultationEmail,
    setConsultationEmail,
  ] = useState("");

  const [
    emailCaptureError,
    setEmailCaptureError,
  ] = useState("");

  const [
    emailCaptureLoading,
    setEmailCaptureLoading,
  ] = useState(false);

  const [
    pendingConsultationMessage,
    setPendingConsultationMessage,
  ] = useState("");

  const [
    consultationForm,
    setConsultationForm,
  ] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    requirement: "",
  });

  const [
    consultationSubmitting,
    setConsultationSubmitting,
  ] = useState(false);

  const [
    consultationError,
    setConsultationError,
  ] = useState("");

  const [
    consultationSuccess,
    setConsultationSuccess,
  ] = useState("");

  const [messages, setMessages] =
    useState(() =>
      getInitialMessagesForPage(pathname)
    );

  const [chatLoaded, setChatLoaded] =
    useState(false);

  const [
    serverMemoryLoaded,
    setServerMemoryLoaded,
  ] = useState(false);

  const messagesEndRef =
    useRef(null);

  /* =====================================
     LOAD CONSULTATION EMAIL
  ===================================== */

  useEffect(() => {
    try {
      const savedEmail =
        localStorage.getItem(
          CONSULTATION_EMAIL_KEY
        ) ||
        sessionStorage.getItem(
          CONSULTATION_EMAIL_KEY
        );

      if (
        savedEmail &&
        isValidEmail(savedEmail)
      ) {
        setConsultationEmail(
          savedEmail
        );

        setConsultationForm(
          (previous) => ({
            ...previous,
            email: savedEmail,
          })
        );
      }
    } catch (error) {
      console.error(
        "Unable to load consultation email:",
        error
      );
    }
  }, []);

  /* =====================================
     LOAD SAVED CHAT
  ===================================== */

  useEffect(() => {
    try {
      const savedChat =
        localStorage.getItem(
          CHAT_STORAGE_KEY
        );

      if (savedChat) {
        const parsedChat =
          JSON.parse(savedChat);

        if (
          Array.isArray(parsedChat) &&
          parsedChat.length > 0
        ) {
          const validMessages =
            parsedChat.filter(
              (item) =>
                item &&
                (item.role === "user" ||
                  item.role ===
                    "assistant") &&
                typeof item.content ===
                  "string"
            );

          if (
            validMessages.length > 0
          ) {
            setMessages(
              validMessages.slice(-100)
            );
          }
        }
      }
    } catch (error) {
      console.error(
        "Unable to load saved NexKripa chat:",
        error
      );

      localStorage.removeItem(
        CHAT_STORAGE_KEY
      );
    } finally {
      setChatLoaded(true);
    }
  }, []);

  /* =====================================
     LOAD SERVER CHAT MEMORY
  ===================================== */

  useEffect(() => {
    if (!chatLoaded) {
      return;
    }

    let cancelled = false;

    const loadServerMemory =
      async () => {
        try {
          const sessionId =
            getChatSessionId();

          const savedEmail =
            consultationEmail ||
            localStorage.getItem(
              CONSULTATION_EMAIL_KEY
            ) ||
            sessionStorage.getItem(
              CONSULTATION_EMAIL_KEY
            ) ||
            "";

          const params =
            new URLSearchParams();

          if (savedEmail) {
            params.set(
              "email",
              savedEmail
            );
          } else if (sessionId) {
            params.set(
              "sessionId",
              sessionId
            );
          }

          if (
            !params.toString()
          ) {
            if (!cancelled) {
              setServerMemoryLoaded(
                true
              );
            }

            return;
          }

          const response =
            await fetch(
              `/api/chat-memory?${params.toString()}`,
              {
                cache: "no-store",
              }
            );

          const data =
            await response.json();

          if (
            !response.ok
          ) {
            throw new Error(
              data.message ||
                "Unable to load chat memory."
            );
          }

          if (
            !cancelled &&
            Array.isArray(
              data.messages
            ) &&
            data.messages.length > 0
          ) {
            setMessages(
              data.messages.slice(
                -100
              )
            );
          }
        } catch (error) {
          console.error(
            "Unable to load NexKripa server chat memory:",
            error
          );
        } finally {
          if (!cancelled) {
            setServerMemoryLoaded(
              true
            );
          }
        }
      };

    loadServerMemory();

    return () => {
      cancelled = true;
    };
  }, [
    chatLoaded,
    consultationEmail,
  ]);

  /* =====================================
     SAVE SERVER CHAT MEMORY
  ===================================== */

  useEffect(() => {
    if (
      !chatLoaded ||
      !serverMemoryLoaded ||
      !Array.isArray(messages) ||
      messages.length <= 1
    ) {
      return;
    }

    const timeoutId =
      window.setTimeout(
        async () => {
          try {
            const sessionId =
              getChatSessionId();

            const email =
              consultationEmail ||
              localStorage.getItem(
                CONSULTATION_EMAIL_KEY
              ) ||
              sessionStorage.getItem(
                CONSULTATION_EMAIL_KEY
              ) ||
              "";

            const response =
              await fetch(
                "/api/chat-memory",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body:
                    JSON.stringify({
                      sessionId,
                      email,
                      messages:
                        messages.slice(
                          -100
                        ),
                    }),
                }
              );

            if (!response.ok) {
              const data =
                await response
                  .json()
                  .catch(() => ({}));

              throw new Error(
                data.message ||
                  "Unable to save chat memory."
              );
            }
          } catch (error) {
            console.error(
              "Unable to save NexKripa server chat memory:",
              error
            );
          }
        },
        600
      );

    return () => {
      window.clearTimeout(
        timeoutId
      );
    };
  }, [
    messages,
    chatLoaded,
    serverMemoryLoaded,
    consultationEmail,
  ]);

  /* =====================================
     SAVE CHAT
  ===================================== */

  useEffect(() => {
    if (!chatLoaded) return;

    try {
      if (messages.length > 1) {
        localStorage.setItem(
          CHAT_STORAGE_KEY,
          JSON.stringify(
            messages.slice(-100)
          )
        );
      } else {
        localStorage.removeItem(
          CHAT_STORAGE_KEY
        );
      }
    } catch (error) {
      console.error(
        "Unable to save NexKripa chat:",
        error
      );
    }
  }, [messages, chatLoaded]);

  /* =====================================
     OPEN FROM MOBILE NAVBAR
  ===================================== */

  useEffect(() => {
    const openChatbot = () => {
      setIsOpen(true);

      trackChatEvent(
        "chat_open",
        {
          source: "mobile_navbar",
          page: pathname || "/",
        }
      );
    };

    window.addEventListener(
      "open-nexkripa-chatbot",
      openChatbot
    );

    return () => {
      window.removeEventListener(
        "open-nexkripa-chatbot",
        openChatbot
      );
    };
  }, [pathname]);

  /* =====================================
     UPDATE FRESH CHAT FOR CURRENT PAGE
  ===================================== */

  useEffect(() => {
    if (!chatLoaded) return;

    setMessages((currentMessages) => {
      const isFreshChat =
        currentMessages.length === 1 &&
        currentMessages[0]?.role ===
          "assistant";

      if (!isFreshChat) {
        return currentMessages;
      }

      return getInitialMessagesForPage(
        pathname
      );
    });
  }, [pathname, chatLoaded]);

  /* =====================================
     PAGE CONTEXT ANALYTICS
  ===================================== */

  useEffect(() => {
    if (!chatLoaded) return;

    trackChatEvent(
      "page_context",
      {
        page: pathname || "/",
      }
    );
  }, [pathname, chatLoaded]);

  /* =====================================
     AUTO SCROLL
  ===================================== */

  useEffect(() => {
    if (
      !showContactForm &&
      !showConsultationForm &&
      !showEmailCapture &&
      chatLoaded
    ) {
      messagesEndRef.current?.scrollIntoView(
        {
          behavior: "smooth",
        }
      );
    }
  }, [
    messages,
    loading,
    showContactForm,
    showConsultationForm,
    showEmailCapture,
    chatLoaded,
  ]);

  /* =====================================
     SEND MESSAGE
  ===================================== */

  const handleSendMessage = async (
    customMessage = null
  ) => {
    const cleanMessage =
      typeof customMessage === "string"
        ? customMessage.trim()
        : message.trim();

    if (
      !cleanMessage ||
      loading ||
      !serverMemoryLoaded
    ) {
      return;
    }

    /* =====================================
       DIRECT CONSULTATION COMMAND
       Opens booking form instead of
       sending the phrase to the AI.
    ===================================== */

    const consultationCommand =
      cleanMessage
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

    const consultationCommands =
      new Set([
        "book consultation",
        "book a consultation",
        "book consultation appointment",
        "appointment",
        "book appointment",
        "book an appointment",
        "schedule consultation",
        "schedule a consultation",
        "schedule appointment",
        "schedule an appointment",
        "consultation booking",
        "book meeting",
        "book a meeting",
      ]);

    if (
      consultationCommands.has(
        consultationCommand
      )
    ) {
      setMessage("");
      setShowContactForm(false);
      setShowEmailCapture(false);

      openConsultationBooking();

      return;
    }

    const hasCapturedEmail =
      isValidEmail(
        consultationEmail
      );

    if (
      !hasCapturedEmail &&
      (
        isLongConsultationRequest(
          cleanMessage
        ) ||
        shouldCaptureConsultationEmail(
          messages,
          cleanMessage
        )
      )
    ) {
      setPendingConsultationMessage(
        cleanMessage
      );

      setMessage("");

      setEmailCaptureError("");

      setShowEmailCapture(true);

      trackChatEvent(
        "cta_click",
        {
          page: pathname || "/",
          label:
            "Email Capture",
          action:
            "consultation_email",
          intent:
            getLeadIntent(
              cleanMessage
            )?.type ||
            "general",
        }
      );

      return;
    }

    const detectedIntent =
      getLeadIntent(cleanMessage);

    trackChatEvent(
      "message_sent",
      {
        page: pathname || "/",
        intent:
          detectedIntent?.type ||
          "general",
        messageLength:
          cleanMessage.length,
        source:
          customMessage
            ? "shortcut"
            : "typed",
      }
    );

    const userMessage = {
      role: "user",
      content: cleanMessage,
    };

    const conversation = [
      ...messages,
      userMessage,
    ];

    setMessages(conversation);

    setMessage("");

    setLoading(true);

    try {
      const response = await fetch(
        "/api/chatbot",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            messages:
              conversation.slice(-24),
          }),
        }
      );

      const data =
        await response.json();

      /* =====================================
         RATE LIMIT / 429
      ===================================== */

      if (response.status === 429) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",

            content:
              data.message ||
              "NexKripa Assistant is receiving too many requests right now. Please wait a few seconds and try again.",
          },
        ]);

        return;
      }

      /* =====================================
         OTHER API ERRORS
      ===================================== */

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to get response."
        );
      }

      /* =====================================
         SUCCESSFUL BOT RESPONSE
      ===================================== */

      const botMessage = {
        role: "assistant",

        content:
          data.reply ||
          "Sorry, I couldn't understand that.",
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);
    } catch (error) {
      console.error(
        "NexKripa chatbot frontend error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",

          content:
            error?.message ||
            "Sorry, I'm having trouble responding right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* =====================================
     QUICK QUESTION
  ===================================== */

  const handleQuickQuestion = (
    item
  ) => {
    trackChatEvent(
      "quick_question_click",
      {
        page: pathname || "/",
        label:
          item?.label || "unknown",
        action:
          item?.action ||
          "message",
      }
    );

    if (
      item.action === "consultation"
    ) {
      openConsultationBooking();
      return;
    }

    if (
      item.action === "form"
    ) {
      const latestUserMessage =
        getLatestUserMessage(messages);

      setLeadContext(
        getLeadIntent(latestUserMessage)
      );

      trackChatEvent(
        "start_project",
        {
          page: pathname || "/",
          source: "quick_question",
          intent:
            getLeadIntent(
              latestUserMessage
            )?.type ||
            "general",
        }
      );

      setShowContactForm(true);

      return;
    }

    handleSendMessage(
      item.message
    );
  };

  /* =====================================
     SMART CTA ACTION
  ===================================== */

  const handleSmartAction = (
    item
  ) => {
    if (!item) return;

    const latestUserMessage =
      getLatestUserMessage(messages);

    const currentIntent =
      getLeadIntent(
        latestUserMessage
      );

    trackChatEvent(
      "cta_click",
      {
        page: pathname || "/",
        label:
          item.label || "unknown",
        action:
          item.action || "unknown",
        intent:
          currentIntent?.type ||
          "general",
      }
    );

    if (
      item.action === "consultation"
    ) {
      openConsultationBooking();
      return;
    }

    if (
      item.action === "form"
    ) {
      setLeadContext(
        currentIntent
      );

      trackChatEvent(
        "start_project",
        {
          page: pathname || "/",
          source: "smart_cta",
          intent:
            currentIntent?.type ||
            "general",
        }
      );

      setShowContactForm(true);
      return;
    }

    if (
      item.action === "link" &&
      item.href
    ) {
      trackChatEvent(
        "cta_navigation",
        {
          page: pathname || "/",
          destination:
            item.href,
          label:
            item.label || "",
          intent:
            currentIntent?.type ||
            "general",
        }
      );

      setIsOpen(false);
      router.push(item.href);
      return;
    }

    if (
      item.action === "whatsapp"
    ) {
      const whatsappMessage =
        currentIntent?.whatsapp ||
        DEFAULT_WHATSAPP_MESSAGE;

      trackChatEvent(
        "whatsapp_click",
        {
          page: pathname || "/",
          intent:
            currentIntent?.type ||
            "general",
        }
      );

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  /* =====================================
     OPEN CONSULTATION BOOKING
  ===================================== */

  const openConsultationBooking = () => {
    const latestUserMessage =
      getLatestUserMessage(messages);

    const intent =
      getLeadIntent(
        latestUserMessage
      );

    setConsultationForm(
      (previous) => ({
        ...previous,

        email:
          previous.email ||
          consultationEmail ||
          "",

        service:
          previous.service ||
          (
            intent.type ===
              "ecommerce"
              ? "E-Commerce"
              : intent.type ===
                  "ai"
                ? "AI / Automation"
                : intent.type ===
                    "crm"
                  ? "CRM / Custom Web App"
                  : intent.type ===
                      "uiux"
                    ? "UI/UX Design"
                    : intent.type ===
                        "redesign"
                      ? "Website Redesign"
                      : intent.type ===
                          "personal"
                        ? "Personal Branding"
                        : intent.type ===
                            "website"
                          ? "Web Development"
                          : ""
          ),

        requirement:
          previous.requirement ||
          latestUserMessage ||
          "",
      })
    );

    setConsultationError("");
    setConsultationSuccess("");

    setShowContactForm(false);
    setShowEmailCapture(false);
    setShowConsultationForm(true);

    trackChatEvent(
      "cta_click",
      {
        page: pathname || "/",
        label:
          "Book Consultation",
        action:
          "consultation_booking",
        intent:
          intent?.type ||
          "general",
      }
    );
  };

  /* =====================================
     EMAIL CAPTURE
  ===================================== */

  const submitConsultationEmail =
    async (event) => {
      event.preventDefault();

      const email =
        consultationEmail.trim();

      if (!isValidEmail(email)) {
        setEmailCaptureError(
          "Please enter a valid email address."
        );
        return;
      }

      try {
        setEmailCaptureLoading(true);
        setEmailCaptureError("");

        const response =
          await fetch(
            "/api/consultations",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                type:
                  "email_capture",

                email,

                page:
                  pathname || "/",

                intent:
                  getLeadIntent(
                    pendingConsultationMessage
                  )?.type ||
                  "general",

                sessionId:
                  getChatSessionId(),
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to save email."
          );
        }

        try {
          sessionStorage.setItem(
            CONSULTATION_EMAIL_KEY,
            email
          );

          localStorage.setItem(
            CONSULTATION_EMAIL_KEY,
            email
          );
        } catch (error) {
          console.error(
            "Unable to save consultation email locally:",
            error
          );
        }

        setConsultationForm(
          (previous) => ({
            ...previous,
            email,
          })
        );

        setShowEmailCapture(false);

        const pendingMessage =
          pendingConsultationMessage;

        setPendingConsultationMessage(
          ""
        );

        if (pendingMessage) {
          await handleSendMessage(
            pendingMessage
          );
        }
      } catch (error) {
        setEmailCaptureError(
          error?.message ||
            "Unable to continue right now. Please try again."
        );
      } finally {
        setEmailCaptureLoading(false);
      }
    };

  /* =====================================
     CONSULTATION BOOKING
  ===================================== */

  const handleConsultationChange =
    (event) => {
      const {
        name,
        value,
      } = event.target;

      setConsultationForm(
        (previous) => ({
          ...previous,
          [name]: value,
        })
      );

      setConsultationError("");
      setConsultationSuccess("");
    };

  const submitConsultationBooking =
    async (event) => {
      event.preventDefault();

      const {
        name,
        email,
        phone,
        service,
        date,
        time,
        requirement,
      } = consultationForm;

      if (
        !name.trim() ||
        !email.trim() ||
        !phone.trim() ||
        !service.trim() ||
        !date ||
        !time
      ) {
        setConsultationError(
          "Please fill all required fields."
        );
        return;
      }

      if (!isValidEmail(email)) {
        setConsultationError(
          "Please enter a valid email address."
        );
        return;
      }

      try {
        setConsultationSubmitting(true);
        setConsultationError("");
        setConsultationSuccess("");

        const response =
          await fetch(
            "/api/consultations",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                type: "booking",

                name:
                  name.trim(),

                email:
                  email.trim(),

                phone:
                  phone.trim(),

                service:
                  service.trim(),

                date,
                time,

                requirement:
                  requirement.trim(),

                page:
                  pathname || "/",

                intent:
                  getLeadIntent(
                    requirement ||
                    getLatestUserMessage(
                      messages
                    )
                  )?.type ||
                  "general",

                sessionId:
                  getChatSessionId(),
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to book consultation."
          );
        }

        setConsultationEmail(
          email.trim()
        );

        try {
          sessionStorage.setItem(
            CONSULTATION_EMAIL_KEY,
            email.trim()
          );

          localStorage.setItem(
            CONSULTATION_EMAIL_KEY,
            email.trim()
          );
        } catch (error) {
          console.error(
            "Unable to save consultation email locally:",
            error
          );
        }

        setConsultationSuccess(
          "Consultation request submitted successfully. NexKripa team will contact you to confirm the appointment."
        );

        trackChatEvent(
          "start_project",
          {
            page:
              pathname || "/",

            source:
              "consultation_booking",

            intent:
              getLeadIntent(
                requirement
              )?.type ||
              "general",
          }
        );
      } catch (error) {
        setConsultationError(
          error?.message ||
            "Unable to book consultation right now."
        );
      } finally {
        setConsultationSubmitting(false);
      }
    };

  /* =====================================
     ENTER TO SEND
  ===================================== */

  const handleKeyDown = (
    event
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      handleSendMessage();
    }
  };

  /* =====================================
     RESET / NEW CHAT
  ===================================== */

  const resetChat = () => {
    trackChatEvent(
      "chat_reset",
      {
        page: pathname || "/",
      }
    );

    setMessages(
      pageInitialMessages
    );

    setMessage("");

    setShowContactForm(
      false
    );

    setShowConsultationForm(
      false
    );

    setShowEmailCapture(
      false
    );

    setPendingConsultationMessage(
      ""
    );

    setLeadContext(null);

    setLoading(false);

    try {
      localStorage.removeItem(
        CHAT_STORAGE_KEY
      );
    } catch (error) {
      console.error(
        "Unable to clear NexKripa chat:",
        error
      );
    }
  };

  /* =====================================
     CLOSE CHAT
  ===================================== */

  const closeChatbot = () => {
    trackChatEvent(
      "chat_close",
      {
        page: pathname || "/",
      }
    );

    setIsOpen(false);

    setShowContactForm(
      false
    );

    setShowConsultationForm(
      false
    );

    setShowEmailCapture(
      false
    );

    setPendingConsultationMessage(
      ""
    );

    setLeadContext(null);
  };

  return (
    <>
      {/* ==================================
          CHAT WINDOW
      ================================== */}

      {isOpen && (
        <div className="nk-chatbot-box">

          {/* HEADER */}

          <div className="nk-chatbot-header">

            <div className="nk-chatbot-header-info">

              {showContactForm ||
              showConsultationForm ||
              showEmailCapture ? (
                <button
                  type="button"
                  className="nk-chatbot-back"
                  onClick={() => {
                    setShowContactForm(
                      false
                    );

                    setShowConsultationForm(
                      false
                    );

                    setShowEmailCapture(
                      false
                    );
                  }}
                  aria-label="Back to chat"
                >
                  <ArrowLeft
                    size={19}
                  />
                </button>
              ) : (
                <div className="nk-chatbot-avatar">
                  <AIChatImage
                    size={28}
                    className="nk-ai-chat-image"
                  />
                </div>
              )}

              <div>

                <h3>
                  {showContactForm
                    ? "Start a Project"
                    : showConsultationForm
                      ? "Book Consultation"
                      : showEmailCapture
                        ? "Continue Consultation"
                        : "NexKripa Assistant"}
                </h3>

                {!showContactForm &&
                !showConsultationForm &&
                !showEmailCapture && (
                  <span>
                    <i className="nk-online-dot" />
                    Online
                  </span>
                )}

                {showContactForm && (
                  <span>
                    Tell us about your
                    project
                  </span>
                )}

                {showConsultationForm && (
                  <span>
                    Choose your preferred
                    consultation time
                  </span>
                )}

                {showEmailCapture && (
                  <span>
                    Enter your email to
                    continue
                  </span>
                )}

              </div>

            </div>

            {/* HEADER ACTIONS */}

            <div className="nk-chatbot-header-actions">

              {!showContactForm &&
              !showConsultationForm &&
              !showEmailCapture && (
                <button
                  type="button"
                  className="nk-chatbot-reset"
                  onClick={resetChat}
                  aria-label="Start new chat"
                  title="New Chat"
                >
                  <RotateCcw
                    size={18}
                    strokeWidth={2}
                  />
                </button>
              )}

              <button
                type="button"
                className="nk-chatbot-close"
                onClick={
                  closeChatbot
                }
                aria-label="Close chatbot"
              >
                <X
                  size={21}
                  strokeWidth={2}
                />
              </button>

            </div>

          </div>

          {/* ==================================
              CONTACT FORM VIEW
          ================================== */}

          {showContactForm ? (

            <div className="nk-chatbot-form-view">

              <div className="nk-chatbot-form-intro">

                <div className="nk-form-intro-icon">
                  <BriefcaseBusiness
                    size={20}
                  />
                </div>

                <div>
                  <h4>
                    Have a project in mind?
                  </h4>

                  <p>
                    Share your
                    requirements with
                    NexKripa and our
                    team will get back
                    to you.
                  </p>
                </div>

              </div>

              {leadContext && (
                <div className="nk-lead-context-card">
                  <div className="nk-lead-context-icon">
                    <Lightbulb
                      size={16}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <span>
                      Recommended for you
                    </span>

                    <strong>
                      {leadContext.label}
                    </strong>

                    <p>
                      {leadContext.recommendation}
                    </p>
                  </div>
                </div>
              )}

              <div className="nk-chatbot-contact-form">
                <ContactWizard />
              </div>

            </div>

          ) : showConsultationForm ? (

            <div className="nk-chatbot-form-view nk-consultation-view">

              <div className="nk-chatbot-form-intro">

                <div className="nk-form-intro-icon">
                  <CalendarDays
                    size={20}
                  />
                </div>

                <div>
                  <h4>
                    Book a Consultation
                  </h4>

                  <p>
                    Pick a preferred date and time.
                    Our team will contact you to
                    confirm the appointment.
                  </p>
                </div>

              </div>

              <form
                className="nk-consultation-form"
                onSubmit={
                  submitConsultationBooking
                }
              >
                <div className="nk-consultation-grid">

                  <label>
                    <span>NAME *</span>
                    <input
                      type="text"
                      name="name"
                      value={
                        consultationForm.name
                      }
                      onChange={
                        handleConsultationChange
                      }
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label>
                    <span>EMAIL *</span>
                    <input
                      type="email"
                      name="email"
                      value={
                        consultationForm.email
                      }
                      onChange={
                        handleConsultationChange
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </label>

                  <label>
                    <span>PHONE *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={
                        consultationForm.phone
                      }
                      onChange={
                        handleConsultationChange
                      }
                      placeholder="+91..."
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    <span>SERVICE *</span>
                    <select
                      name="service"
                      value={
                        consultationForm.service
                      }
                      onChange={
                        handleConsultationChange
                      }
                    >
                      <option value="">
                        Select service
                      </option>

                      {CONSULTATION_SERVICES.map(
                        (service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        )
                      )}
                    </select>
                  </label>

                  <label>
                    <span>PREFERRED DATE *</span>
                    <input
                      type="date"
                      name="date"
                      min={
                        getTodayForDateInput()
                      }
                      value={
                        consultationForm.date
                      }
                      onChange={
                        handleConsultationChange
                      }
                    />
                  </label>

                  <label>
                    <span>PREFERRED TIME *</span>
                    <input
                      type="time"
                      name="time"
                      value={
                        consultationForm.time
                      }
                      onChange={
                        handleConsultationChange
                      }
                    />
                  </label>

                </div>

                <label className="nk-consultation-requirement">
                  <span>REQUIREMENT</span>

                  <textarea
                    name="requirement"
                    value={
                      consultationForm.requirement
                    }
                    onChange={
                      handleConsultationChange
                    }
                    placeholder="Briefly tell us what you want to discuss..."
                    rows={4}
                  />
                </label>

                {consultationError && (
                  <div className="nk-consultation-error">
                    {consultationError}
                  </div>
                )}

                {consultationSuccess && (
                  <div className="nk-consultation-success">
                    {consultationSuccess}
                  </div>
                )}

                <button
                  type="submit"
                  className="nk-consultation-submit"
                  disabled={
                    consultationSubmitting
                  }
                >
                  {consultationSubmitting
                    ? "BOOKING..."
                    : "REQUEST CONSULTATION"}
                </button>

              </form>

            </div>

          ) : showEmailCapture ? (

            <div className="nk-chatbot-form-view nk-email-capture-view">

              <div className="nk-email-capture-card">

                <div className="nk-email-capture-icon">
                  <Mail
                    size={22}
                    strokeWidth={2}
                  />
                </div>

                <h4>
                  Continue your consultation
                </h4>

                <p>
                  For a detailed consultation,
                  enter your email once. You can
                  continue the conversation
                  immediately after that.
                </p>

                <form
                  onSubmit={
                    submitConsultationEmail
                  }
                >
                  <input
                    type="email"
                    value={
                      consultationEmail
                    }
                    onChange={(event) => {
                      setConsultationEmail(
                        event.target.value
                      );

                      setEmailCaptureError(
                        ""
                      );
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    autoFocus
                  />

                  {emailCaptureError && (
                    <div className="nk-email-capture-error">
                      {emailCaptureError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      emailCaptureLoading
                    }
                  >
                    {emailCaptureLoading
                      ? "CONTINUING..."
                      : "CONTINUE CONSULTATION"}
                  </button>
                </form>

                <button
                  type="button"
                  className="nk-email-book-consultation"
                  onClick={
                    openConsultationBooking
                  }
                >
                  Book a Consultation Instead
                </button>

              </div>

            </div>

          ) : (

            <>
              {/* ==================================
                  CHAT MESSAGES
              ================================== */}

              <div className="nk-chatbot-messages">

                {messages.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={`${item.role}-${index}`}
                      className={
                        item.role ===
                        "user"
                          ? "nk-message-row nk-user-row"
                          : "nk-message-row nk-bot-row"
                      }
                    >

                      {item.role ===
                        "assistant" && (
                        <div className="nk-message-avatar">

                          <AIChatImage
                            size={19}
                            className="nk-ai-message-image"
                          />

                        </div>
                      )}

                      <div className="nk-message-content-wrap">
                        <div
                          className={
                            item.role ===
                            "user"
                              ? "nk-user-message"
                              : "nk-bot-message"
                          }
                        >
                          {item.role ===
                          "assistant"
                            ? formatBotMessage(
                                item.content
                              )
                            : item.content}
                        </div>
                      </div>

                    </div>
                  )
                )}

                {/* ==================================
                    SMART ACTIONS AFTER LATEST AI REPLY
                ================================== */}

                {messages.length > 1 &&
                  !loading &&
                  messages[
                    messages.length - 1
                  ]?.role ===
                    "assistant" && (
                    <div className="nk-response-actions-wrapper">

                      <div className="nk-smart-actions">
                        {getSmartActions(
                          messages[
                            messages.length - 1
                          ]?.content || "",
                          getLatestUserMessage(
                            messages
                          )
                        ).map(
                          (action) => (
                            <button
                              key={`${action.action}-${action.label}`}
                              type="button"
                              onClick={() =>
                                handleSmartAction(
                                  action
                                )
                              }
                            >
                              {action.action ===
                              "whatsapp" ? (
                                <MessageCircle
                                  size={14}
                                  strokeWidth={2}
                                />
                              ) : (
                                <ArrowUpRight
                                  size={14}
                                  strokeWidth={2}
                                />
                              )}

                              <span>
                                {action.label}
                              </span>
                            </button>
                          )
                        )}

                        <button
                          type="button"
                          onClick={
                            openConsultationBooking
                          }
                        >
                          <CalendarDays
                            size={14}
                            strokeWidth={2}
                          />

                          <span>
                            Book Consultation
                          </span>
                        </button>
                      </div>

                    </div>
                  )}

                {/* QUICK QUESTIONS */}

                {messages.length ===
                  1 &&
                  !loading && (
                    <div className="nk-quick-wrapper">

                      <p className="nk-quick-title">
                        You can ask AI
                      </p>

                      <div className="nk-quick-questions">

                        {pageAssistantConfig.quickQuestions.map(
                          (item) => (
                            <button
                              key={
                                item.label
                              }
                              type="button"
                              onClick={() =>
                                handleQuickQuestion(
                                  item
                                )
                              }
                            >
                              {
                                item.label
                              }

                              <span>
                                →
                              </span>
                            </button>
                          )
                        )}

                        <button
                          type="button"
                          onClick={
                            openConsultationBooking
                          }
                        >
                          Book Consultation

                          <span>
                            →
                          </span>
                        </button>

                      </div>

                      <div className="nk-faq-shortcuts">
                        <p className="nk-faq-shortcuts-title">
                          Popular questions
                        </p>

                        <div className="nk-faq-shortcuts-list">
                          {FAQ_SHORTCUTS.map(
                            (item) => (
                              <button
                                key={item.label}
                                type="button"
                                onClick={() =>
                                  handleSendMessage(
                                    item.message
                                  )
                                }
                              >
                                {item.label}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                    </div>
                  )}

                {/* TYPING */}

                {loading && (
                  <div className="nk-message-row nk-bot-row">

                    <div className="nk-message-avatar">

                      <AIChatImage
                        size={19}
                        className="nk-ai-message-image"
                      />

                    </div>

                    <div className="nk-chat-typing">
                      <span className="nk-chat-typing-label">
                        NexKripa AI is responding
                      </span>

                      <div className="nk-chat-typing-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>

                  </div>
                )}

                <div
                  ref={
                    messagesEndRef
                  }
                />

              </div>

              {/* ==================================
                  INPUT
              ================================== */}

              <div className="nk-chatbot-footer">

                <div className="nk-chatbot-input-area">

                  <input
                    type="text"
                    placeholder={
                      !serverMemoryLoaded
                        ? "Loading previous chat..."
                        : loading
                          ? "NexKripa AI is responding..."
                          : "Ask NexKripa..."
                    }
                    value={message}
                    disabled={
                      loading ||
                      !serverMemoryLoaded
                    }
                    autoComplete="off"
                    onChange={(
                      event
                    ) =>
                      setMessage(
                        event.target
                          .value
                      )
                    }
                    onKeyDown={
                      handleKeyDown
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      handleSendMessage()
                    }
                    disabled={
                      loading ||
                      !serverMemoryLoaded ||
                      !message.trim()
                    }
                    aria-label="Send message"
                  >
                    <Send
                      size={18}
                      strokeWidth={
                        2
                      }
                    />
                  </button>

                </div>

                <div className="nk-chat-privacy">
                  <ShieldCheck
                    size={12}
                    strokeWidth={2}
                  />

                  <span>
                    Please don&apos;t share passwords or sensitive information.
                  </span>
                </div>

              </div>
            </>
          )}

        </div>
      )}

      {/* ==================================
          DESKTOP FLOATING BUTTON
      ================================== */}

      <button
        type="button"
        className="nk-chatbot-floating-btn"
        onClick={() => {
          if (isOpen) {
            closeChatbot();
          } else {
            setIsOpen(true);

            trackChatEvent(
              "chat_open",
              {
                source:
                  "desktop_floating",
                page:
                  pathname || "/",
              }
            );
          }
        }}
        aria-label={
          isOpen
            ? "Close NexKripa Assistant"
            : "Open NexKripa Assistant"
        }
      >

        {isOpen ? (
          <X
            size={25}
            strokeWidth={2}
          />
        ) : (
          <AIChatImage
            size={38}
            className="nk-ai-floating-image"
          />
        )}

      </button>

    </>
  );
}