"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

function formatAnalyticsEventName(
  eventName
) {
  const labels = {
    chat_open: "Chat Open",
    chat_close: "Chat Close",
    chat_reset: "New Chat",
    message_sent: "Message Sent",
    quick_question_click:
      "Quick Question",
    cta_click: "CTA Click",
    cta_navigation: "CTA Navigation",
    start_project: "Project Lead",
    whatsapp_click:
      "WhatsApp Click",
    page_context: "Page Visit",
  };

  return (
    labels[eventName] ||
    eventName ||
    "Activity"
  );
}

function formatAnalyticsTime(
  timestamp
) {
  if (!timestamp) {
    return "—";
  }

  const date =
    new Date(timestamp);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "—";
  }

  return date.toLocaleString(
    "en-IN",
    {
      dateStyle: "medium",
      timeStyle: "short",
    }
  );
}

function formatConsultationCreatedAt(
  timestamp
) {
  if (!timestamp) {
    return "—";
  }

  const date =
    new Date(timestamp);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "—";
  }

  return date.toLocaleString(
    "en-IN",
    {
      dateStyle: "medium",
      timeStyle: "short",
    }
  );
}

export default function DemoRequestsAdminPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [approvingId, setApprovingId] = useState("");
  const [error, setError] = useState("");

  const [demoLinks, setDemoLinks] = useState({});

  const [
    analyticsSummary,
    setAnalyticsSummary,
  ] = useState({
    totalEvents: 0,
    chatOpens: 0,
    messages: 0,
    projectLeads: 0,
    whatsappClicks: 0,
    ctaClicks: 0,
    topIntent: "—",
    topPage: "—",
  });

  const [
    recentAnalytics,
    setRecentAnalytics,
  ] = useState([]);

  const [
    analyticsLoading,
    setAnalyticsLoading,
  ] = useState(true);

  const [
    analyticsError,
    setAnalyticsError,
  ] = useState("");

  const [
    deletingAnalytics,
    setDeletingAnalytics,
  ] = useState(false);

  const [
    analyticsSuccess,
    setAnalyticsSuccess,
  ] = useState("");

  const [
    consultations,
    setConsultations,
  ] = useState([]);

  const [
    consultationsLoading,
    setConsultationsLoading,
  ] = useState(true);

  const [
    consultationsError,
    setConsultationsError,
  ] = useState("");

  const [
    updatingConsultationId,
    setUpdatingConsultationId,
  ] = useState("");

  const [
    deletingConsultationId,
    setDeletingConsultationId,
  ] = useState("");

  const loadAnalytics =
    useCallback(async () => {
      try {
        setAnalyticsLoading(true);
        setAnalyticsError("");

        const response =
          await fetch(
            "/api/chatbot-analytics",
            {
              cache: "no-store",
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to load chatbot analytics."
          );
        }

        setAnalyticsSummary({
          totalEvents:
            data.summary
              ?.totalEvents || 0,

          chatOpens:
            data.summary
              ?.chatOpens || 0,

          messages:
            data.summary
              ?.messages || 0,

          projectLeads:
            data.summary
              ?.projectLeads || 0,

          whatsappClicks:
            data.summary
              ?.whatsappClicks || 0,

          ctaClicks:
            data.summary
              ?.ctaClicks || 0,

          topIntent:
            data.summary
              ?.topIntent || "—",

          topPage:
            data.summary
              ?.topPage || "—",
        });

        setRecentAnalytics(
          Array.isArray(
            data.recent
          )
            ? data.recent
            : []
        );
      } catch (err) {
        setAnalyticsError(
          err.message ||
            "Unable to load chatbot analytics."
        );
      } finally {
        setAnalyticsLoading(false);
      }
    }, []);

  const clearAnalytics =
    useCallback(async () => {
      const confirmed =
        window.confirm(
          "Are you sure you want to delete all chatbot analytics? This action cannot be undone."
        );

      if (!confirmed) {
        return;
      }

      try {
        setDeletingAnalytics(true);
        setAnalyticsError("");
        setAnalyticsSuccess("");

        const response =
          await fetch(
            "/api/chatbot-analytics",
            {
              method: "DELETE",
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to delete chatbot analytics."
          );
        }

        setAnalyticsSuccess(
          `Analytics cleared successfully. ${data.deletedCount || 0} events deleted.`
        );

        await loadAnalytics();
      } catch (err) {
        setAnalyticsError(
          err.message ||
            "Unable to delete chatbot analytics."
        );
      } finally {
        setDeletingAnalytics(false);
      }
    }, [loadAnalytics]);

  const loadConsultations =
    useCallback(async () => {
      try {
        setConsultationsLoading(true);
        setConsultationsError("");

        const response =
          await fetch(
            "/api/consultations",
            {
              cache: "no-store",
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to load consultation requests."
          );
        }

        setConsultations(
          Array.isArray(
            data.consultations
          )
            ? data.consultations
            : []
        );
      } catch (err) {
        setConsultationsError(
          err.message ||
            "Unable to load consultation requests."
        );
      } finally {
        setConsultationsLoading(false);
      }
    }, []);

  const updateConsultationStatus =
    async (
      id,
      status
    ) => {
      try {
        setUpdatingConsultationId(
          id
        );

        setConsultationsError("");

        const response =
          await fetch(
            "/api/consultations",
            {
              method: "PATCH",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                id,
                status,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to update consultation."
          );
        }

        await loadConsultations();
      } catch (err) {
        setConsultationsError(
          err.message ||
            "Unable to update consultation."
        );
      } finally {
        setUpdatingConsultationId(
          ""
        );
      }
    };

  const deleteConsultation =
    async (id) => {
      const confirmed =
        window.confirm(
          "Delete this consultation request? This action cannot be undone."
        );

      if (!confirmed) {
        return;
      }

      try {
        setDeletingConsultationId(
          id
        );

        setConsultationsError("");

        const response =
          await fetch(
            "/api/consultations",
            {
              method: "DELETE",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                id,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to delete consultation."
          );
        }

        await loadConsultations();
      } catch (err) {
        setConsultationsError(
          err.message ||
            "Unable to delete consultation."
        );
      } finally {
        setDeletingConsultationId(
          ""
        );
      }
    };

  const loadRequests = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/demo-requests", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to load requests."
        );
      }

      const requestData = data.requests || [];

      setRequests(requestData);

      const savedLinks = {};

      requestData.forEach((item) => {
        if (item.demoUrl) {
          savedLinks[item._id] = item.demoUrl;
        }
      });

      setDemoLinks(savedLinks);
    } catch (err) {
      setError(
        err.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRequests();
    loadAnalytics();
    loadConsultations();
  }, [
    loadRequests,
    loadAnalytics,
    loadConsultations,
  ]);

  const handleDemoLinkChange = (id, value) => {
    setDemoLinks((previous) => ({
      ...previous,
      [id]: value,
    }));

    setError("");
  };

  const approveRequest = async (id) => {
    const demoUrl = demoLinks[id]?.trim();

    if (!demoUrl) {
      setError(
        "Please enter the demo URL before approving."
      );
      return;
    }

    try {
      setApprovingId(id);
      setError("");

      const response = await fetch(
        `/api/demo-requests/${id}/approve`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            demoUrl,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to approve request."
        );
      }

      await loadRequests();
    } catch (err) {
      setError(
        err.message || "Something went wrong."
      );
    } finally {
      setApprovingId("");
    }
  };

  return (
    <main className="demo-admin-page">
      <div className="demo-admin-container">

        <div className="demo-admin-header">
          <span>NEXKRIPA / ADMIN</span>

          <h1>
            DEMO
            <br />
            REQUESTS
          </h1>

          <p>
            Add the exact demo link for each user,
            approve the request and generate a
            one-time access code.
          </p>
        </div>

        {/* ==================================
            CHATBOT ANALYTICS
        ================================== */}

        <section className="nk-admin-analytics">

          <div className="nk-admin-analytics-head">
            <div>
              <span>
                NEXKRIPA AI
              </span>

              <h2>
                CHATBOT ANALYTICS
              </h2>

              <p>
                Live chatbot activity collected
                from website visitors.
              </p>
            </div>

            <div className="nk-admin-analytics-actions">
              <button
                type="button"
                onClick={
                  loadAnalytics
                }
                disabled={
                  analyticsLoading ||
                  deletingAnalytics
                }
              >
                {analyticsLoading
                  ? "REFRESHING..."
                  : "REFRESH"}
              </button>

              <button
                type="button"
                className="nk-admin-clear-analytics"
                onClick={
                  clearAnalytics
                }
                disabled={
                  deletingAnalytics ||
                  analyticsLoading
                }
              >
                {deletingAnalytics
                  ? "CLEARING..."
                  : "CLEAR ANALYTICS"}
              </button>
            </div>
          </div>

          <div className="nk-admin-analytics-grid">

            <article>
              <span>
                CHAT OPENS
              </span>
              <strong>
                {
                  analyticsSummary.chatOpens
                }
              </strong>
            </article>

            <article>
              <span>
                MESSAGES
              </span>
              <strong>
                {
                  analyticsSummary.messages
                }
              </strong>
            </article>

            <article>
              <span>
                PROJECT LEADS
              </span>
              <strong>
                {
                  analyticsSummary.projectLeads
                }
              </strong>
            </article>

            <article>
              <span>
                WHATSAPP
              </span>
              <strong>
                {
                  analyticsSummary.whatsappClicks
                }
              </strong>
            </article>

            <article>
              <span>
                CTA CLICKS
              </span>
              <strong>
                {
                  analyticsSummary.ctaClicks
                }
              </strong>
            </article>

            <article>
              <span>
                TOP INTENT
              </span>
              <strong className="nk-admin-analytics-text-value">
                {
                  analyticsSummary.topIntent
                }
              </strong>
            </article>

            <article>
              <span>
                TOP PAGE
              </span>
              <strong className="nk-admin-analytics-text-value">
                {
                  analyticsSummary.topPage
                }
              </strong>
            </article>

          </div>

          {analyticsSuccess && (
            <div className="nk-admin-analytics-success">
              {analyticsSuccess}
            </div>
          )}

          <div className="nk-admin-analytics-recent">

            <div className="nk-admin-analytics-recent-head">
              <h3>
                RECENT ACTIVITY
              </h3>

              <span>
                {
                  analyticsSummary.totalEvents
                }{" "}
                EVENTS
              </span>
            </div>

            {analyticsLoading ? (
              <div className="nk-admin-analytics-empty">
                LOADING CHATBOT ANALYTICS...
              </div>
            ) : analyticsError ? (
              <div className="nk-admin-analytics-empty">
                {analyticsError}
              </div>
            ) : recentAnalytics.length === 0 ? (
              <div className="nk-admin-analytics-empty">
                NO CHATBOT ACTIVITY FOUND YET.
              </div>
            ) : (
              <div className="nk-admin-analytics-activity-list">

                {recentAnalytics.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={`${item.timestamp}-${item.event}-${index}`}
                      className="nk-admin-analytics-activity"
                    >
                      <div>
                        <strong>
                          {formatAnalyticsEventName(
                            item.event
                          )}
                        </strong>

                        <span>
                          {item.page || "/"}
                        </span>
                      </div>

                      <div className="nk-admin-analytics-activity-meta">

                        {item.intent && (
                          <span>
                            {item.intent}
                          </span>
                        )}

                        <time>
                          {formatAnalyticsTime(
                            item.timestamp
                          )}
                        </time>

                      </div>
                    </div>
                  )
                )}

              </div>
            )}

          </div>

          <p className="nk-admin-analytics-note">
            Analytics are loaded from MongoDB and
            include website visitors across devices.
            Message text is not stored in analytics.
          </p>

        </section>

        {/* ==================================
            CONSULTATION REQUESTS
        ================================== */}

        <section className="nk-admin-consultations">

          <div className="nk-admin-consultations-head">
            <div>
              <span>
                NEXKRIPA / CONSULTATIONS
              </span>

              <h2>
                CONSULTATION REQUESTS
              </h2>

              <p>
                Appointment bookings and email
                captures from the NexKripa chatbot.
              </p>
            </div>

            <button
              type="button"
              onClick={
                loadConsultations
              }
              disabled={
                consultationsLoading
              }
            >
              {consultationsLoading
                ? "REFRESHING..."
                : "REFRESH"}
            </button>
          </div>

          {consultationsError && (
            <div className="nk-admin-consultations-error">
              {consultationsError}
            </div>
          )}

          {consultationsLoading ? (
            <div className="nk-admin-consultations-empty">
              LOADING CONSULTATION REQUESTS...
            </div>
          ) : consultations.length === 0 ? (
            <div className="nk-admin-consultations-empty">
              NO CONSULTATION REQUESTS FOUND.
            </div>
          ) : (
            <div className="nk-admin-consultations-list">

              {consultations.map(
                (consultation) => (
                  <article
                    key={
                      consultation._id
                    }
                    className="nk-admin-consultation-card"
                  >

                    <div className="nk-admin-consultation-top">
                      <div>
                        <span className="nk-admin-consultation-type">
                          {consultation.type ===
                          "email_capture"
                            ? "EMAIL CAPTURE"
                            : "CONSULTATION"}
                        </span>

                        <h3>
                          {consultation.name ||
                            consultation.email ||
                            "Visitor"}
                        </h3>
                      </div>

                      <span
                        className={`nk-admin-consultation-status ${
                          consultation.status ||
                          "captured"
                        }`}
                      >
                        {consultation.type ===
                        "email_capture"
                          ? "CAPTURED"
                          : (
                              consultation.status ||
                              "pending"
                            ).toUpperCase()}
                      </span>
                    </div>

                    <div className="nk-admin-consultation-details">

                      <div>
                        <span>EMAIL</span>
                        <strong>
                          {consultation.email ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>PHONE</span>
                        <strong>
                          {consultation.phone ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>SERVICE</span>
                        <strong>
                          {consultation.service ||
                            consultation.intent ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>PREFERRED DATE</span>
                        <strong>
                          {consultation.date ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>PREFERRED TIME</span>
                        <strong>
                          {consultation.time ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>RECEIVED</span>
                        <strong>
                          {formatConsultationCreatedAt(
                            consultation.createdAt
                          )}
                        </strong>
                      </div>

                    </div>

                    {consultation.requirement && (
                      <div className="nk-admin-consultation-requirement">
                        <span>
                          REQUIREMENT
                        </span>

                        <p>
                          {consultation.requirement}
                        </p>
                      </div>
                    )}

                    <div className="nk-admin-consultation-meta">
                      <span>
                        Page:{" "}
                        {consultation.page ||
                          "/"}
                      </span>

                      {consultation.intent && (
                        <span>
                          Intent:{" "}
                          {consultation.intent}
                        </span>
                      )}
                    </div>

                    <div className="nk-admin-consultation-actions">

                      {consultation.type !==
                        "email_capture" && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              updateConsultationStatus(
                                consultation._id,
                                "confirmed"
                              )
                            }
                            disabled={
                              updatingConsultationId ===
                                consultation._id ||
                              consultation.status ===
                                "confirmed"
                            }
                          >
                            {updatingConsultationId ===
                              consultation._id
                              ? "UPDATING..."
                              : "CONFIRM"}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              updateConsultationStatus(
                                consultation._id,
                                "completed"
                              )
                            }
                            disabled={
                              updatingConsultationId ===
                                consultation._id ||
                              consultation.status ===
                                "completed"
                            }
                          >
                            COMPLETE
                          </button>
                        </>
                      )}

                      <button
                        type="button"
                        className="nk-admin-consultation-delete"
                        onClick={() =>
                          deleteConsultation(
                            consultation._id
                          )
                        }
                        disabled={
                          deletingConsultationId ===
                          consultation._id
                        }
                      >
                        {deletingConsultationId ===
                        consultation._id
                          ? "DELETING..."
                          : "DELETE"}
                      </button>

                    </div>

                  </article>
                )
              )}

            </div>
          )}

        </section>

        {error && (
          <div className="demo-admin-error">
            {error}
          </div>
        )}

        {loading ? (
          <div className="demo-admin-message">
            LOADING REQUESTS...
          </div>
        ) : requests.length === 0 ? (
          <div className="demo-admin-message">
            NO DEMO REQUESTS FOUND.
          </div>
        ) : (
          <div className="demo-admin-list">

            {requests.map((request) => (
              <article
                key={request._id}
                className="demo-admin-card"
              >
                <div className="demo-admin-card-top">

                  <div>
                    <span className="demo-admin-type">
                      {request.demoType}
                    </span>

                    <h2>
                      {request.name}
                    </h2>
                  </div>

                  <span
                    className={`demo-admin-status ${
                      request.approved
                        ? "approved"
                        : "pending"
                    }`}
                  >
                    {request.approved
                      ? "APPROVED"
                      : "PENDING"}
                  </span>

                </div>

                <div className="demo-admin-details">

                  <div>
                    <span>EMAIL</span>
                    <strong>
                      {request.email}
                    </strong>
                  </div>

                  <div>
                    <span>PHONE</span>
                    <strong>
                      {request.phone}
                    </strong>
                  </div>

                  <div>
                    <span>REQUESTED DEMO</span>
                    <strong>
                      {request.demoType}
                    </strong>
                  </div>

                </div>

                {request.approved &&
                request.accessCode ? (
                  <>
                    <div className="demo-admin-approved-link">
                      <span>DEMO LINK</span>

                      <a
                        href={request.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {request.demoUrl}
                      </a>
                    </div>

                    <div className="demo-admin-code">

                      <div>
                        <span>ACCESS CODE</span>

                        <strong>
                          {request.accessCode}
                        </strong>
                      </div>

                      <span
                        className={
                          request.used
                            ? "demo-code-used"
                            : "demo-code-active"
                        }
                      >
                        {request.used
                          ? "USED"
                          : "ACTIVE"}
                      </span>

                    </div>
                  </>
                ) : (
                  <div className="demo-admin-approval-area">

                    <div className="demo-admin-url-field">
                      <label
                        htmlFor={`demo-url-${request._id}`}
                      >
                        DEMO LINK
                      </label>

                      <input
                        id={`demo-url-${request._id}`}
                        type="url"
                        value={
                          demoLinks[request._id] || ""
                        }
                        onChange={(event) =>
                          handleDemoLinkChange(
                            request._id,
                            event.target.value
                          )
                        }
                        placeholder="https://your-demo-website.com"
                      />
                    </div>

                    <button
                      type="button"
                      className="demo-admin-approve"
                      onClick={() =>
                        approveRequest(request._id)
                      }
                      disabled={
                        approvingId === request._id
                      }
                    >
                      {approvingId === request._id
                        ? "GENERATING..."
                        : "APPROVE & GENERATE CODE"}
                    </button>

                  </div>
                )}

              </article>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}