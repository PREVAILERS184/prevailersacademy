"use client";

import { useState } from "react";
import Link from "next/link";

const programs = [
  { title: "Mathematics", category: "Core subjects", description: "Numbers, algebra, geometry, and problem solving." },
  { title: "English language", category: "Core subjects", description: "Grammar, expression, reading, and comprehension." },
  { title: "Literacy & writing", category: "Core subjects", description: "Building strong reading habits and clear written communication." },
  { title: "Biology", category: "Science", description: "Living systems, scientific ideas, and confident understanding." },
  { title: "Chemistry", category: "Science", description: "Concepts, calculations, and the language of chemistry." },
  { title: "Physics", category: "Science", description: "Making sense of forces, energy, motion, and more." },
  { title: "Exam preparation", category: "Exam support", description: "Structured practice and support for upcoming assessments." },
  { title: "Study skills", category: "Exam support", description: "Planning, revision, and learning strategies that last." },
];

const filters = ["All programs", "Core subjects", "Science", "Exam support"];

export default function ProgramsPage() {
  const [filter, setFilter] = useState("All programs");
  const visible = filter === "All programs" ? programs : programs.filter((item) => item.category === filter);

  return <main><section className="page-hero"><div className="page-width"><div className="section-kicker light"><span className="red-dot" /> EXPLORE LEARNING</div><h1>Find your<br /><em>way forward.</em></h1><p>Explore areas where online tutoring can help learners strengthen understanding, practise new skills, and grow in confidence.</p></div></section><section className="programs-content page-width"><div className="programs-intro"><p>Every learning journey is different. Browse the subject areas below to see where focused support could make a difference.</p><span>{visible.length.toString().padStart(2,"0")} AREAS OF SUPPORT</span></div><div className="program-filters" role="group" aria-label="Filter programs">{filters.map((item)=><button key={item} type="button" onClick={()=>setFilter(item)} aria-pressed={filter===item} className={filter===item?"active":""}>{item}</button>)}</div><div className="program-list">{visible.map((item)=><article className="program-item" key={item.title}><div><h2>{item.title}</h2><p>{item.description}</p></div><span>{item.category}</span><b aria-hidden="true">↗</b></article>)}</div></section><section className="closing-section"><div className="page-width closing-inner"><div className="section-kicker light"><span className="red-dot" /> LEARN YOUR WAY</div><h2>Learning can happen<br /><em>anywhere.</em></h2><p>See how the online learning experience is designed around real life.</p><Link className="button button-light" href="/online-learning">How online learning works <span aria-hidden="true">↗</span></Link></div></section></main>;
}
