import type { Metadata } from "next";
import EnrollmentForm from "./enrollment-form";

export const metadata: Metadata = {
  title: "Enroll Now | Prevailers Academia Star Ltd",
  description: "Tell Prevailers what kind of online tutoring support you are looking for.",
};

export default function EnrollPage() {
  return <main><section className="page-hero enroll-hero"><div className="page-width"><div className="section-kicker light"><span className="red-dot" /> ENROLLMENT</div><h1>Take the first<br /><em>step forward.</em></h1><p>Share a few details about the learner and the support you are looking for. We’ll use them to understand your enquiry.</p></div></section><section className="enroll-section page-width"><div className="enroll-side"><div className="section-kicker"><span className="red-dot" /> START HERE</div><h2>Tell us about<br /><em>your goals.</em></h2><p>This is an initial enquiry for online tutoring. Please use a parent or guardian’s contact details when asking about a learner under 18.</p><div className="enroll-aside-note"><span>01 / EXPLORE</span><p>Browse learning areas to find a useful starting point.</p><span>02 / SHARE</span><p>Tell us the subject and learning stage you have in mind.</p><span>03 / CONNECT</span><p>Your request can help guide the next conversation.</p></div></div><EnrollmentForm /></section></main>;
}
