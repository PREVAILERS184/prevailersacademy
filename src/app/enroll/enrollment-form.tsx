"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "ready";

export default function EnrollmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const body = [
      "Enrollment enquiry for Prevailers Academia Star Ltd",
      "",
      `Parent or guardian: ${fields.get("contactName")}`,
      `Email: ${fields.get("email")}`,
      `Phone: ${fields.get("phone") || "Not provided"}`,
      `Learner's stage: ${fields.get("stage")}`,
      `Subject of interest: ${fields.get("subject")}`,
      "",
      "Learning goals:",
      String(fields.get("goals") || "Not provided"),
    ].join("\n");
    const url = `mailto:prevailersacademiastarltd@gmail.com?subject=${encodeURIComponent("New enrollment enquiry")}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
    setMessage("Your email app should open with your enquiry. Please send the prepared email to complete your request.");
    window.location.href = url;
  }

  return <form className="enroll-form" onSubmit={handleSubmit}>
    <h2>Enrollment enquiry</h2>
    <p>Fields marked * are required.</p>
    <div className="form-grid">
      <label>Parent or guardian name *<input name="contactName" type="text" autoComplete="name" maxLength={100} required placeholder="Your full name" /></label>
      <label>Email address *<input name="email" type="email" autoComplete="email" maxLength={150} required placeholder="you@example.com" /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="Optional" /></label>
      <label>Learner&apos;s stage *<select name="stage" required defaultValue=""><option value="" disabled>Select a stage</option><option>Primary school</option><option>Secondary school</option><option>Post-secondary</option><option>Adult learner</option><option>Other</option></select></label>
      <label className="full">Subject of interest *<select name="subject" required defaultValue=""><option value="" disabled>Select a subject</option><option>Mathematics</option><option>English & literacy</option><option>Biology</option><option>Chemistry</option><option>Physics</option><option>Exam preparation</option><option>Study skills</option><option>Other / not sure yet</option></select></label>
      <label className="full">What would you like help with?<textarea name="goals" rows={5} maxLength={500} placeholder="Tell us a little about your learning goals (optional)" /></label>
    </div>
    <label className="form-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted about this enrollment enquiry. *</span></label>
    <div className="form-submit-row"><button className="button button-dark" type="submit">Prepare email <span aria-hidden="true">↗</span></button><p>Your email app will open with a prepared message. Please send it to complete your enquiry.</p></div>
    <div className={`form-status ${status}`} role="status" aria-live="polite">{message}{status === "ready" && <> If it did not open, email <a href="mailto:prevailersacademiastarltd@gmail.com">prevailersacademiastarltd@gmail.com</a> directly.</>}</div>
  </form>;
}
