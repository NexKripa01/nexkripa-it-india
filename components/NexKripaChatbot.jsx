"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Send,
  X,
  ArrowLeft,
  BriefcaseBusiness,
  RotateCcw,
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

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content:
      "Hi 👋 Welcome to NexKripa. How can I help you today?",
  },
];

const CHAT_STORAGE_KEY =
  "nexkripa-chat-history";

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

export default function NexKripaChatbot() {
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

  const [messages, setMessages] =
    useState(INITIAL_MESSAGES);

  const [chatLoaded, setChatLoaded] =
    useState(false);

  const messagesEndRef =
    useRef(null);

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
              validMessages.slice(-20)
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
     SAVE CHAT
  ===================================== */

  useEffect(() => {
    if (!chatLoaded) return;

    try {
      if (messages.length > 1) {
        localStorage.setItem(
          CHAT_STORAGE_KEY,
          JSON.stringify(
            messages.slice(-20)
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
  }, []);

  /* =====================================
     AUTO SCROLL
  ===================================== */

  useEffect(() => {
    if (
      !showContactForm &&
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
      loading
    ) {
      return;
    }

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
            messages: conversation,
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
    if (
      item.action === "form"
    ) {
      setShowContactForm(true);

      return;
    }

    handleSendMessage(
      item.message
    );
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
    setMessages(
      INITIAL_MESSAGES
    );

    setMessage("");

    setShowContactForm(
      false
    );

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
    setIsOpen(false);

    setShowContactForm(
      false
    );
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

              {showContactForm ? (
                <button
                  type="button"
                  className="nk-chatbot-back"
                  onClick={() =>
                    setShowContactForm(
                      false
                    )
                  }
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
                    : "NexKripa Assistant"}
                </h3>

                {!showContactForm && (
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

              </div>

            </div>

            {/* HEADER ACTIONS */}

            <div className="nk-chatbot-header-actions">

              {!showContactForm &&
                messages.length > 1 && (
                  <button
                    type="button"
                    className="nk-chatbot-reset"
                    onClick={
                      resetChat
                    }
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

              <div className="nk-chatbot-contact-form">
                <ContactWizard />
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
                  )
                )}

                {/* QUICK QUESTIONS */}

                {messages.length ===
                  1 &&
                  !loading && (
                    <div className="nk-quick-wrapper">

                      <p className="nk-quick-title">
                        You can ask me
                      </p>

                      <div className="nk-quick-questions">

                        {QUICK_QUESTIONS.map(
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
                      <span />
                      <span />
                      <span />
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

              <div className="nk-chatbot-input-area">

                <input
                  type="text"
                  placeholder={
                    loading
                      ? "NexKripa is thinking..."
                      : "Ask NexKripa..."
                  }
                  value={message}
                  disabled={
                    loading
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