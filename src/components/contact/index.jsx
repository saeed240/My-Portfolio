import { useState } from "react";

// internal imports
import "./styles.css";
import cv from "../../logos/cv.pdf";

// contact section
function Contact() {
  const formSubmitEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL?.trim();
  const isConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formSubmitEmail ?? "");
  const formAction = isConfigured
    ? `https://formsubmit.co/${formSubmitEmail}`
    : undefined;
  const ajaxEndpoint = isConfigured
    ? `https://formsubmit.co/ajax/${formSubmitEmail}`
    : undefined;
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  // handle submit
  async function handleSubmit(event) {
    event.preventDefault();

    if (!ajaxEndpoint) {
      setStatus({
        message: "Contact form is not configured yet. Please try again later.",
        type: "error",
      });
      return;
    }
    const form = event.currentTarget;
    setIsSending(true);
    setStatus({ message: "Sending your message…", type: "" });

    try {
      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("Unable to send message");
      }
      form.reset();
      setStatus({
        message: "Thanks — your message has been sent.",
        type: "success",
      });
    } catch {
      setStatus({
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell section-shell">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">
            Have an idea?
            <br />
            <em>Let’s make it real</em>
          </h2>
          <p>
            Whether it’s a project, an opportunity, or a quick hello, I’d love
            to hear from you.
          </p>
          <div className="contact-links">
            <a
              href="https://linkedin.com/in/ibrahim-saeed-88783342a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/saeed240"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              CV <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          action={formAction}
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            className="honey-field"
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="field-row">
            <div className="field">
              <label htmlFor="full-name">Your name</label>
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="full name"
                autoComplete="name"
                minLength={2}
                maxLength={80}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Tell me about your project</label>
            <textarea
              name="message"
              id="message"
              placeholder="A little context goes a long way…"
              maxLength={1000}
              minLength={10}
              required
            />
          </div>
          <button className="submit-button" type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send message"}
            <span aria-hidden="true">→</span>
          </button>
          <p
            className={`form-status ${status.type}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
export default Contact;
