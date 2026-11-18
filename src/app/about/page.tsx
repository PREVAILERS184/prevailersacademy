import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Prevailers Academia Star Ltd",
  description: "Learn about the idea behind Prevailers and our online-first approach to tutoring.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero"><div className="page-width"><div className="section-kicker light"><span className="red-dot" /> ABOUT PREVAILERS</div><h1>Every learner can<br /><em>move forward.</em></h1><p>We are building a place for curiosity, understanding, and confidence through tutoring that reaches learners online.</p></div></section>
      <section className="about-story page-width"><div className="section-kicker"><span className="red-dot" /> OUR STORY</div><div className="about-story-grid"><h2>Learning starts when someone believes you can.</h2><div><p className="lead">Prevailers is guided by a simple idea: each learner deserves the time and encouragement to understand.</p><p>Our online-first approach makes learning possible beyond the limits of a single classroom. We focus on clear explanations, space to ask questions, and steady progress at each learner’s pace.</p><p>We do not currently have a physical location. The academy is being built around the online learning experience.</p></div></div></section>
      <section className="team-section"><div className="page-width"><div className="team-heading"><div><div className="section-kicker"><span className="red-dot" /> THE PEOPLE</div><h2>Meet the team.</h2></div><p>Meet the people helping to lead Prevailers Academia Star Ltd and support its learning experience.</p></div><div className="team-grid"><article className="team-card"><div className="team-photo"><Image src="/images/caleb-yakubu.jpeg" alt="Caleb Atiskebkwerika Yakubu" fill sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 22vw" /></div><div className="team-card-copy"><span>CEO</span><h3>Caleb Atiskebkwerika Yakubu <small>(Prevail)</small></h3></div></article><article className="team-card"><div className="team-photo"><Image src="/images/pepsy-audu.jpeg" alt="Pepsy Penom Audu" fill sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 22vw" /></div><div className="team-card-copy"><span>PROJECT MANAGER</span><h3>Pepsy Penom Audu</h3></div></article></div></div></section>
      <section className="about-next page-width"><div><div className="section-kicker"><span className="red-dot" /> OUR APPROACH</div><h2>Personal attention.<br /><em>Online access.</em></h2></div><div><p>Our online setting gives learners a comfortable way to join live tutoring from wherever they are. The goal is to make room for questions and help understanding grow over time.</p><Link className="text-link" href="/online-learning">See how online learning works <span aria-hidden="true">↗</span></Link></div></section>
      <section className="closing-section"><div className="page-width closing-inner"><div className="section-kicker light"><span className="red-dot" /> JOIN THE JOURNEY</div><h2>Let&apos;s make room<br /><em>for what&apos;s next.</em></h2><p>Tell us what kind of learning support you are looking for.</p><Link className="button button-light" href="/enroll">Enroll now <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
