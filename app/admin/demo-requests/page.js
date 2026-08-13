"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

export default function DemoRequestsAdminPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [approvingId, setApprovingId] = useState("");
  const [error, setError] = useState("");

  const [demoLinks, setDemoLinks] = useState({});

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
  }, [loadRequests]);

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