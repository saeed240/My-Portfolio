//internal import
import "./styles.css";

function Contact() {
  const contactEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector("button[type='submit']");
    const status = form.querySelector("[role='status']");

    if (!contactEndpoint) {
      status.textContent = "Contact form is not configured yet.";
      status.className = "form-status error";
      return;
    }

    submitButton.disabled = true;
    status.textContent = "Sending...";
    status.className = "form-status";

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      status.textContent = "Thanks, your message has been sent.";
      status.className = "form-status success";
    } catch {
      status.textContent = "Something went wrong. Please try again later.";
      status.className = "form-status error";
    } finally {
      submitButton.disabled = false;
    }
  }

  return (
    <>
      <div className="contact-container">
        <h2>Contact Me_______</h2>

        <div className="socials">
          <a href="https://linkedin.com/in/ibrahim-saeed-88783342a/">
            <p>LINKEDIN</p>
          </a>
          <a href="https://github.com/saeed240">
            <p>GITHUB</p>
          </a>
          <a href="resume">
            <p>RESUME</p>
          </a>
        </div>

        <div className="message">
          <h2>Get In Touch</h2>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="full-name" aria-label="full-name">
              FULL NAME{" "}
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="enter your full name"
                autoComplete="name"
                required
              />
            </label>

            <label htmlFor="email" aria-label="email address">
              EMAIL{" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor="message" aria-label="message">
              MESSAGE
              <textarea
                name="message"
                id="message"
                placeholder="Please write your message here!"
                maxLength={500}
                required
              ></textarea>
            </label>
            <button type="submit">SEND</button>
            <p className="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
