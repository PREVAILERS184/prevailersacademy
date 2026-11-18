import Image from "next/image";
import Link from "next/link";
import { classPhotos } from "./gallery/photos";

const subjects = [
  { number: "01", title: "Mathematics", detail: "Build confidence with numbers, problem solving, and exam preparation." },
  { number: "02", title: "English & literacy", detail: "Strengthen reading, writing, comprehension, and communication." },
  { number: "03", title: "Science", detail: "Explore key concepts in biology, chemistry, and physics with clarity." },
  { number: "04", title: "Exam support", detail: "Focused practice and guidance for important assessments." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/online-tutoring-hero.png" alt="Student taking notes during an online tutoring session at home" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <p className="eyebrow light">PREVAILERS ACADEMIA STAR LTD · ONLINE TUTORING</p>
          <h1 id="hero-title">A place to learn.<br /><em>A way to thrive.</em></h1>
          <p className="hero-intro">Thoughtful online tutoring that meets learners where they are and helps them move forward with confidence.</p>
          <Link className="button button-light" href="/programs">Explore our programs <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-caption">Learning together, wherever you are.</div>
      </section>

      <section className="intro-section page-width" id="about">
        <div className="section-kicker"><span className="red-dot" /> ABOUT THE ACADEMY</div>
        <div className="intro-grid">
          <h2>Education that feels <em>personal.</em></h2>
          <div>
            <p className="lead">Every learner brings a different story, a different pace, and a different kind of potential.</p>
            <p>Prevailers is built around that idea. Through live online tutoring, we make space for questions, steady progress, and the moments when a difficult topic finally makes sense.</p>
            <Link className="text-link" href="/about">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="programs-section" id="subjects">
        <div className="page-width">
          <div className="section-heading-row">
            <div><div className="section-kicker"><span className="red-dot" /> WHAT WE TEACH</div><h2>Room to discover.<br /><em>Support to succeed.</em></h2></div>
            <p>From foundational skills to focused exam preparation, learning starts with the support each student needs.</p>
          </div>
          <div className="subject-list">
            {subjects.map((subject) => (
              <Link href="/programs" className="subject-row" key={subject.number}>
                <span className="subject-number">{subject.number}</span>
                <span className="subject-title">{subject.title}</span>
                <span className="subject-detail">{subject.detail}</span>
                <span className="circle-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <Link className="button button-dark" href="/programs">View all programs <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="approach-section page-width">
        <div className="approach-visual"><span className="visual-index">01 / THE APPROACH</span><div className="visual-quote">A good question<br />can change <em>everything.</em></div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-spark">✳</div></div>
        <div className="approach-copy"><div className="section-kicker"><span className="red-dot" /> THE PREVAILERS WAY</div><h2>More than a lesson.<br /><em>A learning partnership.</em></h2><p>We believe progress grows when students feel seen and supported. Our online format creates room for focused attention, regular practice, and learning that fits into real life.</p><Link className="text-link" href="/online-learning">Explore the experience <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="steps-section">
        <div className="page-width"><div className="section-kicker"><span className="red-dot" /> LEARNING, MADE SIMPLE</div><div className="steps-heading"><h2>Your next step<br /><em>starts here.</em></h2><p>Online tutoring gives learners a welcoming place to show up, ask questions, and keep growing from wherever they are.</p></div><div className="steps-grid"><div><span>01</span><h3>Find your focus</h3><p>Explore the subject areas and learning goals that matter most to you.</p></div><div><span>02</span><h3>Learn live online</h3><p>Connect through guided sessions designed for participation and understanding.</p></div><div><span>03</span><h3>Keep moving forward</h3><p>Build knowledge and confidence, one meaningful step at a time.</p></div></div></div>
      </section>

      <section className="testimonials-section page-width" aria-labelledby="testimonials-title">
        <div className="section-kicker"><span className="red-dot" /> LIVE LEARNING</div>
        <div className="testimonials-grid">
          <div className="testimonials-copy"><h2 id="testimonials-title">Learning, as it<br /><em>happens.</em></h2><p>A look at learners taking part in live online classes from home.</p><Link className="text-link" href="/gallery">Browse the class gallery <span aria-hidden="true">↗</span></Link></div>
          <div className="live-class-gallery" aria-label="Photos from live online classes">
            {classPhotos.slice(0, 4).map((photo) => <div className="live-class-photo" key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 45vw, 22vw" /></div>)}
          </div>
        </div>
      </section>

      <section className="closing-section"><div className="page-width closing-inner"><div className="section-kicker light"><span className="red-dot" /> READY TO BEGIN?</div><h2>There is more<br /><em>ahead of you.</em></h2><p>Take the first step towards learning with Prevailers.</p><Link className="button button-light" href="/enroll">Enroll now <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
